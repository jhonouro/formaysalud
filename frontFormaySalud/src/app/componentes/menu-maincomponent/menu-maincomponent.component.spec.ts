import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMaincomponentComponent } from './menu-maincomponent.component';

describe('MenuMaincomponentComponent', () => {
  let component: MenuMaincomponentComponent;
  let fixture: ComponentFixture<MenuMaincomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMaincomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMaincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
