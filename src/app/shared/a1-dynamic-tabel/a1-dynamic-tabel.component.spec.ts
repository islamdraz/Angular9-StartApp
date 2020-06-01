import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A1DynamicTabelComponent } from './a1-dynamic-tabel.component';

describe('A1DynamicTabelComponent', () => {
  let component: A1DynamicTabelComponent;
  let fixture: ComponentFixture<A1DynamicTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1DynamicTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A1DynamicTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
