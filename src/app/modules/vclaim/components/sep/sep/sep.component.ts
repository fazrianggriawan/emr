import { Component, OnInit } from '@angular/core';
import { SepService } from './sep.service';

@Component({
    selector: 'app-sep',
    templateUrl: './sep.component.html',
    styleUrls: ['./sep.component.css']
})
export class SepComponent implements OnInit {

    dialog: boolean = false;

    constructor(
        public sepService: SepService
    ) { }

    ngOnInit(): void {
        this.sepService.dialog.subscribe(data => this.dialog = data)
    }

}
