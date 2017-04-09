import { Component } from '@angular/core';

@Component({
  selector: 'fx-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'fx works!';
}
