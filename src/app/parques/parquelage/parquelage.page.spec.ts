import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParquelagePage } from './parquelage.page';

describe('ParquelagePage', () => {
  let component: ParquelagePage;
  let fixture: ComponentFixture<ParquelagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquelagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
