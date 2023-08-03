import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StorageService } from '../storage.service';
import { mergeMap, tap } from 'rxjs/operators';
import { messages } from '../constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  isLoading: boolean = false;
  tokens = false;
  showMsg: any = messages;

  constructor(private apiService: ApiService, private storage: StorageService) {
    let data = this.storage.get('token');
    if (data == null || data == undefined) {
      this.tokens = true;
    } else {
      this.tokens = false;
    }
    this.isLoading = true;
    this.apiService
      .getDetails()
      .pipe(
        tap((item) => {
          this.currentUser = item.body;
          this.isLoading = false;
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.currentUser = undefined;
  }
}
