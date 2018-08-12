import React from 'react'
import { Search, ResultList } from '../../index.js'
import { Container, Row, Col } from 'reactstrap';
import './Home.css'
import logic from '../../logic'




export default class Home extends React.Component {
  state = {
    bossesData: {},
    staticBossesData:{},
    itsok: false,
  }
componentDidMount(){
   logic.getAllBosses()
  .then(res => {
    this.setState({
      bossesData: res.bosses,
      staticBossesData: res.bosses,
      itsok: true,
    })
    console.log(this.state.bossesData)
  })
}

searchNames = value => {

const valueToLower = value.toLowerCase()

let result = this.state.staticBossesData.filter((boss) => {

  const nameToLower = boss.name.toLowerCase()

  if (nameToLower.search(valueToLower) !== -1) {
    return boss
  }
})
this.setState({
  bossesData: result,
})
}


  render() {
    return (
        <div id="home-cont">
      <Container>
        <Row><Col></Col>
          <Col sm='6'><Search searchNames={this.searchNames}/></Col>
          <Col></Col>
        </Row>
       {this.state.itsok && <ResultList infoBosses={this.state.bossesData} />}
      </Container>
      </div>
    );
  }
}

