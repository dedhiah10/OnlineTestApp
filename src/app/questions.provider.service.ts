import { Injectable, OnInit } from "@angular/core";
import { DbCommsService } from "./db-comms.service";
import { Questions } from "./questions.model";

@Injectable({
    providedIn: 'root'
})
export class QuestionsProviderService {
    initFlag: boolean = false;
    questions: Questions[] = [];
    questPaper: Questions[] = [];
    latestSessionQA: Questions[] = [];
    latestQATime: Date= new Date();
    previousQAs: Questions[][] = [];

    constructor() {}

    randomNumGen(qNums: number[]):number {
        let x = Math.floor(Math.random()*this.questions.length)
        let duplicate = false;
        for(let y of qNums) {
            if(x == y) {
                duplicate = true;
            }
        }
        if(duplicate) {return this.randomNumGen(qNums);}
        else {return x;}
    }

    getFiveQuestions(): Questions[] {
        this.questPaper = [];
        let qNums = [-1, -1, -1, -1, -1];
        for(let i= 0; i < 5; i++) {
            qNums[i] = this.randomNumGen(qNums);
        }
        for(let i of qNums) {
            this.questPaper.push(
                Object.assign({}, this.questions[i])
                /*new Questions(
                    this.questions[i].question, 
                    this.questions[i].option1, 
                    this.questions[i].option2, 
                    this.questions[i].option3, 
                    this.questions[i].answer
                )*/
            );
        }
        console.log(qNums);
        console.log(this.questPaper);
        return this.questPaper;
    }

    updateQASession(q: Questions[]) {
        if(this.latestSessionQA == [] || this.latestSessionQA == this.previousQAs[this.previousQAs.length-1]) {
            this.latestSessionQA = [];
        } else {this.previousQAs.push(this.latestSessionQA); this.latestSessionQA = [];}
        this.latestSessionQA = q;
        this.latestQATime = new Date();
    }

    recieveQAs(): Questions[] {
        return this.latestSessionQA;
    }

    recieveQAT(): Date {
        return this.latestQATime;
    }
}