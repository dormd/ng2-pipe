import { Pipe, PipeTransform, Type } from '@angular/core'; //LOCALE_ID
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'bytesToMBs'
})

export class BytesToMBsPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        const megaBytes = +value / 1024 / 1024;
        
        const numberPipe = new DecimalPipe('en');
        const accuracy = args ? args[0] : '.2-2';
 
        return numberPipe.transform(megaBytes, accuracy);        
    } 
} 