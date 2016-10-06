import { Pipe, PipeTransform, Type } from '@angular/core'; //LOCALE_ID
import { DecimalPipe } from '@angular/common';

import { CountriesToA2 } from 'data/countries-to-a2'

@Pipe({
    name: 'countriesToA2'
})

export class CountriesToA2Pipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return CountriesToA2[value] || '';
    } 
} 