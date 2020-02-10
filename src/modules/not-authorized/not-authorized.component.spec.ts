import { TestBed, async } from '@angular/core/testing';

import { NotAuthorizedComponent } from './not-authorized.component';

describe('[Modules][NotAuthorized] Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotAuthorizedComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(NotAuthorizedComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
