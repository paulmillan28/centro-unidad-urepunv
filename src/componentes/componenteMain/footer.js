import React, {Component} from 'react';
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
                <a className="btn right btnFacebook" target = "_blank" href="https://www.facebook.com/unidadterapeuticacostarica2019">FACEBOOK</a>
                </div>}
                className="nav"
                >
                <p className="white-text divCont">Contáctanos</p>
                <p ><a className="grey-text text-lighten-4" href="tel:6671609426">6671609426<Icon center left>call</Icon></a></p>
                <p ><a className="grey-text text-lighten-4" target = "_blank" href="https://www.google.com.mx/maps/place/UNIDAD+TERAPEUTICA+COSTA+RICA/@24.6003636,-107.3879877,17z/data=!3m1!4b1!4m5!3m4!1s0x86a32dd9042f4acd:0x2bcd15ac51ce83cb!8m2!3d24.6003636!4d-107.3857937">Ubícanos con Google Maps solo dando click aquí<Icon center left>room</Icon></a></p>
                <p ><a className="grey-text text-lighten-4" target = "_blank" href="mailto:gregorio-german@hotmail.com">gregorio-german@hotmail.com<Icon center left>mail</Icon></a></p>
            </Footer>
        </div>
      );
  }
}

export default FooterM;
