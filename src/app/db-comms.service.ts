import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questions } from './questions.model';
import { QuestionsProviderService } from './questions.provider.service';

@Injectable({
  providedIn: 'root'
})
export class DbCommsService {
  questions: Questions[] = [];

  constructor(private http: HttpClient, private qps: QuestionsProviderService) {
    this.fetchQuestions();

  }

  fetchQuestions() {
    this.http.get('https://online-test-app-e587d-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json')
      .subscribe(prod => {
        this.convertQuests(prod);
      }
      );
  }
  /*
  addQuestionsToBack() {
    this.http.put(
      'https://online-test-app-e587d-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json',
      this.questions
    ).subscribe(
      prod => {
        console.log(prod)
      }
    )
  }
  */

  convertQuests(obj: any) {
    this.questions = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) { this.questions.push(new Questions(obj[key].question, obj[key].option1, obj[key].option2, obj[key].option3, obj[key].answer)); }
    }
    //console.log(this.questions)
    this.qps.questions = this.questions
  }
  /*
  initFunc():void {
    this.questions.push(new Questions("Who among the following wrote Sanskrit grammar?", "Kalidasa", "Panini", "Charak", 2));
    this.questions.push(new Questions("The metal whose salts are sensitive to light is?", "Silver", "Zinc", "Copper", 1));
    this.questions.push(new Questions("The country that has the highest in Barley Production?", "France", "China", "Russia", 3));
    this.questions.push(new Questions("Tsunamis are not caused by:", "Hurricanes", "Volcanic eruptions", "Undersea landslides", 1));
    this.questions.push(new Questions("D.D.T. was invented by?", "Dalton", "Karl Benz", "A. Mosley", 3));
    this.questions.push(new Questions("The hottest planet in the solar system?", "Venus", "Mercury", "Mars", 1));
    this.questions.push(new Questions("Gravity setting chambers are used in industries to remove", "NOx", "SOx", "suspended particulate matter", 3));
    this.questions.push(new Questions("First Afghan War took place in:", "1839", "1848", "1833", 1));
    this.questions.push(new Questions("First China War was fought with:", "France", "Britain", "Greek", 2));
    this.questions.push(new Questions("Fire temple is the place of worship of which of the following religion?", "Zoroastrianism", "Judaism", "Taoism", 1));
    this.questions.push(new Questions("For the Olympics and World Tournaments, the dimensions of basketball court are", "28 m x 16 m", "26 m x 14 m", "28 m x 15 m", 3));
    this.questions.push(new Questions("During World War II, when did Germany attack France?", "1942", "1940", "1941", 2));
    this.questions.push(new Questions("Objects at the surface of water can be viewed from a submarine under water by using this instrument.", "Periscope", "Telescope", "Kaleidoscope", 1));
    this.questions.push(new Questions("The biggest part of the brain is", "Cerebellum", "Spinal cord", "Cerebrum", 3));
    this.questions.push(new Questions("At room temperature, which is the only metal that is in liquid form?", "Silver", "Mercury", "Aluminum", 2));
    this.questions.push(new Questions("A change of the DNA of an organism resulting in a new trait is known as a ", "Mutation", "Mitosis", "Meiosis", 1));
    this.questions.push(new Questions("Which of the following Company buy eBay’s Indian operation?", "PayTM", "Amazon", "Flipkart", 3));
    this.questions.push(new Questions("Which of the following flight infection in the body?", "Heamoglobin", "WBC", "RBC", 2));
  }
*/
}
