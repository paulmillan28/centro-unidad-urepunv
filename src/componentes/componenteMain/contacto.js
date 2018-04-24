import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import {Tab,Tabs} from 'material-ui/Tabs';
import {Icon,MediaBox,Row,Col} from 'react-materialize';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';

      const styles = {
        headline: {
          fontSize: 24,
          paddingTop: 16,
          marginBottom: 12,
          fontWeight: 400,
          marginTop : 5
        }
      };

class Contacto extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }

render(){
  return(
    <div>
          <div className = "solo_movil divMargin container">
          <Row>
               <Col s={12} m={12} l={12}>
               <div className = "center-align">
               <h2 style={styles.headline}><b>INFORMACIÓN GENERAL</b></h2>
                 <b className = "informG">Información de contacto:</b>
                 <p><b>Número particular:</b></p>
                  <p ><a href="tel:6677283315"><Icon className = "divMiddle" center>call</Icon>6677283315</a></p>
                  <p><b>Número de celular:</b></p>
                  <p ><a href="tel:6671609426"><Icon className = "divMiddle" center>call</Icon>6671609426</a></p>
                  <p><b>Dirección:</b></p>
                  <p ><a target = "_blank" href="https://www.google.com.mx/maps/place/Centro+de+rehabilitaci%C3%B3n+Un+Rayo+de+Esperanza+Por+Una+Nueva+Vida-Urepunv/@24.6002953,-107.3873961,17z/data=!3m1!4b1!4m5!3m4!1s0x86a32c9d7c7ab265:0xaecdb56aa5a5c8be!8m2!3d24.6002953!4d-107.3852074"><Icon className = "divMiddle" center>room</Icon>Sierra San José S/N Col. Renato Vega Amador, Costa Rica, Culiacán, Sinaloa.</a></p>
                  <Divider/>

                 <Row className = "divRedes">
                  <Col s = {12} m={12} l={6}> <a className="btn center btnFacebook" target = "_blank" href="https://www.facebook.com/urepunv">FACEBOOK</a></Col>
                  <Col s = {12} m={12} l={6}> <a className="btn center btnGoogleMaps" target = "_blank" href="https://www.google.com.mx/maps/place/Centro+de+rehabilitaci%C3%B3n+Un+Rayo+de+Esperanza+Por+Una+Nueva+Vida-Urepunv/@24.6002953,-107.3873961,17z/data=!3m1!4b1!4m5!3m4!1s0x86a32c9d7c7ab265:0xaecdb56aa5a5c8be!8m2!3d24.6002953!4d-107.3852074">UBÍCANOS</a></Col>
                 </Row>
            <Divider/>
                 <p><b>Búscanos en Fb y Google Maps cómo:</b></p>
                  <p>Centro de rehabilitación Un Rayo de Esperanza Por Una Nueva Vida-Urepunv</p> 
           <Divider/>

               </div>
               </Col>
               <Col s={12}>
               <div className = "divMapa">
                 <h2  className = "center " style={styles.headline}>UBÍCANOS CON GOOGLE MAPS</h2>
                 <p className = "center-align"><a target = "_blank" href="https://www.google.com.mx/maps/place/Centro+de+rehabilitaci%C3%B3n+Un+Rayo+de+Esperanza+Por+Una+Nueva+Vida-Urepunv/@24.6002953,-107.3873961,17z/data=!3m1!4b1!4m5!3m4!1s0x86a32c9d7c7ab265:0xaecdb56aa5a5c8be!8m2!3d24.6002953!4d-107.3852074"><Icon className = "divMiddle" center>room</Icon>Sierra San José S/N Col. Renato Vega Amador, Costa Rica, Culiacán, Sinaloa.</a></p>
                  <iframe  className = "mapa" align="center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.747654766683!2d-107.38739608546581!3d24.60029528417721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86a32c9d7c7ab265%3A0xaecdb56aa5a5c8be!2sCentro+de+rehabilitaci%C3%B3n+Un+Rayo+de+Esperanza+Por+Una+Nueva+Vida!5e1!3m2!1ses!2sus!4v1483400668109" width="600" height="450"></iframe>
               </div>
               </Col>
               </Row>
               
          </div>
    </div>
  );
}
  }

export default Contacto;
