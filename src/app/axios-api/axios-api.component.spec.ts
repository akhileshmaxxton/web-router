import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxiosApiComponent } from './axios-api.component';

describe('AxiosApiComponent', () => {
  let component: AxiosApiComponent;
  let fixture: ComponentFixture<AxiosApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AxiosApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxiosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
