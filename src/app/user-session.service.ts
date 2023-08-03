import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  public isLoggedInEventEmitter: Subject<boolean> = new Subject();
  constructor(private router: Router, private storage: StorageService) {}

  setSessionAndLogin(jwtToken: string) {
    this.storage.set('token', jwtToken);
    this.isLoggedInEventEmitter.next(true);
    this.router.navigate(['profile'], { replaceUrl: true });
  }

  isLoggedIn() {
    const jwtToken = this.storage.get('token');
    return jwtToken && jwtToken !== '';
  }

  logOut() {
    this.isLoggedInEventEmitter.next(false);
    this.router.navigate(['home']);
    sessionStorage.clear();
  }
}
