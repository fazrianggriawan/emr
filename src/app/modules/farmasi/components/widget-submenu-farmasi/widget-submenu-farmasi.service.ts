import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WidgetSubmenuFarmasiService {

    widget = new BehaviorSubject<boolean>(false);

    constructor() { }

    showWidget(status: boolean){
        this.widget.next(status);
    }
}
