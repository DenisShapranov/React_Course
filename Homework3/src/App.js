import React, { Component } from 'react';
import './App.css';
import {Question, Answer} from './Question'

class App extends Component {

  state = {
    counterTrue: 0,
    counterQuestion: 0,
    questions: [
                {textQuestion:"Какого цвета Земля из космоса?",
                 correct:1,
                 answers: ["Голубая","Зеленая","Красная"]
                },
                {textQuestion:"Сколько планет в солнечной системе?",
                 correct:2,
                 answers: ["3","8","100"]
                },
                {textQuestion:"Какая галактика больше?",
                 correct:3,
                 answers: ["Млечный Путь","Большое Магелланово Облако","Туманность Андромеды"]
                },
                {textQuestion:"Какая звезда тяжелее?",
                 correct:3,
                 answers: ["Сириус","Альдебаран","Бетельгейзе"]
                }
               ]
  }

  changeCounterQuestion = () => {
    this.setState({counterQuestion:++this.state.counterQuestion});
  }

  changeCounterTrue = () => {
    this.setState({counterTrue:++this.state.counterTrue})
    this.setState({counterQuestion:++this.state.counterQuestion});
  }
 
  outputAll = () => {
    let {counterQuestion, questions} = this.state;  
    console.log(counterQuestion);
    if (counterQuestion > questions.length - 1) {
      return (<p>Ваш результат {this.state.counterTrue} правильных ответа.</p>)
    }
    else return (   
         
            <Question textQuestion={questions[counterQuestion].textQuestion}
                changeCounterTrue={this.changeCounterTrue}
                changeCounterQuestion={this.changeCounterQuestion}
            >
                {       
                  questions[counterQuestion].answers.map((item)=>{
                    let indexItem = questions[counterQuestion].answers.indexOf(item);
                    if (indexItem === (questions[counterQuestion].correct -1))
                    {
                      return (
                        <Answer key={indexItem} correct={true}
                        textAnswer={item}
                      />
                      )
                      
                    } else return (<Answer key={indexItem} textAnswer={item}/>) 
                  })

                }
          </Question>
        )
    


  }


  render() {
    return (
      <div className="App">
            {
            this.outputAll()   
            }      
      </div>
    );
  }
 }


export default App;
