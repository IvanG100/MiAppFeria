import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ElementoPage } from "../elemento/elemento"

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  lista:Array<any> = [
    {titulo: "Ventas", id:1, descripcion:"Secciòn de ventas"},
    {titulo: "Compras", id:2, descripcion:"Secciòn de compras"},
    {titulo: "Stock", id:3, descripcion:"Inventario de articulos"},
    {titulo: "Empleados", id:4, descripcion:"Lista de empleados"},
    {titulo: "Reportes", id:5, descripcion:"Reportes varios"},
    {titulo: "Clientes", id:6, descripcion:"Listado de clientes"}

  ];

  constructor(public navCtrl: NavController) {}
    /*agregarPagina(){
      this.navCtrl.push(ElementoPage);
    }*/

}
