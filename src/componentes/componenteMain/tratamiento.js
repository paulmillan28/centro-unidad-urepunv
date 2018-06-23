import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import CarouselCards from './carouselCards';
import {datosTratamiento} from './constantes';
import {Row, Parallax, Col} from 'react-materialize';

class Tratamiento extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }

render(){
  return(
    <div >
      <Parallax 
        className = "divMargin"
         imageSrc="https://storage.googleapis.com/centro-images/psicologo/psico-one.jpg"/>
      <Row/>
      <Row>
        <Col s={12}>
          <div className = "divSpanTratamiento">
            ¡SOMOS UN CENTRO DE REHABILITACIÓN CERTIFICADO ANTE CENADIC!<br></br>
            <span className = "divSpanInstalaciones2">Nuestros tratamientos son parte de este reconocimiento</span>
          </div>
        </Col>
      </Row>
      <Row>
        <CarouselCards datos = {datosTratamiento}/>
      </Row>
    </div>
  );
}
  }

export default Tratamiento;
