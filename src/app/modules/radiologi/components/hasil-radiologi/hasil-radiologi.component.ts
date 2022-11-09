import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-hasil-radiologi',
    templateUrl: './hasil-radiologi.component.html',
    styleUrls: ['./hasil-radiologi.component.css']
})
export class HasilRadiologiComponent implements OnInit {

    @Input() showButton : Boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

    save(){

    }

}
