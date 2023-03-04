import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptpListComponent } from './cryptp-list.component';

describe('CryptpListComponent', () => {
  let component: CryptpListComponent;
  let fixture: ComponentFixture<CryptpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
