import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataBillingPenunjangService {

    inputHasil = new BehaviorSubject<boolean>(false);
    billingHead = new BehaviorSubject<any>('');
    printHasil = new BehaviorSubject<any>('');

    constructor() { }
}
