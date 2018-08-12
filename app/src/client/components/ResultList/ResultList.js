import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ModalInfo } from '../../index'
import './ResultList.css'



class ResultList extends React.Component  {

state = {
  id: "",
  name: "",
  health: "",
  description: "",
  level: "",
  modaltrue: false,

}

setModalParams = (id, name, level, health, description) => {
  this.setState({
    id,
    name,
    level,
    health,
    description,
    modaltrue: true
  })
} 



render(){
  return (
    <Row>
      {this.props.infoBosses.map(({id, name, level, health, description})=> {
        return(
        <Col sm='4'>
        <Card className="bossesCard">
          <CardImg top width="100%" src={`http://media.blizzard.com/wow/renders/npcs/zoom/creature${id}.jpg`} alt="Card image cap" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>Level:{level}</CardSubtitle>
        <Button className="cardButton" onClick={()=>this.setModalParams(id, name, level, health, description)}>More Info</Button> 
          </CardBody>
        </Card>
        </Col>
      )
      })}
      {this.state.modaltrue && <ModalInfo id={this.state.id} name={this.state.name} level={this.state.level} health={this.state.health} description={this.state.description} />}
    </Row>
  );
};
}

export default ResultList;