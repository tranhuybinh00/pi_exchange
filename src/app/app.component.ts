import { Component } from '@angular/core';
import { LANGUAGES } from '@constant';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang(LANGUAGES.English);
    translate.use(LANGUAGES.English);
  }
}
