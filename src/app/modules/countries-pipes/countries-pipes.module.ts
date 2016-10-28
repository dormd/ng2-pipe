import { NgModule }           from '@angular/core';
import { SharedModule, 
         GeneralPipesModule } from '../';

import { A2ToCountryPipe,
         A2ToCapitalPipe,
         A2ToContinentPipe,
         A2ToAnthemPipe,
         A2ToAreaPipe,
         A2ToPopulationPipe,
         A2ToWikiLinkPipe,
         A3ToA2Pipe, }       from './pipes';

const pipes = [
    A2ToCapitalPipe,
    A2ToContinentPipe,
    A2ToCountryPipe,
    A2ToAnthemPipe,
    A2ToAreaPipe,
    A2ToPopulationPipe,
    A2ToWikiLinkPipe,
    A3ToA2Pipe,
];

const modules = [
    SharedModule, 
    GeneralPipesModule
];

@NgModule({
    exports: [
        ...pipes
    ],
    declarations: [
      ...pipes
    ],
    imports: [
        ...modules
    ],
    providers: []
})
export class CountriesPipesModule { }
