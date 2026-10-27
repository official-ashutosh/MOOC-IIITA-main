import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CartItemCheckout = ({cartItem}) => {
  const courseDetails = cartItem;



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
              
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

CartItemCheckout.propTypes = {
  cartItem: PropTypes.shape({
    course: PropTypes.shape({
      picture: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default CartItemCheckout;
