import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ComponentInteractionService } from './component-interaction.service';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {
  @Input() day: string;

  constructor(
    private _elementRef: ElementRef,
    private componentInteractionService: ComponentInteractionService,
  ) { }

  ngOnInit() {
    const el = this._elementRef.nativeElement;

    el.addEventListener('dragenter', (ev) => {
      ev.preventDefault();
      return true;
    });

    el.addEventListener('dragover', (ev) => {
      ev.preventDefault();
      return false;
    });

    el.addEventListener('drop', (e) => {
      console.log('drop drop', el);
      const taskData = JSON.parse(e.dataTransfer.getData('text'));
      taskData.day = this.day;
      console.log('droppedData', taskData);
      this.componentInteractionService.serveDraggedTaskData(taskData);
      e.preventDefault();
      return false;
    });
  }

}
