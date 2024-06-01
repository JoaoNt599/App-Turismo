import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParquedospatinsPage } from './parquedospatins.page';

describe('ParquedospatinsPage', () => {
  let component: ParquedospatinsPage;
  let fixture: ComponentFixture<ParquedospatinsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquedospatinsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
