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
          imageSrc=      "https://scontent.fcul1-1.fna.fbcdn.net/v/t39.30808-6/344392234_625625459447746_75300950810981056_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=OHWClZbhMrkAX-d4Wm6&_nc_ht=scontent.fcul1-1.fna&oh=00_AfBRTQ8VMD0X0FL6XBo9LqRDUH0t28MHrNP0fpo3gs2fMw&oe=64559078"
          />
      </div>
    );
  }
}

export default ParallaxM;
