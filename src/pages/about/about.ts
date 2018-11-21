import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {ElementoPage} from "../elemento/elemento";
import {Elemento1Page} from "../elemento1/elemento1";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  lista:Array<any> = [
    {titulo: "Samsung Galaxy J6", id:1, descripcion:"4 GB, negro, Gs 1.800.000"},
    {titulo: "Samsung Galaxy A8", id:2, descripcion:"16 GB, blanco, Gs 1.450.000"},
    {titulo: "Samsung Galaxy J3", id:3, descripcion:"8 GB, dorado, Gs 950.000"},
    {titulo: "Samsung Galaxy S6", id:4, descripcion:"32 GB, gris, Gs 2.200.000"}
    /*{titulo: "Televisor", id:5, descripcion:"Samsung"},
    {titulo: "Plancha", id:6, descripcion:"Philips"}*/

  ];

  lista1:Array<any> = [
    {titulo1: "Heladera", id:1, descripcion1:"Consul, Gs 5.000.000"},
    {titulo1: "Licuadora", id:2, descripcion1:"Philips, Gs 250.000"},
    {titulo1: "Lavarropa", id:3, descripcion1:"Whirpool, Gs 3.500.000"},
    {titulo1: "Ventilador", id:4, descripcion1:"Tokyo, Gs 300.000"},
    {titulo1: "Televisor", id:5, descripcion1:"Samsung, Gs 3.800.000"}
    //{titulo1: "Plancha", id:6, descripcion1:"Philips"}

  ];


  seleccion:string = "Productos";
  constructor(public navCtrl: NavController,
              public alertController:AlertController) {

  }



    showAlert(){
    let alerta = this.alertController.create({
        title: "Información",
        subTitle: "esto es una alerta del sistema",
        message: "esto es un mensaje",
        inputs: [
          {
            name: "nombre",
            placeholder: "tu nombre",
          }
        ],
        buttons: [
          {
            text: "Guardar",
            handler:data=>{
              console.log("enviar");
            }
          },
          {
            text: "Cancelar",
            handler: data=>{
              console.log("cancelar");
            }
          }
        ]
        //buttons: ["OK"]
      });
    alerta.present();
    }

  agregarPagina(){
    this.navCtrl.push(ElementoPage);
  }
  agregarPagina1(){
    this.navCtrl.push(Elemento1Page);
  }
}
