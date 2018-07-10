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
      console.log('Start');
      console.log('this data', this.task);
      el.classList.add('drag-src');
      ev.dataTransfer.effectAllowed = 'move';
      ev.dataTransfer.setData('text', JSON.stringify(this.task));
      return true;
    });

    el.addEventListener('dragend', (e) => {
      console.log('dragged');
      e.preventDefault();
      el.classList.remove('drag-src');
    });
  }
}
