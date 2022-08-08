import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TituloCabecera from './componenteTonto';
import CarouselM from './carousel';
import Section from './section';
import { datosCard } from './constantes';
import ParallaxM from './parallax';
import FooterM from './footer';
import { Collapsible, CollapsibleItem, Col, Row } from 'react-materialize';
import CarouselCards from './carouselCards';

class PaginaPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const datos = { datosCard };

    return (
      <div>
        <CarouselM datos={datosCard} />
        <div className="main-fb">

          <Col s={12} m={6} l={6} className='divFB'>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Furepunv%2Fposts%2Fpfbid02YbyY7TVYhFaBkgaBminR4P2anM22BPBS7WQ9FtdKaYhTuGMUisZMTVF4aFHFqajUl&show_text=true&width=500" width="500" height="696" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </Col>
          <Col s={12} m={6} l={6} className='divFB'>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Furepunv%2Fposts%2Fpfbid0285QT8jxMbRyqzwm74mCN9TnfVMjW3fjrajErRv2cgeuudG6fHUYLKmsxTYbBCUp2l&show_text=true&width=500" width="500" height="677" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>            </Col>
          <Col s={12} m={6} l={6} className='divFB'>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Furepunv%2Fposts%2Fpfbid02LNYfQvja1KGbRSMAK5AmpafjXJEew82PL2otbJbtcGA8wrkGgntTti2myKwTZbbwl&show_text=true&width=500" width="500" height="677" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>                </Col>

          <Col s={12} m={6} l={6} className='divFB'>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Furepunv%2Fposts%2Fpfbid0cJgcB8CdJQqLXESBGNJEA9pQ9cefNUnVUk6d5yySb8EMj5bSHGkcJsUPJL2wV8rjl&show_text=true&width=500" width="500" height="657" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>                </Col>
          <Col s={12} m={6} l={6} className='divFB'>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Furepunv%2Fposts%2Fpfbid02aq4Yb1bA2hMp3vWLK5iMpDbFJuuWQUGEL8BWiUyzZGUeXeM6TYEfpExgsBuLxiC5l&show_text=true&width=500" width="500" height="609" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>             </Col>
          <Col s={12} m={6} l={6} className='divFB'>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Furepunv%2Fposts%2Fpfbid02GcLxZzms8CbKCaKdTwfjVWSMmvuPEKvB1HD5WJu9GYaaaxSxELHXaDdAWtGadG13l&show_text=true&width=500" width="500" height="677" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>               </Col>


        </div>
        <Section datos={datosCard} />
        <ParallaxM />

        <div className="divVideo z-depth-4">
          <Col s={12} m={12} l={10}>
            <div className="div-seccion-video">

              <div >
                <h2 className="header">Video Institucional</h2>
                <p className="grey-text text-darken-3 lighten-3">Te invitamos a ver nuestro video institucional, reflejando parte de lo que representamos en nuestra institución.</p>
              </div>
              <iframe
                width="80%"
                height="315"
                align="center"
                src="https://www.youtube.com/embed/wV1RO_JiV0k"
                frameBorder="0"
                allowFullScreen>
              </iframe>
            </div >

          </Col>
        </div>
        <Col s={12} m={12} l={10}>
          <div className="divVision">
            <Collapsible popout defaultActiveKey={1}>
              <CollapsibleItem header="MISIÓN" icon="search">
                Ofrecer un sistema de tratamiento lo más completo posible para la rehabilitación de las personas con problemas de adicción, donde la recuperación que se experimente sea un desarrollo integral del individuo que le permita vivir con calidad, reintegrándose dignamente como miembro de una familia y de una sociedad.
              </CollapsibleItem>
              <CollapsibleItem header="VISIÓN" icon="explore">
                Llegar a formar una gran comunidad con testimonio de vida fortaleza y unidad. De los usuarios que nos permitieron servirles en un proceso de rehabilitación, comprometidos a permanecer unidos para brindar ayuda a otras personas a superar su problema de adicción y así alcanzar o así lograr una vida útil y feliz.
              </CollapsibleItem>
              <CollapsibleItem header="OBJETIVO" icon="adjust">
                Lograr y mantener la abstinencia en el consumo de sustancias toxicas y fomentar hábitos, costumbres y estilos de vida saludables, nuestra organización se caracteriza por estar integrada y dirigida por usuarios del mismo establecimiento quienes hemos logrado y mantenido suprimir el consumo de sustancias toxicas mediante la práctica del programa de los doce pasos de alcohólicos anónimos. Reforzando con asistencia de profesionales de la ciencia y salud mental.
              </CollapsibleItem>
            </Collapsible>
          </div>
        </Col>
        <FooterM />
      </div>
    );
  }
}


export default PaginaPrincipal;
