import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-mask',
  templateUrl: './loader-mask.component.html',
  styleUrls: ['./loader-mask.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoaderMaskComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
