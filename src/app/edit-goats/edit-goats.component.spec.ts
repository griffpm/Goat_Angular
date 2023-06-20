import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGoatsComponent } from './edit-goats.component';

describe('EditGoatsComponent', () => {
  let component: EditGoatsComponent;
  let fixture: ComponentFixture<EditGoatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGoatsComponent]
    });
    fixture = TestBed.createComponent(EditGoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
