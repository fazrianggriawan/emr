import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RadiologiService {

    dialog = new BehaviorSubject<boolean>(false)

    constructor() { }

    public openDialog(){
        this.dialog.next(true)
    }

    public closeDialog(){
        this.dialog.next(false)
    }
}
