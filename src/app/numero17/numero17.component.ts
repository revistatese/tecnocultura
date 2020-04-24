import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-numero17',
  templateUrl: './numero17.component.html',
  styleUrls: ['./numero17.component.css']
})
export class Numero17Component implements OnInit {
  public revista:{
    id: string;
    numeroR:number;
    imagenR:string;
  }={
    id:'1',
    numeroR: 51,
    imagenR:'https://i.picsum.photos/id/866/200/300.jpg'
  
  };
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.revista.id= this.route.snapshot.params.id;
  }

}
