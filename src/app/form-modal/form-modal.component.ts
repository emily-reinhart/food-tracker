import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  @Input() ingredient: {'ingr': string, 'units': [string]};
  myForm: FormGroup;
  units: Array<string>;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { 
    this.createForm();
  }

  private createForm(){
    this.myForm = this.formBuilder.group({
      quantity: "",
      unit: ""
    });
  }

  submitForm(){
    console.log('form closed',this.myForm.value);
    
    this.activeModal.close(this.myForm.value);
  }

  ngOnInit(): void {
    console.log(this.ingredient, 'ingredient form')
    this.units = this.ingredient.units;
    console.log('units', this.units)
  }



}
