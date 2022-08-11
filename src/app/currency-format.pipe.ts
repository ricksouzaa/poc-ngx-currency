import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe extends CurrencyPipe implements PipeTransform {

  override transform(value: number | string, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean, digitsInfo?: string, locale?: string): string | null;
  override transform(value: null | undefined, currencyCode?: string, display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean, digitsInfo?: string, locale?: string): null;
  override transform(value: number | string | null | undefined, currencyCode: string = 'BRL', display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean, digitsInfo: string = '1.2-2', locale: string = 'pt'): string | null {
    return super.transform(value, currencyCode, display, digitsInfo, locale);
  }

}
