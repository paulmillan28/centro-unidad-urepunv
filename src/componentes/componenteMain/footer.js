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
            <Footer 
                moreLinks={
                  <div className = "divFac">
                <a className="btn right btnFacebook" target = "_blank" href="https://www.facebook.com/profile.php?id=100091591705260">FACEBOOK</a>
                </div>}
                className="nav"
                >
                <p className="white-text divCont">Contáctanos</p>
                <p ><a className="grey-text text-lighten-4" href="tel:6671519609">6671519609<Icon center left>call</Icon></a></p>
                <p ><a className="grey-text text-lighten-4" target = "_blank" href="https://www.google.com.mx/maps/place/Cerro+del+Colli+953,+80197+Sin./@24.7597189,-107.4025419,17z/data=!3m1!4b1!4m6!3m5!1s0x86bcd124ff2155ab:0x6ddc29df5718a5c2!8m2!3d24.7597141!4d-107.399967!16s%2Fg%2F11s9gbjt5t">Ubícanos con Google Maps solo dando click aquí<Icon center left>room</Icon></a></p>
                <p ><a className="grey-text text-lighten-4" target = "_blank" href="mailto:annelmeza06@gmail.com">annelmeza06@gmail.com<Icon center left>mail</Icon></a></p>
            </Footer>
        </div>
      );
  }
}

export default FooterM;
