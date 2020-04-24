import { MaterialModule } from './../../material/material.module';
import { RevistaI } from './../../models/revista.interface';
import { RevistaServiceService } from './../../services/revista-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  private image: any;
  private imageOriginal: any;

  @Input() post: RevistaI;

  constructor(private postSvc: RevistaServiceService) { }
  ngOnInit() {
    this.image = this.post.imagenR;
    this.imageOriginal = this.post.imagenR;
    this.initValuesForm();
  }



  public editPostForm = new FormGroup({
    numeroR: new FormControl('', Validators.required),
    imagenR: new FormControl('', Validators.required),
     });

 

  editPost(post: RevistaI) {
    if (this.image === this.imageOriginal) {
      post.imagenR = this.imageOriginal;
      this.postSvc.editPostById(post);
    } else {
      this.postSvc.editPostById(post, this.image);
    }
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  private initValuesForm(): void {
    this.editPostForm.patchValue({
      id: this.post.id,
      Numero: this.post.numeroR
      
     
    });
  }

}