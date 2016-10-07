import { Pipe, PipeTransform, Type } from '@angular/core'; //LOCALE_ID
import { DecimalPipe } from '@angular/common';

import { A2ToCapital } from './data/a2-to-capital'

@Pipe({
    name: 'a2ToCapital'
})

export class A2ToCapitalPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        return A2ToCapital[value] || '';
    } 
} 