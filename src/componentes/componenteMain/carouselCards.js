import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, hashHistory}        from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import TituloCabecera from './componenteTonto';
import {Col, MediaBox, Collapsible, CollapsibleItem} from 'react-materialize';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Lightbox from 'react-image-lightbox';

class CarouselCards extends Component{
  constructor(props){
    super(props);
    this.state ={
      isOpen : false,
      photoIndex: 0,      
      images : []
    };
  }


render(){
  return(
    <div>
      {this.props.datos.map((row, index) => (
        <div key = {index} className = "cardDatos hoverable">
            <Card >
                <CardMedia
                  style={{height:'300px', cursor: 'pointer'}}
                  onClick={() => this.setState({ isOpen: true, images : row.imagenes,photoIndex:0 })}                                    
                  overlay={<CardTitle style = {{textAlign : "center"}} title={<div className = "cardText">{row.titulo}</div>}/>}
                >
                <MediaBox 
                   style={{height:'300px'}}                
                  src={row.imagen} caption={row.titulo}/>
                </CardMedia>
                
                <CardActions style = {{textAlign : "center"}}>

                  <div className = "divButtonVer">
                  <FlatButton style = {(row.imagenes.length === 0 || row.imagenes.length === 1) ? {display : 'none', color : '#347ab6', border : 'solid 1px', verticalAlign : 'middle', width : '100%'} : {display : '', color : '#347ab6', border : 'solid 1px',verticalAlign : 'middle', width: '100%'}} label="Ver más fotografías" onClick={() => this.setState({ isOpen: true, images : row.imagenes, photoIndex: 0})} />
                </div>
                </CardActions>
          </Card>
         </div>
       ))}
          {this.state.isOpen && (
          <Lightbox
            mainSrc={this.state.images[this.state.photoIndex]}
            nextSrc={this.state.images[(this.state.photoIndex + 1) % this.state.images.length]}
            prevSrc={this.state.images[(this.state.photoIndex + this.state.images.length - 1) % this.state.images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (this.state.photoIndex + this.state.images.length - 1) % this.state.images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (this.state.photoIndex + 1) % this.state.images.length
              })
            }
          />
        )}
    </div>);
  }
}
CarouselCards.propTypes = {
  datos: PropTypes.array.isRequired
};

export default CarouselCards;
