import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPizzasComponent } from './list-of-pizzas.component';

describe('ListOfPizzasComponent', () => {
  let component: ListOfPizzasComponent;
  let fixture: ComponentFixture<ListOfPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
