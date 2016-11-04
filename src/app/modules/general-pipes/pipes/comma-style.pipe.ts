import { Inject, Pipe, PipeTransform } from '@angular/core';
import { COUNTRIES_DATA, Countries, ICountry } from '../../shared';

import * as _ from 'lodash';

@Pipe({
    name: 'commaStyle'
})

export class CommaStylePipe implements PipeTransform {
    constructor() {}

    // 12345 --> 12,345    
    public transform(num: number, args: any[]): string {

        if (_.isNull(num) || _.isUndefined(num))
            return '';

        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } 
} 