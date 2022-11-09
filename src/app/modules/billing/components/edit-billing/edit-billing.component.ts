import { Component, OnInit } from '@angular/core';
import { EditBillingService } from './edit-billing.service';

@Component({
    selector: 'app-edit-billing',
    templateUrl: './edit-billing.component.html',
    styleUrls: ['./edit-billing.component.css']
})
export class EditBillingComponent implements OnInit {

    dialog: boolean = false;
    billing: any;

    constructor(
        public editBillingService: EditBillingService
    ) { }

    ngOnInit(): void {
        this.editBillingService.dialog.subscribe(data => this.handleDialog(data))
        this.editBillingService.billing.subscribe(data => this.billing = data)
    }

    handleDialog(data: boolean){
        this.dialog = data;
        if( data ){

        }
    }

}
