import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TituloCabecera from './componenteTonto';
import CarouselM from './carousel';
import { constInstalaciones, IMAGES_CERTIFICACIONES } from './constantes';
import Gallery from 'react-grid-gallery';
import { Row, Col, Parallax } from 'react-materialize';

class Certificaciones extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Parallax
          className="divMargin"
          imageSrc="http://urepunv.ml/img/coo.jpg" />
        <Row />
        <Row>
          <Col s={12}>
            <div className="divSpanInstalaciones">
              ¡CONOCE NUESTRAS MÚLTIPLES CERTIFICACIONES!
          </div>
          </Col>
        </Row>

        <Row>
          <Col s={12}>
            <Gallery
              backdropClosesModal
              imageCountSeparator=" de "
              images={IMAGES_CERTIFICACIONES} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Certificaciones;
