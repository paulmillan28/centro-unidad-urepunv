import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App                   from './componentes/App';
import PaginaPrincipal       from './componentes/componenteMain/paginaPrincipal';
import Contacto from './componentes/componenteMain/contacto';
import Tratamiento from './componentes/componenteMain/tratamiento';
import Instalaciones from './componentes/componenteMain/instalaciones';
import Costo from './componentes/componenteMain/costo';
import Certificaciones from './componentes/componenteMain/certificaciones';
import Exito from './componentes/componenteMain/exito';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PaginaPrincipal} />
    <Route path = "/contacto" component={Contacto}/>
    <Route path = "/tratamiento" component={Tratamiento}/>
    <Route path = "/instalaciones" component={Instalaciones}/>
    <Route path = "/costo" component={Costo}/>
    <Route path = "/certificaciones" component={Certificaciones}/>
    <Route path = "/exito" component={Exito}/>

  </Route>
);
