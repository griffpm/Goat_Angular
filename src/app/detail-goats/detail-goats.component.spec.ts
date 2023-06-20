import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGoatsComponent } from './detail-goats.component';

describe('DetailGoatsComponent', () => {
  let component: DetailGoatsComponent;
  let fixture: ComponentFixture<DetailGoatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailGoatsComponent]
    });
    fixture = TestBed.createComponent(DetailGoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
