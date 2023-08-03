import { Component, OnInit } from '@angular/core';
import { messages } from '../constants';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content?: string;
  isLoading = true;
  tokens;
  showMsg: any = messages;
  constructor(private storage: StorageService) {
    let data = this.storage.get('token');
    if (data == null || data == undefined) {
      this.tokens = true;
    } else {
      this.tokens = false;
    }
  }

  ngOnInit(): void {}
}
