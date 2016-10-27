import { NgModule }          from '@angular/core';

import { SharedModule,
         PipesModule }       from './modules';

import { AppComponent }      from './app.component';

const modules = [
    SharedModule,
    PipesModule
];

const components = [
    AppComponent
];

const directives = [];

const pipes = [];

const providers = [];

@NgModule({
    exports: [
        PipesModule
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
