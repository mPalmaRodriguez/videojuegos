import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './card.css';


const CardApp = (props) => {
  return (
    <Card style={{ width: "18rem" , border:"solid 3px palevioletred"}} className="m-5 text-center">
      <Card.Img variant="top" src={props.imageSrc}  style={{width: "282px", height:"400px"}}/>
      <Card.Body style={{background:"black", color:"whitesmoke" }}>
        <Card.Title style={{background:"black", color:"whitesmoke" }}>{props.title}</Card.Title>
        <Card.Text style={{background:"black", color:"whitesmoke" }} src={props.Text}>
          
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
        </Card.Text>
        <Button className="buttonCard" style={{background:"palevioletred", border:" solid 2px #2983CD"}} >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardApp;
