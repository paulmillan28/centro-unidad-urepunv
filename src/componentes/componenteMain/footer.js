import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import {Footer,Icon} from 'react-materialize';

class FooterM extends Component{
  constructor(props){
    super(props);
    this.state ={};
    this.modal = this.modal.bind(this);
  }
modal(event){
  event.preventDefault();

}
render(){
  return(
        <div className = "divFooter">
            <div className="section white">
                <div className="row container"></div>
            </div>
            <Footer  copyrights={<div className = "divCopy">&copy 2017 Copyright</div>}
                moreLinks={
                  <div className = "divFac">
                <a className="btn right btnFacebook" target = "_blank" href="https://www.facebook.com/unidadterapeuticacostarica2019/?modal=admin_todo_tour">FACEBOOK</a>
                </div>}
                className="nav"
                >
                <p className="white-text divCont">Contáctanos</p>
                <p ><a className="grey-text text-lighten-4" href="tel:6671609426">6671609426<Icon center left>call</Icon></a></p>
                <p ><a className="grey-text text-lighten-4" target = "_blank" href="https://www.google.com.mx/maps/place/Centro+de+rehabilitaci%C3%B3n+Un+Rayo+de+Esperanza+Por+Una+Nueva+Vida-Urepunv/@24.6002953,-107.3873961,17z/data=!3m1!4b1!4m5!3m4!1s0x86a32c9d7c7ab265:0xaecdb56aa5a5c8be!8m2!3d24.6002953!4d-107.3852074">Ubícanos con Google Maps solo dando click aquí<Icon center left>room</Icon></a></p>
                <p ><a className="grey-text text-lighten-4" target = "_blank" href="mailto:gregorio-german@hotmail.com">gregorio-german@hotmail.com<Icon center left>mail</Icon></a></p>
            </Footer>
        </div>
      );
  }
}

export default FooterM;
