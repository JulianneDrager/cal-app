import { useParams } from "react-router-dom";
import UserLink from "../UI/UserLink";
import Wrapper from "../UI/Wrapper";
import { Form, Col, Button } from "react-bootstrap";
import style from "../Create/Create.module.css";

const Review = () => {
  const header = style.header;
  const {
    event,
    contactname,
    contactphone,
    contactemail,
    street,
    state,
    city,
    zipcode,
  } = useParams();

  const subLink = "/test";

  const setData = (data) => {
    console.log(data);
  };

  // const [contactname] = useContext(ReviewEventContext);

  return (
    <>
      <Wrapper>
        <h1 className={header}>Review Event Information</h1>
        <hr />
        <Col className={"col-sm-5"}>
          <Form.Label>Event Title:</Form.Label>
          <Form.Control value={event} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>Event Address: </Form.Label>
          <Form.Control value={street} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>City: </Form.Label>
          <Form.Control value={city} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>State: </Form.Label>
          <Form.Control value={state} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>Zip Code: </Form.Label>
          <Form.Control value={zipcode} />
        </Col>
        <br />
        <hr />
        <Col className={"col-sm-5"}>
          <Form.Label>Event planer: </Form.Label>
          <Form.Control value={contactname} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>Phone: </Form.Label>
          <Form.Control value={contactphone} />
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Label>Email: </Form.Label>
          <Form.Control value={contactemail} />
        </Col>
        <br />
        <hr />

        <Col className={"col-sm-5"}>
          <Form.Text>Is everything all set? </Form.Text>
          {/* this will send email */}
          <Button style={{ width: 321 }}>SUBMIT FOR REVIEW</Button>
        </Col>
        <br />
        <Col className={"col-sm-5"}>
          <Form.Text>Need to update somthing? </Form.Text>
          {/* this will send PUT request to update */}
          <UserLink
            linkTo={subLink}
            style={{ width: 321 }}
          >
            EDIT
          </UserLink>
        </Col>
      </Wrapper>
    </>
  );
};
export default Review;

// useEffect(() => {
//     axios
//       .get("http://localhost:3001/get")
//     //   url: "https://heart-song-cal-app.herokuapp.com/get",
//      .then((res) => {
//       setContactName(res.data);
//       console.log("resp", res.data);
//     //   console.log("resp data", res.data.data.contactname);
//     });
//   }, [setContactName]);
