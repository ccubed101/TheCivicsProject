import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLazyLoadPanelComponent } from './no-lazy-load-panel.component';

describe('NoLazyLoadPanelComponent', () => {
  let component: NoLazyLoadPanelComponent;
  let fixture: ComponentFixture<NoLazyLoadPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLazyLoadPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLazyLoadPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
