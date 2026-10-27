import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { removeFromCart } from "../services/cartsService";

const CartItem = ({ cartItem, onRemove }) => {
  const courseDetails = cartItem;

  const handleRemove = () => {
    removeFromCart(localStorage.getItem("cartId"), courseDetails.course._id)
      .then(() => {
        onRemove(courseDetails.course._id); // Truyền courseId để xóa khỏi danh sách
      })
      .catch((error) => {
        console.error("Error removing from cart:", error);
      });
  };


  return (
    <Col xs={12}>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col xs={3}>
              <Card.Img
                src={courseDetails.course.picture}
                alt={courseDetails.course.title}
                style={{ maxWidth: "200px", maxHeight: "150px" }}
              />
            </Col>
            <Col xs={9}>
              <Row>
                <Col>
                  <Card.Title>{courseDetails.course.title}</Card.Title>
                </Col>
                <Col className="text-right">
                  <Card.Text>Price: ${courseDetails.course.price}</Card.Text>
                </Col>
              </Row>
              <Card.Text>{courseDetails.course.description}</Card.Text>
              <div className="d-flex justify-content-end">
                <Button variant="primary"  onClick={handleRemove}>
                  Remove from Cart
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    course: PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      picture: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
