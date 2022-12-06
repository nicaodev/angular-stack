import { Component, OnInit } from '@angular/core';
import { IfoodList } from 'src/app/module/ifood-list';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor(private foodlistService: FoodlistService) {
  }

  public returnFood: Array<IfoodList> = [];

  ngOnInit(): void {
    this.foodlistService.foodList().subscribe({
      next: (res) => this.returnFood = res,
      error: (err) => err,
    });

    this.foodlistService.emitEvent.subscribe({
      next: (res: IfoodList) => {
        alert(`Você add um item a lista -> ${res.nome}`);
        return this.returnFood.push(res)
      },
      error: (err: any) => err,
    })
  }
}
