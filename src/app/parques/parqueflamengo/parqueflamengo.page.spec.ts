import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParqueflamengoPage } from './parqueflamengo.page';

describe('ParqueflamengoPage', () => {
  let component: ParqueflamengoPage;
  let fixture: ComponentFixture<ParqueflamengoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueflamengoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
