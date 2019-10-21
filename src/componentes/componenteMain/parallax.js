import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
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
         imageSrc="https://lh3.googleusercontent.com/ZJ-_BTHhv701ekC7LK2lbo174tKsR9GgiskKQdO7daERQza5H6pOPvlopnIhwoFCLDJJ5rfqw8QHlgIeo2-bZ6EaP_TrCuxtLTeF2uE-kyACJQPa5ZMyzYRygVPmeg2Un1gMwM4yU9f5lTFlGRX8dFsLAW_KwNIe5c9P19iAQrOQo_uZ3pFr1Ja1NE5O509zGVucWG3nZvoBWodIUF08Gs6TvP7YyINRl4IfciI6ougvazgqFpYe76KPlo14K0iSirRBufBaRl1Mi2mnbjAprkY3GAyWjnPAC-6yoLK2TrMbxiP3R4GVag2iOHbt6ODgiM41uAqZ7TwZ2d8GrFfAa0rDw1VRYE84Ld-kEStnOJiDHOanOnmnaSukQUhna2GQ3K0g_b1-xJvnjXXmtahPh0V7JRfZBR-gH2ynXDHUYQP4yqjP_9nZVg4m5RYRHL7lXWi8odVuGFvT7EDZc7n-jNZrFh4zpfh5O1OFVbRtFL7DXuwKbN6pTYkUzuB_nEJCKjIP3vLPbWMMxhn7DhPo03PFEtqe380YhjZ0JifMtzRG1sj_yxivdAolkr0XfdqV7jeLigLw4BxyXjv_nl6g9aksvv3oF82QjwPukcoVIcorhACG162gQbtYgRAkGPOwEU7q9b9L_WS4cNWui-axzcunecbWreOjeh4ZeuCbkOocSv_gX62c9w=w960-h594-no"/>       
       </div>
      );
  }
}

export default ParallaxM;
