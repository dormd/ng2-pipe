import { Pipe, PipeTransform, Type } from '@angular/core'; //LOCALE_ID
import { DecimalPipe } from '@angular/common';

import { A2ToCountry } from './data/a2-to-country'

@Pipe({
    name: 'a2ToCountry'
})

export class A2ToCountryPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return A2ToCountry[value] || '';
    } 
} 