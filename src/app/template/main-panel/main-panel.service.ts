import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainPanelService {

    margin = new BehaviorSubject<boolean>(true);

    constructor() { }

    showMargin(status: boolean){
        this.margin.next(status)
    }
}
