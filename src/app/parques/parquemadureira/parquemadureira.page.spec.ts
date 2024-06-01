import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParquemadureiraPage } from './parquemadureira.page';

describe('ParquemadureiraPage', () => {
  let component: ParquemadureiraPage;
  let fixture: ComponentFixture<ParquemadureiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquemadureiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
