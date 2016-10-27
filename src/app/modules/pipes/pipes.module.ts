import { NgModule }          from '@angular/core';

import { A2ToCountryPipe,
         A2ToCapitalPipe,
         A2ToContinentPipe,
         A2ToAnthemPipe,
         A2ToAreaPipe,
         A2ToPopulationPipe,
         A2ToWikiLinkPipe,
         CommaStylePipe,
         A3ToA2Pipe,
         MapToArrayPipe,
         SafePipe, }         from './pipes';

const pipes = [
    A2ToCapitalPipe,
    A2ToContinentPipe,
    A2ToCountryPipe,
    A2ToAnthemPipe,
    A2ToAreaPipe,
    A2ToPopulationPipe,
    A2ToWikiLinkPipe,
    A3ToA2Pipe,
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
export class PipesModule { }
