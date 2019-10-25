import React, {Component} from 'react';
import {Icon,Row,Col} from 'react-materialize';
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
                  <p ><a target = "_blank" href="https://www.google.com.mx/maps/place/UNIDAD+TERAPEUTICA+COSTA+RICA/@24.6003685,-107.3879824,17z/data=!3m1!4b1!4m5!3m4!1s0x86a32dd9042f4acd:0x2bcd15ac51ce83cb!8m2!3d24.6003636!4d-107.3857937"><Icon className = "divMiddle" center>room</Icon>Calle Sebastián Lerdo de Tejada No 691, Colonia Insurgentes, Costa Rica, Culiacán, Sinaloa.</a></p>
                  <Divider/>

                 <Row className = "divRedes">
                  <Col s = {12} m={12} l={6}> <a className="btn center btnFacebook" target = "_blank" href="https://www.facebook.com/unidadterapeuticacostarica2019/?modal=admin_todo_tour">FACEBOOK</a></Col>
                  <Col s = {12} m={12} l={6}> <a className="btn center btnGoogleMaps" target = "_blank" href="https://www.google.com.mx/maps/place/UNIDAD+TERAPEUTICA+COSTA+RICA/@24.6003685,-107.3879824,17z/data=!3m1!4b1!4m5!3m4!1s0x86a32dd9042f4acd:0x2bcd15ac51ce83cb!8m2!3d24.6003636!4d-107.3857937">UBÍCANOS</a></Col>
                 </Row>
            <Divider/>
                 <p><b>Búscanos en Fb y Google Maps cómo:</b></p>
                  <p>Unidad Terapéutica COSTA RICA</p> 
           <Divider/>

               </div>
               </Col>
               <Col s={12}>
               <div className = "divMapa">
                 <h2  className = "center " style={styles.headline}>UBÍCANOS CON GOOGLE MAPS</h2>
                  <p className = "center-align"><a target = "_blank" href="https://www.google.com.mx/maps/place/UNIDAD+TERAPEUTICA+COSTA+RICA/@24.6003685,-107.3879824,17z/data=!3m1!4b1!4m5!3m4!1s0x86a32dd9042f4acd:0x2bcd15ac51ce83cb!8m2!3d24.6003636!4d-107.3857937"><Icon className = "divMiddle" center>room</Icon>Calle Sebastián Lerdo de Tejada No 691, Colonia Insurgentes, Costa Rica, Culiacán, Sinaloa.</a></p>
                  <iframe  className = "mapa" align="center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.67620438524!2d-107.38798238518903!3d24.60036846169129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86a32dd9042f4acd%3A0x2bcd15ac51ce83cb!2sUNIDAD%20TERAPEUTICA%20COSTA%20RICA!5e0!3m2!1ses!2smx!4v1571979606128!5m2!1ses!2smx" width="600" height="450"></iframe>
               </div>
               </Col>
               </Row>
               
          </div>
    </div>
  );
}
  }

export default Contacto;
