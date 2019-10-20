import React, {Component} from 'react';
import { IMAGES_CERTIFICACIONES} from './constantes';
import Gallery from 'react-grid-gallery';
import {Row, Col,Parallax} from 'react-materialize';

class Certificaciones extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }

render(){
  return(
    <div>
      <Parallax 
         className = "divMargin"              
         imageSrc="https://storage.cloud.google.com/centro-images/novedades/aniversario/ani-one.jpg"/>
      <Row/>
      <Row>
        <Col s={12}>
          <div className = "divSpanInstalaciones">
            ¡CONOCE NUESTRAS MÚLTIPLES CERTIFICACIONES!
          </div>
        </Col>
      </Row>

      <Row>
	      <Col s={12}>
          <Gallery
          backdropClosesModal
          imageCountSeparator = " de "
          images={IMAGES_CERTIFICACIONES}/>
        </Col>
      </Row>
    </div>
  );
}
  }

export default Certificaciones;
