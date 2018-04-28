import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLinesComponent } from './progress-lines.component';

describe('ProgressLinesComponent', () => {
  let component: ProgressLinesComponent;
  let fixture: ComponentFixture<ProgressLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
