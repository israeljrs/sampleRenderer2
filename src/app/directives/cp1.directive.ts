import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCp1]'
})
export class Cp1Directive implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('Item 1');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.el.nativeElement, li);
  }

}
