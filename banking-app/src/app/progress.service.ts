import { Injectable } from '@angular/core';
import { apiResponse } from './data.js'

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() { }

  getProgresData(){
    // mocks a call to rest api to get progress data
    return apiResponse;
  }
}
