import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input() list = []
  @Input() searchsPaths = []
  @Output() eventEmitterFind:EventEmitter = new EventEmitter()
  public seachInput:FormControl = new FormControl('')
  constructor() { }

  ngOnInit() {
    console.log('init')
  }

  returnResult(){
    const arrayFound = []
    this.list.find((toFind)=>{
      arrayFound.push(this.search(toFind))
    })

    this.eventEmit(arrayFound)
  }

  search(toFind:string){
    this.searchsPaths.forEach((searchPath)=>{
      if(toFind[searchPath].includes(this.seachInput.value)){
        return toFind
      }
    })

  }

  eventEmit(returnArray){
    this.eventEmitterFind.emit(returnArray)
  }

}

