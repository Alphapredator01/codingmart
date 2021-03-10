import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.css']
})
export class QuizAppComponent implements OnInit {
  public questions =[
      { "question":"what is the color of orange?", "options": ["red","blue","yellow","orange"], "answer": "orange" },
      { "question":"what is 1+1?", "options": ["2","3","88","infinity"], "answer": "2" },
      { "question":"what is the closest planet to sun?", "options": ["mercury","venus","mars","uranus"],"answer":"mercury" }
]
  public radioSelected1: any;
  public radioSelected2: any;
  public radioSelected3: any;
  public show: any;
  public ansrs: any;

  constructor() { }
  radioclick() {
    this.show = true;
    var attempt = [{ "answerd": this.radioSelected1, "question": this.questions[0].question },
      { "answerd": this.radioSelected2, "question": this.questions[1].question },
      { "answerd": this.radioSelected3, "question": this.questions[2].question }];
    localStorage.setItem('Attempt', JSON.stringify(attempt));
    this.ansrs = localStorage.getItem('Attempt');
    this.ansrs = JSON.parse(this.ansrs);
    console.log(this.ansrs);
  }
  ngOnInit(): void {
  }

}
