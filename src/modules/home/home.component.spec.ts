import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('[Modules][Home] Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });
});
