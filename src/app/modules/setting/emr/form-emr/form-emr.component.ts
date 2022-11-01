import { Component, OnInit } from '@angular/core';
import { FormEmrService } from './form-emr.service';

@Component({
    selector: 'app-form-emr',
    templateUrl: './form-emr.component.html',
    styleUrls: ['./form-emr.component.css']
})
export class FormEmrComponent implements OnInit {

    data : any[] = [];
    options : any[] = [];
    option : any = '';
    dialogFormEmr: boolean = false;

    constructor(
        private formEmrService: FormEmrService
    ) { }

    ngOnInit(): void {
        this.formEmrService.getData();
        this.formEmrService.data.subscribe(data => {
            this.data = data;
        })

        this.options = [
            {id: 's', name: 'S'},
            {id: 'o', name: 'O'},
            {id: 'a', name: 'A'},
            {id: 'p', name: 'P'},
        ]
        // this.option = '0';
    }

    view(id: number){
        alert(id)
    }

    editForm(data: any){
        console.log(data);
        this.formEmrService.selectedForm.next(data);
        this.dialogFormEmr = true;
    }

    resetForm(){
        this.dialogFormEmr = false;
        this.formEmrService.selectedForm.next('');
    }

}
