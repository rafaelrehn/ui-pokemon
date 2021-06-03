import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const EnterAnimation = trigger('listAnimation', [
    transition('*=>*', [
      query(':enter',[
        style({ opacity: 0}),
        stagger(100, [ 
         animate('150ms ease-in', style({opacity: 0.8}))
        ])
      ], {optional: true})
    ])
  ])
