import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowResizeComponent } from './flow-resize.component';

describe('FlowResizeComponent', () => {
  let component: FlowResizeComponent;
  let fixture: ComponentFixture<FlowResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
