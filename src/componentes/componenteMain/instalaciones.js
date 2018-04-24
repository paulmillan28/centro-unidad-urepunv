import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import CarouselM from './carousel';
import {constInstalaciones} from './constantes';
import Gallery from 'react-grid-gallery';
import {IMAGES} from './constantes';
import {Row, Col,Parallax} from 'react-materialize';

class Instalaciones extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }
  componentDidMount() {
   
  }

render(){
  return(
    <div>
      <Parallax 
         className = "divMargin instalacionesParallax"              
         imageSrc="http://urepunv.ml/img/fachada.jpg"/>
      <Row/>
      <Row>
        <Col s={12}>
          <div className = "divSpanInstalaciones">
            ¡CONOCE NUESTRAS INSTALACIONES!
          </div>
        </Col>
      </Row>

      <Row>
	      <Col s={12}>
          <Gallery
          backdropClosesModal
          imageCountSeparator = " de "
          images={IMAGES}/>
        </Col>
      </Row>
    </div>
  );
}
  }

export default Instalaciones;
