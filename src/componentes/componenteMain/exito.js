import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import CarouselM from './carousel';
import {Row, Col,Parallax} from 'react-materialize';

class Exito extends Component{
  constructor(props){
    super(props);
    this.state ={
      lightboxIsOpen : false
    };
    this.closeLightbox = this.closeLightbox.bind(this);
  }
  componentDidMount() {
   
  }
  closeLightbox(){
    this.setState({lightboxIsOpen : false});
  }
render(){
  return(
    <div>
      <Parallax 
         className = "divMargin"              
         imageSrc= 'https://storage.googleapis.com/centro-images/utcr2/fachada/1.jpg'/>
      <Row/>
      <Row>
        <Col s={12}>
          <div className = "divSpanInstalaciones">
             ¡SI SE PUEDE DEJAR EL ALCOHOL Y LAS DROGAS !<br></br>
            <span className = "divSpanInstalaciones2">¡Ellos lo han demostrado!</span>
          </div>
        </Col>
      </Row>

      <Row>
	      <Col s={12} m = {6} l ={4}>
                 <iframe 
                     width="100%"
                     height="315"
                     src="https://www.youtube.com/embed/wV1RO_JiV0k"
                     frameBorder="0"
                     allowFullScreen>
                 </iframe>
        </Col>
        <Col s={12} m = {6} l ={4}>
                 <iframe 
                     width="100%"
                     height="315"
                     src="https://www.youtube.com/embed/wV1RO_JiV0k"
                     frameBorder="0"
                     allowFullScreen>
                 </iframe>
        </Col>
        <Col s={12} m = {6} l ={4}>
                 <iframe 
                     width="100%"
                     height="315"
                     src="https://www.youtube.com/embed/wV1RO_JiV0k"
                      frameBorder="0"
                     allowFullScreen>
                 </iframe>
        </Col>
      </Row>
      <Row>
	      <Col s={12} m = {6} l ={4}>
                 <iframe 
                     width="100%"
                     height="315"
                     src="https://www.youtube.com/embed/wV1RO_JiV0k"
                      frameBorder="0"
                     allowFullScreen>
                 </iframe>
        </Col>
        <Col s={12} m = {6} l ={4}>
                 <iframe 
                     width="100%"
                     height="315"
                     src="https://www.youtube.com/embed/wV1RO_JiV0k"
                     frameBorder="0"
                     allowFullScreen>
                 </iframe>
        </Col>
        <Col s={12} m = {6} l ={4}>
                 <iframe 
                     width="100%"
                     height="315"
                     src="https://www.youtube.com/embed/wV1RO_JiV0k"
                     frameBorder="0"
                     allowFullScreen>
                 </iframe>
        </Col>
      </Row>
    </div>
  );
}
  }

export default Exito;
