import react from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
  Row,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
class Home extends react.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index) {
    this.props.callBack(index);
  }
  render() {
    return (
      <>
        <div style={{ color: "#000", height: "100px" }}>
          <p>hi</p>
        </div>
      </>
    );
  }
}
export default Home;
