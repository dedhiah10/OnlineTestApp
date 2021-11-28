import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from '../questions.model';
import { QuestionsProviderService } from '../questions.provider.service';

@Component({
  selector: 'app-result',
  templateUrl: './app-result.component.html',
  styleUrls: ['./app-result.component.css']
})
export class AppResultComponent implements OnInit {
  QAs: Questions[] = [];
  noQAs: boolean = false;
  QATime: String;
  correctanswers: number = 0;

  constructor(
    private router: Router, 
    private qps: QuestionsProviderService) {
      this.QAs = qps.recieveQAs();
      this.QATime = qps.recieveQAT().toString().substring(0, 24);
      console.log(this.QATime)
      if(this.QAs.length < 1) {
        this.noQAs = true;
      }
      for(let q of this.QAs) {
        if(q.youranswer == q.answer) {
          this.correctanswers++;
        }
      }
    }

  ngOnInit(): void {
    
  }

}
