import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountComponent } from '../account/account.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<AccountComponent> {
  canDeactivate(
    component: AccountComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('currentRoute ->', currentRoute)
    console.log('currentState ->', currentState)
    console.log('nextState ->', nextState)

    return component.exit();
  }

}
