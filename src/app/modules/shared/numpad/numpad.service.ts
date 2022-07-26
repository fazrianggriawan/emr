import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NumpadService {

    value = new BehaviorSubject<string>('1');
    event = new BehaviorSubject<any>('');

    constructor() { }

    public reset() {
        this.value.next('1');
        this.event.next('');
    }
}
