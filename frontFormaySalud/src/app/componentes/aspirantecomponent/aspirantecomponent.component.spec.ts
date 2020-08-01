import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirantecomponentComponent } from './aspirantecomponent.component';

describe('AspirantecomponentComponent', () => {
  let component: AspirantecomponentComponent;
  let fixture: ComponentFixture<AspirantecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspirantecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirantecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
