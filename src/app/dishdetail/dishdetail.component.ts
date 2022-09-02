import { Component, Input, OnInit } from '@angular/core';
import { Dish, _Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
    @Input() dish!: _Dish;
    selectedDish = DISHES[0]
  constructor() { }

  ngOnInit(): void {
    console.log(this.dish);
    
  }

}
