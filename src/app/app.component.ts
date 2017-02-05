import { Component, onsNotification } from 'angular2-onsenui';

@Component({
  selector: 'optt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenPTT';

  alert() {
    onsNotification.alert('Hello, world!');
  }
}
