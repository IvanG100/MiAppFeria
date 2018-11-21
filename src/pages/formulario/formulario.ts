import { Component } from "@angular/core";
//import {NavController} from "ionic-angular";
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html'
  })

export class FormularioPage {
    
    constructor(public actionSheetCtrl: ActionSheetController) { }
    presentActionSheet() {
      const actionSheet = this.actionSheetCtrl.create({
        title: 'Modify your album',
        buttons: [
          {
            text: 'Destructive',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
            }
          },{
            text: 'Archive',
            handler: () => {
              console.log('Archive clicked');
            }
          },{
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }
  
} 
  

