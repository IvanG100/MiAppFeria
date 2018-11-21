import { Component } from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-elemento',
  templateUrl: 'elemento.html'
  })

export class ElementoPage {

  lista:Array<any> = [
    {titulo: "Heladera", id:1, descripcion:"Consul"},
    {titulo: "Licuadora", id:2, descripcion:"Philips"},
    {titulo: "Lavarropa", id:3, descripcion:"Whirpool"},
    {titulo: "Ventilador", id:4, descripcion:"Tokyo"},
    {titulo: "Televisor", id:5, descripcion:"Samsung"},
    {titulo: "Plancha", id:6, descripcion:"Philips"}

  ];

  constructor(public navCtrl: NavController) {}

    volver(){
      this.navCtrl.pop();
    }
} {
  
}
