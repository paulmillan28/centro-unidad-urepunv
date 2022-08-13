import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TituloCabecera from './componenteTonto';
import { Parallax } from 'react-materialize';

class ParallaxM extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.modal = this.modal.bind(this);
  }
  modal(event) {
    event.preventDefault();

  }
  render() {
    return (
      <div>
        <div className="section white">
          <div className="row container"></div>
        </div>
        <Parallax
          className="paralax"
          imageSrc="https://storage.googleapis.com/centro-images/urepunv/fachada.jpeg" />
      </div>
    );
  }
}

export default ParallaxM;
