import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <p>
      header works! some changes
    </p>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
