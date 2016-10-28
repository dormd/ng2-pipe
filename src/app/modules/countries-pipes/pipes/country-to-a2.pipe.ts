import { Pipe, PipeTransform, Type } from '@angular/core'; //LOCALE_ID
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'countryToA2'
})

export class CountryToA2Pipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return '';
        // return CountryToA2[value] || '';
    } 
} 