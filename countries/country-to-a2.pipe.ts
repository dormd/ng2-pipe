import { Pipe, PipeTransform, Type } from '@angular/core'; //LOCALE_ID
import { DecimalPipe } from '@angular/common';

import { CountryToA2 } from './data/country-to-a2'

@Pipe({
    name: 'countryToA2'
})

export class CountryToA2Pipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return CountryToA2[value] || '';
    } 
} 