import { registerLocaleData } from '@angular/common';
import localeExtraPt from '@angular/common/locales/extra/pt';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyMaskConfig, NgxCurrencyModule } from 'ngx-currency';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyFormatPipe } from './currency-format.pipe';

registerLocaleData(localePt, 'pt', localeExtraPt);

export const DefaultCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: ',',
  nullable: false,
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: '.'
};

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCurrencyModule.forRoot(DefaultCurrencyMaskConfig),
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
