import React, {Component} from 'react';
import {Row, Col,Parallax} from 'react-materialize';
import CardModificado from './cardModificado';

class Costo extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }

render(){
  return(
    <div>
    <Parallax 
         imageSrc="https://storage.googleapis.com/centro-images/urepunv/fachada.jpeg"/>
      <Row/>
      <Row>
        <Col s={12}>
          <div className = "divSpanTratamiento">
            ¡NUESTRO CENTRO DE REHABILITACIÓN TIENE APOYO GUBERNAMENTAL!<br></br>
            <span className = "divSpanInstalaciones2">¡Por lo tanto nuestros precios son muy accesibles!</span>
          </div>
        </Col>
      </Row>
    <div className ="container divCosto">
      <Row>
        <Col s={12} l={6} m={12}>
          <CardModificado 
            titulo = "INGRESO" 
            precio = "2000" 
            imagen = "https://storage.googleapis.com/centro-images/inicio/registro.jpg"
            descripcion = "Se paga una sola vez y se tiene todo el tiempo que el usuario este en la agrupación para pagar."/>
        </Col>
        <Col s={12} l={6} m={12}>
          <CardModificado 
            titulo = "DOCTOR" 
            precio = "150" 
            imagen = "https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-handsome-white-doctor-illustration-free-material-doctordoctor-materialdoctor-illustrationdoctor-png-image_633147.jpg"
            descripcion = "Único pago de $150."/>
        </Col>
     </Row>
     <Row>
        <Col s={12} l={6} m={12}>
          <CardModificado 
            titulo = "PSICOLÓGO" 
            precio = "150" 
            imagen = "https://i.pinimg.com/474x/82/e8/81/82e881c228624b1847eb25179f498ab4.jpg"
            descripcion = "Único pago de $150."/>
        </Col>
        <Col s={12} l={6} m={12}>
          <CardModificado 
            titulo = "COMIDA" 
            precio = "350" 
            imagen = "https://storage.googleapis.com/centro-images/inicio/comida.png"
            descripcion = "El pago es cada semana."/>
        </Col>
     </Row>
     <Row>
        <Col s={12} l={6} m={12}>
          <CardModificado 
            titulo = "TRANSPORTE" 
            precio = "Depende de la lejanía del domicilio del usuario a ingresar." 
            imagen = "https://storage.googleapis.com/centro-images/transporte.png"
            descripcion = "Único pago"/>
        </Col>
     </Row>
     </div>  
    </div>
  );
}
  }

export default Costo;
