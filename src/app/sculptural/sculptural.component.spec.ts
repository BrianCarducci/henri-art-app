import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SculpturalComponent } from './sculptural.component';

describe('SculpturalComponent', () => {
  let component: SculpturalComponent;
  let fixture: ComponentFixture<SculpturalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SculpturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SculpturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
