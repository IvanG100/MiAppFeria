import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//import { ElementoPage } from '../elemento/elemento';
import { FormularioPage } from "../formulario/formulario";
import { PaginaPage } from '../pagina/pagina';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  //tab4Root = ElementoPage;
  tab4Root = FormularioPage;
  tab5Root = PaginaPage;

  constructor() {

  }
}
