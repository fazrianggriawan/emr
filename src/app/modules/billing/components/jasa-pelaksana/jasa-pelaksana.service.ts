import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JasaPelaksanaService {

    dialog = new BehaviorSubject<boolean>(false);
    jasaPelaksana = new BehaviorSubject<any>('');

    constructor() { }

    openDialog(status: boolean){
        this.dialog.next(status)
    }
}
