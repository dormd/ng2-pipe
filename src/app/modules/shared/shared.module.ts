import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
         
import { CountriesData,
         AnthemsData,
         LanguagesData,
         COUNTRIES_DATA,
         LANGUAGES_DATA,
         ANTHEMS_DATA }     from './models';

const myExports = [];

const modules = [
    BrowserModule,
    FormsModule,
    HttpModule
];

const providers = [
    { provide: COUNTRIES_DATA, useValue: CountriesData },
    { provide: LANGUAGES_DATA, useValue: LanguagesData },
    { provide: ANTHEMS_DATA, useValue: AnthemsData },
];

const components = [];

const directives = [];

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules,
        ...myExports
    ],
    declarations: [
        ...components,
        ...directives
    ],
    providers: [
        ...providers
    ],
})
export class SharedModule { }
