import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMaincomponentComponent } from './footer-maincomponent.component';

describe('FooterMaincomponentComponent', () => {
  let component: FooterMaincomponentComponent;
  let fixture: ComponentFixture<FooterMaincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMaincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMaincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
