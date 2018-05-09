import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import CarouselCards from './carouselCards';
import {datosTratamiento} from './constantes';
import {Row} from 'react-materialize';

class CardModificado extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }

render(){
  return(
   <div>
        <h2 className="header">{this.props.titulo}</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img src={this.props.imagen}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p><b>Descripción: </b><br/><br/>{this.props.descripcion}</p>
            </div>
            <div className="card-action">
              <p><b>Costo :</b> {this.props.precio}</p>
            </div>
          </div>
        </div>
  </div>
  );
}
  }
CardModificado.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired
};

export default CardModificado;
