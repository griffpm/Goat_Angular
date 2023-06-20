import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGoatsComponent } from './list-goats.component';

describe('ListGoatsComponent', () => {
  let component: ListGoatsComponent;
  let fixture: ComponentFixture<ListGoatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListGoatsComponent]
    });
    fixture = TestBed.createComponent(ListGoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
