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
         imageSrc="https://scontent.fcul2-1.fna.fbcdn.net/v/t1.0-9/71707314_118611979533706_455282901496365056_o.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_eui2=AeERNuUXalmwVfe1TZ8fbOxqPLTqRsCsCjM8tOpGwKwKMwqllORaCQ6ECEx54NZUvMlYdSaj8KlVMR0G3wIgUPYI&_nc_ohc=zZNTpMFr_7YAX9j6GDL&_nc_ht=scontent.fcul2-1.fna&oh=88c567dd52d1138e3fe7d28ead1c8ece&oe=60343BB3"/>
       </div>
      );
  }
}

export default ParallaxM;
