import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { NumpadService } from './numpad.service';

@Component({
    selector: 'app-numpad',
    templateUrl: './numpad.component.html',
    styleUrls: ['./numpad.component.css']
})
export class NumpadComponent implements OnInit {

    @ViewChild('op') op!: OverlayPanel;
    numbers: any;

    constructor(
        private numpadService: NumpadService
    ) { }

    ngOnInit(): void {
        this.numpadService.event.subscribe(event => {
            if (event) {
                this.openPanel(event);
            }
        })
        this.parsingNomor();
    }

    public openPanel(e: any) {
        this.op.toggle(e);
    }

    public selectNumber(number: string) {
        this.numpadService.number.next(number);
        this.op.hide();
    }

    public parsingNomor() {
        var a = [];
        var b = [];
        for (let index = 0; index <= 100; index++) { b.push(index) }

        var i, j, temporary, chunk = 10;
        for (i = 1, j = b.length; i < j; i += chunk) {
            temporary = b.slice(i, i + chunk);
            a.push(temporary)
        }

        this.numbers = a;

    }

}
