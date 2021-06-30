import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nx-storybook-atomic-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})
export class GreenButtonComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
