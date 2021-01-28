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
      <div >

      <div className="main-fb">
        <CarouselM datos={datosCard} />

        <Col s={12} m={6} l={6} className='divFB'>
          <iframe src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2Funidadterapeuticacostarica2019%2Fvideos%2F221278433003667%2F&show_text=true&width=560" width="560" height="423" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
        </Col>
        <Col s={12} m={6} l={6} className='divFB'>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Funidadterapeuticacostarica2019%2Fvideos%2F785750242218971%2F&show_text=true&width=560" width="560" height="429" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
        </Col>
        <Col s={12} m={6} l={6} className='divFB'>
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Funidadterapeuticacostarica2019%2Fposts%2F414680339926867&width=500&show_text=true&appId=1586356848142063&height=664" width="500" height="664" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </Col>
        <Col s={12} m={6} l={6} className='divFB'>
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Funidadterapeuticacostarica2019%2Fvideos%2F426286685029124%2F&width=500&show_text=true&appId=1586356848142063&height=390" width="500" height="390" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </Col>
        </div>

        <Section datos={datosCard} />

        <ParallaxM />
        <div className='divVideo z-depth-4'>
        </div>
        <Col s={12} m={12} l={10}>
          <div className='divVision'>
            <Collapsible popout defaultActiveKey={1}>
              <CollapsibleItem header='MISIÓN' icon='search'>
                Ofrecer un sistema de tratamiento lo más completo posible para la rehabilitación de las personas con problemas de adicción, donde la recuperación que se experimente sea un desarrollo integral del individuo que le permita vivir con calidad, reintegrándose dignamente como miembro de una familia y de una sociedad.
                        </CollapsibleItem>
              <CollapsibleItem header='VISIÓN' icon='explore'>
                Llegar a formar una gran comunidad con testimonio de vida fortaleza y unidad. De los usuarios que nos permitieron servirles en un proceso de rehabilitación, comprometidos a permanecer unidos para brindar ayuda a otras personas a superar su problema de adicción y así alcanzar o así lograr una vida útil y feliz.
                        </CollapsibleItem>
              <CollapsibleItem header='OBJETIVO' icon='adjust'>
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
