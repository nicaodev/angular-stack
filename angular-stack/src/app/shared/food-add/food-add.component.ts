import { Component } from '@angular/core';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {

  constructor(private foodlistService: FoodlistService) {
  }

  public listAddItem(value: string) {
    this.foodlistService.foodListAdd(value);
  }
}
