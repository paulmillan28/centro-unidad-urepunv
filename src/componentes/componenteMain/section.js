import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import CarouselCards from './carouselCards';
import {Row} from 'react-materialize';

class Section extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }

render(){
  return(
    <div>
      <Row>
       <CarouselCards datos = {this.props.datos}/>
      </Row>
    </div>
  );
}
  }
  Section.propTypes = {
    datos: PropTypes.array.isRequired
  };
export default Section;
