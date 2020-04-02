import { Component, OnInit } from '@angular/core';
import { Numero17Component } from '../numero17/numero17.component';

import { HostListener } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-unpload-file',
  templateUrl: './unpload-file.component.html',
  styleUrls: ['./unpload-file.component.css']
})

export class UnploadFileComponent implements OnInit {

  constructor() { }

  
  

  ngOnInit() {
  }


 

  validacion(){

    let numRev = (document.getElementById('NumRev') as HTMLInputElement).value;
    let fileUnpPDF = (document.getElementById('file-unpload-pdf') as HTMLInputElement).value;
    let fileUnpImg = (document.getElementById('file-unpload-img') as HTMLInputElement).value;

    if(numRev==''){
       window.alert("Numero De Revista Vacio!!!");
    }else if(fileUnpPDF==''){
      window.alert("No se Eligio Un Archivo PDF");
    }else if(fileUnpImg==''){
      window.alert("No se Eligio Una Imagen De Portada");
    }else{


    }
    
  }

  valLetNum(){

    return true;

   
   
  }
}
