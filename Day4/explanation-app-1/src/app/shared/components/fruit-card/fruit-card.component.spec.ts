import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FruitCardComponent } from './fruit-card.component';

describe('FruitCardComponent', () => {
  let component: FruitCardComponent;
  let fixture: ComponentFixture<FruitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FruitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
