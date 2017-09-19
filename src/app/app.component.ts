import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('myul')
  private ul: ElementRef;

  constructor(private renderer: Renderer2) { }

  private onBtnClick() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('item adicionado dinamicamente.');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.ul.nativeElement, li);
  }
}
