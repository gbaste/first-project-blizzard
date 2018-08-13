import React from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
 } from 'reactstrap';
 import './Search.css'



export default class Search extends React.Component{ 

keepSearch = event => this.props.searchNames(event.target.value)

render() {
    return  <div id="searchPanel">
      <Form onSubmit={()=> this.handlerSearch()}>
        <InputGroup>
          <Input id="searchInput" placeholder="write a Boss name.." autoFocus="true" autoComplete="off" onChange={this.keepSearch} />
          {/* <InputGroupAddon addonType="append"><Button id="searchButton">Search</Button></InputGroupAddon> */}
        </InputGroup>
        </Form>
      </div>
}
    }
