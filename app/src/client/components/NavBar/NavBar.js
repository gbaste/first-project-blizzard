import React from 'react'
import './NavBar.css'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <div class="bg-light nav-cont" >
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-around">
        <a class="navbar-brand" href="#"><img src="/images/bliz-logo.png" width="80px" alt="logo"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Notices</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Patchs</a>
      </li>
    </ul>
<ul class="navbar-nav my-2 my-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Register</a>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
  }
}