import { StorageService } from './../storage.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],

      imports: [ HttpClientModule, RouterTestingModule ],
      providers: [ StorageService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }, }, ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
