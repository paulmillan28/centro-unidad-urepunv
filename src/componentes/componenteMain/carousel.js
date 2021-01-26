import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TituloCabecera from './componenteTonto';
import { Slider, Slide } from 'react-materialize';
const optionsCarousel = {
  duration: 200,
  fullWidth: true,
  indicators: true,
  noWrap: true
};
class CarouselM extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.carousel.carousel-slider').carousel(
       {
        fullWidth: true       
       } 
      );
      window.setInterval(function () { $('.carousel.carousel-slider').carousel('next'); }, 3000);
    });
  }

  render() {
    return (
      <div className='mainCarousel'>
        <div className='carousel carousel-slider' data-indicators='true'>
          {this.props.datos.map((row, index) => (
            <a key={index} className='carousel-item' href=''><img src={row.imagen} /></a>
          ))}
        </div>
      </div>
    );
  }
}
CarouselM.propTypes = {
  datos: PropTypes.array.isRequired
};


export default CarouselM;
