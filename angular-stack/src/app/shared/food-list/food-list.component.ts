import { Component, OnInit } from '@angular/core';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor(private foodlistService: FoodlistService) {
  }

  public returnFood: Array<string> = [];

  ngOnInit(): void {
    this.returnFood = this.foodlistService.foodList();
  }




}
