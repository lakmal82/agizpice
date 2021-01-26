import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinamonComponent } from './cinamon.component';

describe('CinamonComponent', () => {
  let component: CinamonComponent;
  let fixture: ComponentFixture<CinamonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinamonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinamonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
