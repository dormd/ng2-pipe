import { Pipe, PipeTransform, Type } from '@angular/core'; //LOCALE_ID
import { DecimalPipe } from '@angular/common';

import { A2ToCountries } from 'data/a2-to-countries'

@Pipe({
    name: 'a2ToCountries'
})

export class A2ToCountriesPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return A2ToCountries[value] || '';
    } 
} 