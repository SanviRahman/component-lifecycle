import { Component, Input, input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-demoss',
  imports: [],
  templateUrl: './demoss.html',
  styleUrl: './demoss.css'
})
export class Demoss{
  @Input() value: string = "Procademy";

  constructor(){
    console.log("constructor called");
    // console.log(this.value);
  }

  ngOnChanges(change:SimpleChange){
    console.log("ngOnCheck called");
    console.log(change);
  }

  ngOnInit(){
    console.log("ngOnInit called");
    // console.log(this.value);
  }

  ngOncheck(){
    console.log("ngOnCheck");
  }


  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }
}
