import { NgModule }          from '@angular/core';

import { BytesToMBsPipe,
         CommaStylePipe,
         MapToArrayPipe,
         SafePipe, }         from './pipes';

const pipes = [
    MapToArrayPipe,
    CommaStylePipe,
    SafePipe
];

@NgModule({
    exports: [
        ...pipes
    ],
    declarations: [
      ...pipes
    ],
    imports: [],
    providers: []
})
export class GeneralPipesModule { }
