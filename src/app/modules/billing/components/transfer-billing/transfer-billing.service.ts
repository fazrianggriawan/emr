import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TransferBillingService {

    dialog = new BehaviorSubject<boolean>(false);

    constructor() { }

    openDialog(status: boolean){
        this.dialog.next(status);
    }
}
