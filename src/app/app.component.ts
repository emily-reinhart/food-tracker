import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'food-tracker';
  ingredients = [{'ingr': 'milk', 'units': ['g', 'oz']}, {'ingr': 'sugar', 'units': ['g']}];
  // @Input() ingredient: string;

  ngOnInit(){

  }
}
