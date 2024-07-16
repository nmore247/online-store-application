import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SideBarService {

    private sideNavState = new BehaviorSubject<boolean>(false);
    public sideNavState$ = this.sideNavState.asObservable();

    constructor() { }

    public toggleSideNav() {
        this.sideNavState.next(!this.sideNavState.value);
    }
}