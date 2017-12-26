import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShablonUserComponent } from './shablon-user.component';

describe('ShablonUserComponent', () => {
  let component: ShablonUserComponent;
  let fixture: ComponentFixture<ShablonUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShablonUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShablonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
