import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Questions } from 'src/app/questions.model';
import { QuestionsProviderService } from 'src/app/questions.provider.service';

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionComponentComponent implements OnInit, OnDestroy {
  questionsArray: Questions[];
  flag: boolean = false;
  answered: boolean = false;
  num: number = 1;
  timerSecs: number = 10*60;
  timerString: String = '';
  private timerSubscription: Subscription;

  constructor(
    private qps: QuestionsProviderService,
    private currentRoute: ActivatedRoute,
    private router: Router) {
    this.questionsArray = qps.getFiveQuestions();
    this.timerSubscription = interval(1000).subscribe(data => {
      if (this.flag) {
        let tempsubmitflag: boolean = true;
        for(let q of this.questionsArray) {
          if(q.youranswer == 0) {
            tempsubmitflag = tempsubmitflag && false;
          }
        }
        this.answered = tempsubmitflag;
        this.timerSecs--;
        this.timerString = (this.timerSecs+' Seconds');
        if (this.timerSecs <= 0) {
          this.ngOnDestroy();
        }
      }
    });
  }

  ngOnInit(): void {
    this.flag = true;
    console.log();
  }

  ngOnDestroy(): void {
    this.qps.updateQASession(this.questionsArray);
    this.timerSubscription.unsubscribe();
    this.router.navigate(['result']);
  }

  onSubmit() {
    this.qps.updateQASession(this.questionsArray);
    this.router.navigate(['result']);
    this.timerSubscription.unsubscribe();
  }
}
