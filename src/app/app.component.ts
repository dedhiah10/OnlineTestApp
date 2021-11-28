import { Component } from '@angular/core';
import { DbCommsService } from './db-comms.service';
import { QuestionsProviderService } from './questions.provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online-Test-App';
  constructor(private dbComms: DbCommsService) {

  }
}
