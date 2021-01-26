import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import {Button, Icon } from 'react-materialize';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.contacto = this.contacto.bind(this);
    this.tratamiento = this.tratamiento.bind(this);
    this.instalaciones = this.instalaciones.bind(this);
    this.menu = this.menu.bind(this);
    this.novedades = this.novedades.bind(this);
    this.certificaciones = this.certificaciones.bind(this);
    this.exito = this.exito.bind(this);
    this.goContact = this.goContact.bind(this);
  }
  contacto(event) {
    this.setState({ open: false }, () => {
      hashHistory.push("/contacto");
    });
  }
  goContact(event) {
    this.setState({ open: !this.state.open }, () => {
      hashHistory.push("/costo");
    });
  }
  tratamiento(event) {
    this.setState({ open: !this.state.open }, () => {
      hashHistory.push("/tratamiento");
    });
  }
  instalaciones(event) {
    event.preventDefault();
    this.setState({ open: !this.state.open }, () => {
      hashHistory.push("/instalaciones");
    });
  }
  costo(event) {
    event.preventDefault();
    this.setState({ open: false }, () => {
      hashHistory.push("/costo");
    });
  }
  novedades(event) {
    event.preventDefault();
    this.setState({ open: !this.state.open }, () => {
      hashHistory.push("/");
    });
  }
  menu(event) {
    this.setState({ open: !this.state.open });
  }
  certificaciones(event) {
    event.preventDefault();
    this.setState({ open: !this.state.open }, () => {
      hashHistory.push("/certificaciones");
    });
  }
  exito(event) {
    event.preventDefault();
    this.setState({ open: !this.state.open }, () => {
      hashHistory.push("/exito");
    });
  }
  render() {
    return (
      <div>
        <div>
          <AppBar
            style={{ textAlign: "center", background: '#00c942' }}
            className="divApp"
            title={<div className="divTitulo">UNIDAD TERAPÉUTICA COSTA RICA</div>}
            iconElementLeft={<Icon className="divIcon" medium>dehaze</Icon>}
            onClick={this.menu}
            iconElementRight={<Button className="red pulse valign-wrapper" onClick={this.contacto}>Contacto</Button>}
          />

          <Drawer width={300} containerClassName="divDrawer" open={this.state.open}>
            <AppBar
              style={{ textAlign: "center", background: '#00c942' }}
              title={<div className="divTitulo">UREPUNV</div>}
              className="divApp"
              onClick={this.menu}
            />
            <MenuItem style={{ textAlign: 'center', borderBottom: 'solid 1px', marginTop: '2%' }} onClick={this.novedades}>Novedades</MenuItem>
            <MenuItem style={{ textAlign: 'center', borderBottom: 'solid 1px', marginTop: '2%' }} onClick={this.tratamiento}>Tratamiento</MenuItem>
            <MenuItem style={{ textAlign: 'center', borderBottom: 'solid 1px', marginTop: '2%' }} onClick={this.instalaciones} >Instalaciones</MenuItem>
            <MenuItem style={{ textAlign: 'center', borderBottom: 'solid 1px', marginTop: '2%' }} onClick={this.goContact}>Costo</MenuItem>
            <MenuItem style={{ textAlign: 'center', fontWeight: 'bold', borderBottom: 'solid 1px', marginTop: '2%' }} onClick={this.certificaciones}><u>Certificaciones</u></MenuItem>
            <MenuItem style={{ textAlign: 'center', fontWeight: 'bold', borderBottom: 'solid 1px', marginTop: '2%' }}><Button className="red btnContac" onClick={this.contacto}>Contacto</Button></MenuItem>
          </Drawer>

        </div>
      </div>
    );
  }
}


export default NavBar;
