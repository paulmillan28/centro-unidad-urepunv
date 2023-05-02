import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TituloCabecera from './componenteTonto';
import { Navbar, NavItem, Button, Icon } from 'react-materialize';
import AppBar from 'material-ui/AppBar';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.contacto = this.contacto.bind(this);
  }
  contacto(event) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div>
        <div>
          <AppBar
            style={{ textAlign: "left", background: 'black' }}
            className="divApp"
            iconElementLeft={<Icon className="divIcon" medium>dehaze</Icon>}
            onClick={this.novedades}
            title={<div className="divTitulo">ANNEL MEZA MAKEUP</div>}
            iconElementRight={<Button className="btn-contacto" onClick={this.contacto}>Contacto</Button>}
          />
        </div>
      </div>
    );
  }
}


export default NavBar;
