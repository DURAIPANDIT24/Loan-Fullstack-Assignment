import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDefectComponent } from './create-defect.component';

describe('CreateDefectComponent', () => {
  let component: CreateDefectComponent;
  let fixture: ComponentFixture<CreateDefectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDefectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDefectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
