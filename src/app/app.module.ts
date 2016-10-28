import { NgModule }          from '@angular/core';

import { SharedModule,
         GeneralPipesModule,
         CountriesPipesModule }       from './modules';

import { AppComponent }      from './app.component';

const modules = [
    SharedModule,
    GeneralPipesModule,
    CountriesPipesModule
];

const components = [
    AppComponent
];

const directives = [];

const pipes = [];

const providers = [];

@NgModule({
    exports: [
        GeneralPipesModule,
        CountriesPipesModule
    ],
    declarations: [
      ...components,
      ...directives,
      ...pipes
    ],
    imports: [
      ...modules
    ],
    providers: [
      ...providers
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
