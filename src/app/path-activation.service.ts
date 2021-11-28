import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { QuestionsProviderService } from './questions.provider.service';

@Injectable({
  providedIn: 'root'
})
export class PathActivationService implements CanActivate {

  constructor(private qps:QuestionsProviderService) { }

  canActivate(): boolean {
    if(this.qps.previousQAs.length < 1) {return false;}
    else {return true;}
  }
}
