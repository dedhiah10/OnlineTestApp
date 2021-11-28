import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './app-quiz.component.html',
  styleUrls: ['./app-quiz.component.css']
})
export class AppQuizComponent implements OnInit {
  buttonOnPage: boolean = false;

  constructor(private router: Router) {
    this.buttonOnPage = true;
  }
  ngOnInit(): void {}

  startQuiz() {
    this.buttonOnPage = false;
  }
}
