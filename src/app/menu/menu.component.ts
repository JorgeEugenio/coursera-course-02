import { Component, OnInit } from '@angular/core';
import { Dish, _Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: _Dish [] = DISHES;
  selectedDish!: _Dish;
  constructor() { }

  ngOnInit(): void {
    
  }
  onSelect(dish: _Dish){
    this.selectedDish = dish;
    // console.log(this.selectedDish);
    
  }

}
