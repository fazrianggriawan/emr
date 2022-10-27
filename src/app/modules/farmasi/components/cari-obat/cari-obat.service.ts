import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CariObatService {

    selectedObat = new BehaviorSubject<any>('');

    constructor() { }
}
