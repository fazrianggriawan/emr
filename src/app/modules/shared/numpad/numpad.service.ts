import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NumpadService {

    number = new BehaviorSubject<string>('1');
    event = new BehaviorSubject<any>('');

    constructor() { }

    public reset() {
        this.number.next('1');
        this.event.next('');
    }
}
