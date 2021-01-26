import React, {Component} from 'react';
import {Parallax} from 'react-materialize';

class ParallaxM extends Component{
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
       <div>
          <div className="section white">
              <div className="row container"></div>
          </div>
         <Parallax 
         className = "paralax"
         imageSrc=           'https://storage.googleapis.com/centro-images/utcr2/fachada/1.jpg'

         />
       </div>
      );
  }
}

export default ParallaxM;
