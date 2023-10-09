import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <p class="text-center font-extrabold">
      404 - Page Not Found
    </p>
  `,
  styles: [
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
