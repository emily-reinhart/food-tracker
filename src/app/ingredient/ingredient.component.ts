import { Component, OnInit, Output, Input } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css','../app.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient: {'ingr': string, 'units': [string]};
  day = 0.0;
  week = 0.0;

  // closeResult: string;
  // validatingForm: FormGroup;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    let capitalized = this.ingredient.ingr[0].toUpperCase() + this.ingredient.ingr.substring(1);
    this.ingredient.ingr = capitalized;

    // this.validatingForm = new FormGroup({
    //   quantity: new FormControl('', Validators.required)
    // });
  }

  
  openFormModal(ingredient) {
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.ingredient = ingredient;

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     let quantity = this.validatingForm.get('quantity').value;
  //     console.log('quantity', quantity, 'result', result);
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }  

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

}
