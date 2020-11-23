import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FunctionalComponent } from './functional.component';

describe('FunctionalComponent', () => {
  let component: FunctionalComponent;
  let fixture: ComponentFixture<FunctionalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
