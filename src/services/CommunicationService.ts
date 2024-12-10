import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private eventSubject = new Subject<string>();

  event$ = this.eventSubject.asObservable();

  sendEvent(eventName: string) {
    this.eventSubject.next(eventName);
  }
}