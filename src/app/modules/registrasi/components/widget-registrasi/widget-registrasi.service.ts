import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WidgetRegistrasiService {

    widget = new BehaviorSubject<boolean>(true);

    constructor() { }

    showWidget(status: boolean){
        this.widget.next(status)
    }
}
