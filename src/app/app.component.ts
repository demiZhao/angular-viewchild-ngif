import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { GreetingComponent } from './greeting.component';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular';
  @ViewChild('greeting', { read: GreetingComponent, static: false })
  elemRef: GreetingComponent;
  showing = true;

  ngOnInit() {
    console.log(this.elemRef);
  }
  ngAfterViewInit() {
    console.log(this.elemRef);

    this.elemRef.greeting();
  }
}
