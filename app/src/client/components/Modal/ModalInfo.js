import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from 'reactstrap';
import './ModalInfo.css'

class ModalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount(){
    this.toggle()
  }

componentWillReceiveProps(newProps){
  this.toggle()
}

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
          <ModalBody>
          <img className="modalphoto" src={`http://media.blizzard.com/wow/renders/npcs/zoom/creature${this.props.id}.jpg`}/>
            {this.props.description}
            {/* <Progress color="success" value="100">{`Health: ${this.props.health}`}</Progress> */}
           <div> {`Level: ${this.props.level}`} </div>
            <Progress animated color="success" value="100">{`Health: ${this.props.health}`} </Progress>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalInfo;