import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DropService } from './drop.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {
  @Input() day: string;

  constructor(
    private _elementRef: ElementRef,
    private dropService: DropService,
  ) { }

  ngOnInit() {
    const el = this._elementRef.nativeElement;

    el.addEventListener('dragenter', (ev) => {
      ev.preventDefault();
      console.log('dragenter', el);
      return true;
    });

    el.addEventListener('dragover', (ev) => {
      ev.preventDefault();
      console.log('dragOverDataSet', ev.dataTransfer.getData('text'));
      return false;
    });

    el.addEventListener('drop', (e) => {
      console.log('drop drop', el);
      const taskData = JSON.parse(e.dataTransfer.getData('text'));
      taskData.day = this.day;
      console.log('droppedData', taskData);
      this.dropService.serveMovedTaskData(taskData);
      e.preventDefault();
      return false;
    });
  }

}
