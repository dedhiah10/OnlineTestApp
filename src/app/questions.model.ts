export class Questions {
    public question: String; 
    public option1: String; 
    public option2: String; 
    public option3: String; 
    public answer: number;
    public youranswer:number = 0;

    constructor(question: String, option1: String, option2: String, option3: String, answer: number) {
        this.answer = answer;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.question = question;
    }

    public get yourAnswer() {
        return this.youranswer;
    }

    public set yourAnswer(num: number) {
        if(num > 3 || num < 1) {} 
        else { this.yourAnswer = num; }
    }

}