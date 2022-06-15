import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedItemsComponent } from './finished-items.component';

describe('FinishedItemsComponent', () => {
  let component: FinishedItemsComponent;
  let fixture: ComponentFixture<FinishedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
