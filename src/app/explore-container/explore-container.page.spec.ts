import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerPage } from './explore-container.page';

describe('ExploreContainerPage', () => {
  let component: ExploreContainerPage;
  let fixture: ComponentFixture<ExploreContainerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreContainerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
