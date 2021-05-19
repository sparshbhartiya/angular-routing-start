import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanDeavtivateInterface{
    canDeactivate:() => Observable<boolean> | Promise<boolean> | boolean; //Here we are defining method signature
    //to be implemented by child class
}
export class CanDeactivateGuard implements CanDeactivate<CanDeavtivateInterface>{

    canDeactivate(component:CanDeavtivateInterface,
        currentRoute: ActivatedRouteSnapshot,
        currentState : RouterStateSnapshot,
        nextState : RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
            return component.canDeactivate();
        }
}
