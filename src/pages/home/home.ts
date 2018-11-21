import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista:Array<any> = [
    {titulo: "Celulares", id:1, descripcion:"Smartphones"},
    //{titulo: "Compras", id:2, descripcion:"Secciòn de compras"},
    {titulo: "Electrodomésticos", id:3, descripcion:"Articulos para el Hogar"}
    /*{titulo: "Empleados", id:4, descripcion:"Lista de empleados"},
    {titulo: "Reportes", id:5, descripcion:"Reportes varios"},*/
    //{titulo: "Clientes", id:4, descripcion:"Listado de clientes"}

  ];

  constructor(public navCtrl: NavController) {

  }

}
