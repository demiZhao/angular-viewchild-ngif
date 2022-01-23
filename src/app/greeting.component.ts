import { Component, Input } from '@angular/core';

@Component({
  selector: 'greeting',
  template: `<h1>greeting {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class GreetingComponent {
  @Input() name: string;
  greeting() {
    console.log(`greeting!${this.name}`);
  }
}
