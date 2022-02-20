import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoresultComponent } from './todoresult.component';

describe('TodoresultComponent', () => {
  let component: TodoresultComponent;
  let fixture: ComponentFixture<TodoresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
