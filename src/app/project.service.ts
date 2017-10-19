import { Injectable } from '@angular/core';
import { CreationComponent } from './creation/creation.component';
@Injectable()
export class ProjectService {
  tasksList = [{
    title:'Iphone X',
    price:'999',
    newurl:'data:image/jpeg;base64,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'
  }]
  constructor() {    
   }
  
  update(newData, id){
    this.tasksList[id] = newData;

  }
  
  recive(task){
    this.tasksList.push(task)
    console.log('helooo',task)
  }

}