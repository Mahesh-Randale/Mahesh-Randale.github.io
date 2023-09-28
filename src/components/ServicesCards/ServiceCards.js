import "./serviceCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bg1 from "../../images/bg1.jpg";
import bg2 from "../../images/bg2.jpg";
import bg3 from "../../images/bg3.jpg";
import bg4 from "../../images/bg4.jpg";
import bg5 from "../../images/bg5.jpg";
import bg6 from "../../images/bg6.jpg";

// import
const ServiceCards = () => {
  const service_title_text = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
    "Service 6",
  ];
  const service_text = [
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  ];
  const service_buttons_links = [
    "link1",
    "link2",
    "link3",
    "link4",
    "link5",
    "link6",
  ];
  const imageList = [bg1, bg2, bg3, bg4, bg5, bg6];
  return (
    <div className="service-Cards-Container">
      <div className="serviceHeader1">Services we provide</div>
      <br />
      <div className="serviceHeader2"> COVERED IN THESE AREAS</div>
      <hr className="service-hr" />
      <div className="service-Cards-Holder">
        {service_title_text.map((service_title, index) => (
          <Card
            key={index}
            className="servicecards"
            style={{
              width: "25rem",
              boxShadow: "10px 15px 5px cornflowerblue",
            }}
          >
            <Card.Img
              key={service_title}
              variant="top"
              src={imageList[index]}
            />
            <Card.Body>
              <Card.Title>{service_title}</Card.Title>
              <Card.Text>{service_text[index]}</Card.Text>
              <Button key={service_buttons_links} variant="primary">
                {service_buttons_links[index]}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default ServiceCards;
