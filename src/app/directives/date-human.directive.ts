import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[DateHuman]'
})
export class DateHumanDirective {

  constructor( private el: ElementRef ) {}

  ngAfterViewInit() {
    var text = this.el.nativeElement.innerText;

    var y = text.substring(0, 4);
    var m = text.substring(5, 7);
    var d = text.substring(8, 10);

    this.el.nativeElement.innerText = d+'/'+m+'/'+y;
  }

}
