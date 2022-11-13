import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SepService {

    dialog = new BehaviorSubject<boolean>(false);
    sep = new BehaviorSubject<any>('');

    constructor() { }

    openDialog(status: boolean){
        this.dialog.next(status);
    }
}
