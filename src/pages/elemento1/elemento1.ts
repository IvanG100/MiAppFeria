import { Component } from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-elemento1',
  templateUrl: 'elemento1.html'
  })

export class Elemento1Page {

  lista:Array<any> = [
    {titulo: "Samsung Galaxy J6", id:1, descripcion:"4 GB, negro, Gs 1.800.000"},
    {titulo: "Samsung Galaxy A8", id:2, descripcion:"16 GB, blanco, Gs 1.450.000"},
    {titulo: "Samsung Galaxy J3", id:3, descripcion:"8 GB, dorado, Gs 950.000"},
    {titulo: "Samsung Galaxy S6", id:4, descripcion:"32 GB, gris, Gs 2.200.000"}
    /*{titulo: "Televisor", id:5, descripcion:"Samsung"},
    {titulo: "Plancha", id:6, descripcion:"Philips"}*/

  ];

  constructor(public navCtrl: NavController) {}

    volver(){
      this.navCtrl.pop();
    }
} {
  
}
