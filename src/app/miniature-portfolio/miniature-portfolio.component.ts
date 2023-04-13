import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { trigger, transition, animate, style, state } from "@angular/animations";

@Component({
  selector: 'app-miniature-portfolio',
  templateUrl: './miniature-portfolio.component.html',
  styleUrls: ['./miniature-portfolio.component.scss'],
  animations: [
    trigger('visibleHidden', [
      state(
        'visible',
        style({
          transform: 'translate(0%, 0%) scale(1)',
          opacity: 1,
        })
      ),
      state(
        'void, hidden',
        style({
          transform: 'translate(0%, 0%) scale(0.8)',
          opacity: 0,
        })
      ),
      transition('* => visible', animate('100ms')),
      transition('* => void, * => hidden', animate('100ms'))
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(315deg)' })),
      transition('rotated => default', animate('200ms')),
      transition('default => rotated', animate('200ms'))
    ])
  ]
})
export class MiniaturePortfolioComponent {

  menuExpanded = false;
  fileName : string = '';
  state: string = 'default';

  constructor(){ /* TODO document why this constructor is empty */ }

  uploadClicked() {

    this.menuExpanded = !this.menuExpanded;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    console.log(this.menuExpanded);

  }

  upload(event:Event){

    const element = event.currentTarget as HTMLInputElement;

    this.fileName = element.files?.item(0)?.name!;

    console.log(event);
 }

 

}