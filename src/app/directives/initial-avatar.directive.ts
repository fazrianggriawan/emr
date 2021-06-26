import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[InitialAvatar]'
})
export class InitialAvatarDirective {

  constructor( private el: ElementRef ) {}

  ngAfterViewInit() {
    var text = this.el.nativeElement.innerText;
    var matches = text.match(/\b(\w)/g);
    var acronym = matches.join('');
    this.el.nativeElement.innerText = acronym.substring(0,2);
  }

}
