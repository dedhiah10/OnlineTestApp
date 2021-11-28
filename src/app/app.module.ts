import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppQuizComponent } from './app-quiz/app-quiz.component';
import { AppResultComponent } from './app-result/app-result.component';
import { AppRouting } from './app.routing';
import { FormsModule } from '@angular/forms';
import { QuestionComponentComponent } from './app-quiz/question-component/question-component.component';
import { QuestionsProviderService } from './questions.provider.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppQuizComponent,
    AppResultComponent,
    QuestionComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [QuestionsProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
