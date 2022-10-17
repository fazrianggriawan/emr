import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-laboratorium',
    templateUrl: './laboratorium.component.html',
    styleUrls: ['./laboratorium.component.css']
})
export class LaboratoriumComponent implements OnInit {

    dialogHasilLab: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

}
