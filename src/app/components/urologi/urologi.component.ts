import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urologi',
  templateUrl: './urologi.component.html',
  styleUrls: ['./urologi.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:'0'}),
        animate('200ms ease-in-out', style({opacity:'1'}))
      ])
    ]),
    trigger('fadeInOut2', [
      transition(':enter', [
        style({background:'rgba(39, 104, 245, 0.2)'}),
        animate('0.5s 300ms ease-in-out', style({background:'rgba(39, 104, 245, 0)'}))
      ])
    ])
  ]
})
export class UrologiComponent implements OnInit {

  comparasion: boolean = false;
  panelTambahData: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
