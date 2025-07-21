import { Component, signal } from '@angular/core';
import { Demoss } from "./demoss/demoss";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Demoss,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  inputText:string="";

  onSubmit(inputEl: HTMLInputElement){
    this.inputText=inputEl.value;
  }

  counter=0;
  
  updateConuter(){
    this.counter++;
  }
}
