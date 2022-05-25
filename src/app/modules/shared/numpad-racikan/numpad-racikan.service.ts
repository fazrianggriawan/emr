import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NumpadRacikanService {

    value = new BehaviorSubject<string>('');
    event = new BehaviorSubject<boolean>(false);

    constructor() { }

    public reset() {
        this.value.next('');
    }
}
