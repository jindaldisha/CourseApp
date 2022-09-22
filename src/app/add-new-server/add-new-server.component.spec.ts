import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewServerComponent } from './add-new-server.component';

describe('AddNewServerComponent', () => {
  let component: AddNewServerComponent;
  let fixture: ComponentFixture<AddNewServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
