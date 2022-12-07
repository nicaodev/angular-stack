import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IfoodList } from '../module/ifood-list';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  private url: string = "http://localhost:3000" // to fake-server

  public emitEvent = new EventEmitter();
  //A partir que emitir um evento vamos nos increver nele e sempre que o evento fizer algo vamos estar lá "inscritos" esperando
  // Uma vez subscrito vai ficar até quando findar o retorno das informações.


  constructor(private http: HttpClient) { }


  private list: Array<string> = [
    "X Bacon",
    "X Salada",
    "X Fitness",
    "Coca Cola 2L"
  ];

  // public foodList() {
  //   return this.list;
  // }


  public foodList(): Observable<Array<IfoodList>> {
    return this.http.get<Array<IfoodList>>(`${this.url}/list-food`)
      .pipe(
        resultado => resultado,
        error => error
      )
  }

  // public foodListAdd(value: string) {
  //   this.FoodListAlert(value);
  //   return this.list.push(value);
  // }

  public foodListAdd(value: string): Observable<IfoodList> {
    return this.http.post<IfoodList>(`${this.url}/list-food`, { nome: value })
      .pipe(
        res => res,
        error => error
      )
  }

  public foodListPut(value: string, id: number): Observable<IfoodList> {
    return this.http.put<IfoodList>(`${this.url}/list-food/${id}`, { nome: value })
      .pipe(
        res => res,
        error => error
      )
  }

  public foodListDelete(id: number): Observable<IfoodList> {
    return this.http.delete<IfoodList>(`${this.url}/list-food/${id}`)
      .pipe(
        res => res,
        error => error
      )
  }

  public FoodListAlert(value: IfoodList) {
    return this.emitEvent.emit(value);
  }
}


