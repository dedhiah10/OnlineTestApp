import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppQuizComponent } from "./app-quiz/app-quiz.component";
import { QuestionComponentComponent } from "./app-quiz/question-component/question-component.component";
import { AppResultComponent } from "./app-result/app-result.component";
import { PathActivationService } from "./path-activation.service";

const appRoutes: Routes = [
    {path: 'quiz', component: AppQuizComponent},
    {path: 'result', canActivate: [PathActivationService], component: AppResultComponent},
    {path: '**', redirectTo: "/quiz"},
];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRouting {

}