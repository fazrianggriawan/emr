import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NumpadRacikanService {

    value = new BehaviorSubject<string>('');

    constructor() { }

    public reset() {
        this.value.next('');
    }
}
