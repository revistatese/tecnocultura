import { RevistaServiceService } from './../../services/revista-service.service';
import { Component, OnInit, Inject, ViewChild, Input, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { isUndefined } from 'util';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(//public dialog: MatDialogRef<ModalComponent>,
    // tslint:disable-next-line: align
   /// @Inject(MAT_DIALOG_DATA) public data: any
  private pstSvc: RevistaServiceService) { }
  ngOnInit() {
  }
  onSaveBook(revistaForm: NgForm): void {
    if (revistaForm.value.id == null) {
      // New 
      this.pstSvc.addRevista(revistaForm.value);
    } else {
      // Update
      this.pstSvc.editPostById(revistaForm.value);
    }

  }
}