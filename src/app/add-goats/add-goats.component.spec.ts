import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGoatsComponent } from './add-goats.component';

describe('AddGoatsComponent', () => {
  let component: AddGoatsComponent;
  let fixture: ComponentFixture<AddGoatsComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [AddGoatsComponent]
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(AddGoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
