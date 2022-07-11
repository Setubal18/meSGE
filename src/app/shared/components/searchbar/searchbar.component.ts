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
  @Output() eventEmitterFound:EventEmitter = new EventEmitter()
  public searchInput = new FormControl('')
  constructor() { }

  ngOnInit() {}

  finding(){
    let arrayFound = []
    console.log(this.list, this.searchsPaths)
    this.searchsPaths.forEach((searchPath)=>{
       arrayFound = arrayFound.flat(arrayFound.push(this.search(searchPath)))
       console.log('array',arrayFound)
    })
    this.eventEmit(arrayFound)
  }

  search(searchPath:string){
     return this.list.filter((object)=>{
      if(this.searchInput.value && object[searchPath].toUpperCase().includes(this.searchInput.value.toUpperCase())){
        return object
      }
    })

  }

  eventEmit(returnArray){
    this.eventEmitterFound.emit(returnArray)
  }

}

