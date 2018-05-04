import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScompComponent } from './scomp.component';

describe('ScompComponent', () => {
  let component: ScompComponent;
  let fixture: ComponentFixture<ScompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
