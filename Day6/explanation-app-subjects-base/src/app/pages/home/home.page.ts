import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public myDate = new Date();
  public text = 'Lorem ipsum dolorsit blah blah';
  public helloWorld$;

  constructor(
    private truncate: TruncatePipe,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.text = this.truncate.transform(this.text, 15);

    // this.helloWorld = this.translate.instant('helloWorld');

    this.helloWorld$ = this.translate.get('nCats', { cats: 20 });
  }

  toggleLanguage() {
    if (this.translate.currentLang === 'en') {
      this.translate.use('es');
    } else {
      this.translate.use('en');
    }
  }
}
