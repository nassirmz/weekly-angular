import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {

  constructor(private _elementRef: ElementRef ) { }

  ngOnInit() {
    const el = this._elementRef.nativeElement;
    el.addEventListener('dragenter', (e) => {
      el.classList.add('over');
    });

    el.addEventListener('dragleave', (e) => {
      el.classList.remove('over');
    });

    el.addEventListener('dragover', (e) => {
      e.dataTransfer.dropEffect = 'move';
      return false;
    });

    el.addEventListener('drop', (e) => {
      const data = JSON.parse(e.dataTransfer.getData('text'));
      console.log('droppedData', data);
    });
  }

}
