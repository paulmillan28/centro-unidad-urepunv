import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CarouselCards from './carouselCards';
import { datosTratamiento } from './constantes';
import { Row, Col, Parallax } from 'react-materialize';
import CardModificado from './cardModificado';

class Costo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Parallax
          imageSrc="http://urepunv.ml/img/ctm/cisne3.jpg" />
        <Row />
        <Row>
          <Col s={12}>
            <div className="divSpanTratamiento">
              ¡NUESTRO CENTRO DE REHABILITACIÓN TIENE APOYO GUBERNAMENTAL!<br></br>
              <span className="divSpanInstalaciones2">¡Por lo tanto nuestros precios son muy accesibles!</span>
            </div>
          </Col>
        </Row>
        <div className="container divCosto">
          <Row>
            <Col s={12} l={6} m={12}>
              <CardModificado
                titulo="INGRESO"
                precio="2000"
                imagen="https://icon-icons.com/icons2/1095/PNG/512/1485476049-artboard-1_78529.png"
                descripcion="Se paga una sola vez y se tiene todo el tiempo que el usuario este en la agrupación para pagar." />
            </Col>
            <Col s={12} l={6} m={12}>
              <CardModificado
                titulo="DOCTOR"
                precio="150"
                imagen="http://www.masadmin.net/wp-content/themes/masadmin/imgs/icon13.png"
                descripcion="Único pago de $150." />
            </Col>
          </Row>
          <Row>
            <Col s={12} l={6} m={12}>
              <CardModificado
                titulo="PSICOLÓGO"
                precio="150"
                imagen="http://www.pvhc.net/img200/fcbypdqywsvewvmruwkk.png"
                descripcion="Único pago de $150." />
            </Col>
            <Col s={12} l={6} m={12}>
              <CardModificado
                titulo="COMIDA"
                precio="350"
                imagen="https://icon-icons.com/icons2/1151/PNG/512/1486505264-food-fork-kitchen-knife-meanns-restaurant_81404.png"
                descripcion="El pago es cada semana." />
            </Col>
          </Row>
          <Row>
            <Col s={12} l={6} m={12}>
              <CardModificado
                titulo="TRANSPORTE"
                precio="Depende de la lejanía del domicilio del usuario a ingresar."
                imagen="http://freeflaticons.com/wp-content/uploads/2014/09/black-copy-14105284194nk8g.png"
                descripcion="Único pago" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Costo;
