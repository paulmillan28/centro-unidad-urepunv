import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TituloCabecera from './componenteTonto';
import CarouselM from './carousel';
import Section from './section';
import { datosCard } from './constantes';
import ParallaxM from './parallax';
import FooterM from './footer';
import { Collapsible, CollapsibleItem, Col, Row } from 'react-materialize';
import CarouselCards from './carouselCards';

class PaginaPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const datos = { datosCard };

    return (
      <div>
        <CarouselM datos={datosCard} />
       
        <Section datos={datosCard} />
        <ParallaxM />
        <FooterM />
      </div>
    );
  }
}


export default PaginaPrincipal;
