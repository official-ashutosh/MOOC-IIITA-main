import mongoose from "mongoose";
import Invoice from "../models/InvoiceModel.js";
import InvoiceItem from "../models/InvoiceItemModel.js";
import Cart from "../models/CartModel.js";
import CartItem from "../models/CartItemModel.js";
import PaymentMethod from "../models/PaymentMethodEnum.js";
import Course from "../models/CourseModel.js";
import Topic from "../models/TopicEnum.js";
import User from "../models/UserModel.js";

// Endpoint for handling the checkout process
const checkout = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const userId = req.user._id;

    // Find user's cart
    const userCart = await Cart.findOne({ userId: userId }).session(session);
    if (!userCart) {
      return res.status(404).json({ error: "Cart does not exist." });
    }

    // Find all items in the cart
    const cartItems = await CartItem.find({ cartId: userCart._id }).session(session);

    if (cartItems.length === 0) {
      return res.status(400).json({ error: "There are no items in the cart to checkout." });
    }

    // Create a new invoice
    const invoice = new Invoice({
      userId: userId,
      paymentMethod: req.body.paymentMethod || PaymentMethod.PAYPAL, // Default if not provided
    });
    await invoice.save({ session });

    // Create invoice items based on cart items
    for (let item of cartItems) {
      const invoiceItem = new InvoiceItem({
        invoiceId: invoice._id,
        courseId: item.courseId,
      });
      await invoiceItem.save({ session });
    }

    // Delete cart items after successful checkout
    await CartItem.deleteMany({ cartId: userCart._id }).session(session);

    await session.commitTransaction();
    session.endSession();
    res.status(201).json({ message: "Payment successful", invoiceId: invoice._id });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ error: "Error during payment: " + error.message });
  }
};

const myInvoice = async (req, res) => {
  const userId = req.user._id;
  try {
    const invoices = await Invoice.find({ userId: userId });
    if (invoices.length === 0) {
      return res.status(404).json({ message: "No invoices found" });
    }
    res.status(200).json({ invoices });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMyCourses = async (req, res) => {
  const userId = req.user._id;
  try {
    // Lấy tất cả hóa đơn của người dùng
    const invoices = await Invoice.find({ userId: userId });
  
    // Duyệt qua từng hóa đơn và thu thập các courseId từ các mục hóa đơn
    let courseIds = new Set();
    for (let invoice of invoices) {
      const items = await InvoiceItem.find({ invoiceId: invoice._id });
      items.forEach((item) => courseIds.add(item.courseId.toString()));
    }

    // Lấy chi tiết các khóa học dựa trên courseId
    const courses = await Course.find({
      _id: { $in: Array.from(courseIds) },
    });

    const newCourses = await Promise.all(
      courses.map(async (course) => {
        const user = await User.findById(course.userId);
        return {
          ...course.toObject(),
          instructorName: user.name,
        };
      })
    );

    // Gửi chi tiết các khóa học về cho client
    res.status(200).json({ courses: newCourses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchByName = async (req, res) => {
  const name = req.params.str;
  const userId = req.user._id;

  try {
    // Tìm tất cả hóa đơn của người dùng
    const invoices = await Invoice.find({ userId: userId });
    let courseIds = new Set();

    // Duyệt qua từng hóa đơn để lấy courseId
    for (let invoice of invoices) {
      const items = await InvoiceItem.find({ invoiceId: invoice._id });
      items.forEach((item) => courseIds.add(item.courseId.toString()));
    }

    // Tìm kiếm khóa học theo tên và chỉ trong số các khóa học của người dùng
    const courses = await Course.find({
      _id: { $in: Array.from(courseIds) },
      title: { $regex: new RegExp(name, "i") }, // Tìm kiếm không phân biệt hoa thường
    });

    if (courses.length === 0) {
      return res
        .status(404)
        .json({ message: "No courses found matching the search." });
    }

    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchByTopic = async (req, res) => {
  const userId = req.user._id;
  const topicName = req.params.str;

  try {
    if (!(topicName in Topic)) {
      return res.status(404).json({ message: "Topic does not exist." });
    }

    // Tìm các khóa học theo userId và topicId
    const courses = await Course.find({
      userId: userId,
      topic: topicName,
    }).sort({ createdAt: -1 });

    if (courses.length === 0) {
      return res
        .status(404)
        .json({ message: "No courses found in this topic." });
    }

    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const searchByTimeUpdate = async (req, res) => {
  const userId = req.user._id;

  try {
    // Lấy tất cả hóa đơn của người dùng
    const invoices = await Invoice.find({ userId: userId });
    let courseIds = new Set();

    // Duyệt qua từng hóa đơn để lấy courseId
    for (let invoice of invoices) {
      const items = await InvoiceItem.find({ invoiceId: invoice._id });
      items.forEach((item) => courseIds.add(item.courseId.toString()));
    }

    // Lấy chi tiết các khóa học dựa trên courseId và sắp xếp theo thời gian cập nhật
    const courses = await Course.find({
      _id: { $in: Array.from(courseIds) },
    }).sort({ updatedAt: -1 }); // Sắp xếp theo thời gian cập nhật mới nhất

    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  checkout,
  myInvoice,
  getMyCourses,
  searchByName,
  searchByTopic,
  searchByTimeUpdate,
};
