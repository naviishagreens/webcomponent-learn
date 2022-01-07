import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCompComponent } from './basic-comp.component';

describe('BasicCompComponent', () => {
  let component: BasicCompComponent;
  let fixture: ComponentFixture<BasicCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
