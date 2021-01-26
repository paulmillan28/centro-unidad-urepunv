import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import {IMAGES} from './constantes';
import {Row, Col,Parallax} from 'react-materialize';

class Instalaciones extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }
  componentDidMount() {
   
  }

render(){
  return(
    <div>
      <Parallax 
         className = "divMargin instalacionesParallax"              
         imageSrc= 'https://storage.googleapis.com/centro-images/utcr2/fachada/1.jpg'/>
      <Row/>
      <Row>
        <Col s={12}>
          <div className = "divSpanInstalaciones">
            ¡CONOCE NUESTRAS INSTALACIONES!
          </div>
        </Col>
      </Row>

      <Row>
	      <Col s={12}>
          <Gallery
          backdropClosesModal
          imageCountSeparator = " de "
          images={IMAGES}/>
        </Col>
      </Row>
    </div>
  );
}
  }

export default Instalaciones;
