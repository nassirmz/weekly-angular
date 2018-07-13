import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {
  @Input('appDraggable') task: any;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {

    const el = this._elementRef.nativeElement.querySelector('div');
    el.draggable = true;
    el.addEventListener('dragstart', (ev) => {
      ev.dataTransfer.effectAllowed = 'move';
      ev.dataTransfer.setData('text', JSON.stringify(this.task));
      console.log('dataSet', ev.dataTransfer.getData('text'));
      return true;
    });
  }
}
