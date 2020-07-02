import { Component, OnInit } from '@angular/core';

import { ProgressService } from '../progress.service'

@Component({
  selector: 'app-work-on-app',
  templateUrl: './work-on-app.component.html',
  styleUrls: ['./work-on-app.component.css']
})
export class WorkOnAppComponent implements OnInit {
  index:Number = -1;
  progressList: any;

  constructor(private progressService: ProgressService) { 
    this.progressList = progressService.getProgresData();
  }

  ngOnInit(): void {
  }

  onIndexChange(index:Number){
    if(this.index!==-1 && this.index===index){
      this.index=-1;
    }else{
    this.index=index;
  }
  }
}
