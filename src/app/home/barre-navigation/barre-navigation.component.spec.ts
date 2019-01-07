import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreNavigationComponent } from './barre-navigation.component';

describe('BarreNavigationComponent', () => {
  let component: BarreNavigationComponent;
  let fixture: ComponentFixture<BarreNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
