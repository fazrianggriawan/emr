import { Component, OnInit } from '@angular/core';
import { NumpadRacikanService } from './numpad-racikan.service';

@Component({
    selector: 'app-numpad-racikan',
    templateUrl: './numpad-racikan.component.html',
    styleUrls: ['./numpad-racikan.component.css']
})
export class NumpadRacikanComponent implements OnInit {

    numbers: any[] = [];
    numbersHundred: any[] = [];
    number: string = '';
    satuan: string = '';

    constructor(
        private numpadRacikanService: NumpadRacikanService
    ) { }

    ngOnInit(): void {
        this.numpadRacikanService.value.subscribe(data => this.handleValue(data))
        this.parsingNomor();
        this.resetActiveNumpad();
    }

    public handleValue(value: string) {
        if( value == '' ) {
            this.resetActiveNumpad();
        }
    }

    public selectNumber(number: string, e: any) {
        this.number = number;
        this.setActiveNumpad(e, 'number');
        this.updateText();
    }

    public selectSatuan(satuan: string, e: any) {
        this.satuan = satuan;
        this.setActiveNumpad(e, 'satuan');
        this.updateText();
    }

    public updateText() {
        let value = this.number + ' ' + this.satuan;
        this.numpadRacikanService.value.next(value);
    }

    public setActiveNumpad(event: any, type: string) {
        let childs : any;

        if( type == 'number' ) childs = document.getElementsByClassName('node-number');
        if( type == 'satuan' ) childs = document.getElementsByClassName('node-satuan');

        Array.prototype.forEach.call(childs, function(el){
            el.style.background = 'white';
            el.style.fontWeight = 'normal';
        })
        event.target.style.color = 'black'
        event.target.style.background = 'orange'
        event.target.style.fontWeight = '500'
    }

    public resetActiveNumpad() {
        let childs = document.getElementsByClassName('numpad');
        Array.prototype.forEach.call(childs, function(el){
            el.style.background = 'white';
            el.style.fontWeight = 'normal';
        })
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

        var c = [];
        var d = [];
        for (let index = 100; index <= 1000; index++) {
            if (index && index % 50 === 0) {
                c.push(index)
              }
        }

        var i, j, temporary, chunk = 2;
        for (i = 1, j = c.length; i < j; i += chunk) {
            temporary = c.slice(i, i + chunk);
            d.push(temporary)
        }

        this.numbers = a;
        this.numbersHundred = d;

    }

}
