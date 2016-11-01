# Ng2Pipe
The rich angular 2 pipes mall.
The project use dataset of countries from [countries-data](https://github.com/dormd/countries-data)

Used by [ng2-countries](https://github.com/dormd/ng2-countries).

The project was generated with [angular-cli](https://github.com/angular/angular-cli).

## Demo app
You can see how fun to use this npm in our [Demo Application](https://dormd.github.io/ng2-pipe). 

## Table of Contents
* [Demo app](#demo-app)
* [Installation](#installation)
* [Countries Pipes](#countries-pipes)
  * Country Anthem - a2ToAnthem
  * Country name - a2ToCountry
    * Official name
    * Native name - Default
    * Native name - Specific language
  * Country Capital - a2ToCapital
  * Country Continent - a2ToContinent
  * Country Area - a2ToArea
    * Regular number
    * With Comma style pipe
  * Country Population - a2ToPopulation
    * Regular number
    * With Comma style pipe
  * Country Wiki Link - a2ToWikiLink
  * Country alpha 3 (iso_3166_1_alpha3) to alpha 2 - a3ToA2
* [Ganeral Pipes](#general-pipes)
  * Comma Style - commaStyle
  * Bytes to Mega-bytes - bytesToMBs
    * Regular use
    * With Comma style pipe (1)
    * With Comma style pipe (2)
* [How to use](#how-to-use)
* [Development server](#development-server)
* [Build](#build)
* [Deploying to Github Pages](#deploying-to-github-pages)

## Installation
```
npm install ng2-pipe
```

## Countries Pipes
The countries pipes work with iso_3166_1_alpha2 (a2) countries codes.

**The examples written for Israel (IL)**

### Country Anthem - a2ToAnthem
```javascript
IL | a2ToAnthem
```
Result: ```https://commons.wikimedia.org/wiki/File%3AHatikvah instrumental.ogg?embedplayer=yes```

### Country name - a2ToCountry
#### Default: common name
```javascript
IL | a2ToCountry
```
Result: ```Israel```

#### Official name
```javascript
IL | a2ToCountry: [ 'official' ]
```
Result: ```State of Israel```

#### Native name - Default
```javascript
IL | a2ToCountry: [ 'native' ]
```
Result: ```ישראל```

#### Native name - Specific language - by ISO 639-3 language code
```javascript
IL | a2ToCountry: [ 'native', 'ara' ]
```
Result: ```إسرائيل```

### Country Capital - a2ToCapital
```javascript
IL | a2ToCapital
```
Result: ```Jerusalem```

### Country Continent - a2ToContinent
```javascript
IL | a2ToContinent
```
Result: ```Asia```

### Country Area - a2ToArea
#### Regular number
```javascript
IL | a2ToArea
```
Result: ```20770```

#### With Comma style pipe
```javascript
IL | a2ToArea | commaStyle
```
Result: ```20,770```

### Country Population - a2ToPopulation
#### Regular number
```javascript
IL | a2ToPopulation
```
Result: ```8597260```

#### With Comma style pipe
```javascript
IL | a2ToPopulation | commaStyle
```
Result: ```8,597,260```

### Country Wiki Link - a2ToWikiLink
```javascript
IL | a2ToWikiLink
```
Result: ```https://wikipedia.org/wiki/Israel```

### Country alpha 3 (iso_3166_1_alpha3) to alpha 2 - a3ToA2
```javascript
ISR | a3ToA2
```
Result: ```IL```

## General pipes
### Comma Style - commaStyle
```javascript
123456789 | commaStyle
```
Result: ```123,456,789```

### Bytes to Mega-bytes - bytesToMBs
#### Regular use
```javascript
5389564 | bytesToMBs
```
Result: ```5.14```

#### With Comma style pipe (1)
```javascript
5389564 | bytesToMBs | commaStyle
```
Result: ```5.14```

#### With Comma style pipe (2)
```javascript
1024000000000 | bytesToMBs | commaStyle
```
Result: ```976,562.50```

## How to use
### Step1: NgModule file
```javascript
import { NgModule } from '@angular/core';
import { CountriesPipesModule, GeneralPipesModule } from 'ng2-pipe';

@NgModule({
    imports: [
        CountriesPipesModule,
        GeneralPipesModule
    ]
})
export class SharedModule { }
```

### Step2: Component view file
```html
Specific country name: {{ IL | a2ToCountry }}
Country name by parameter: {{ alpha2 | a2ToCountry }}
Country anthem: <a [href]='alpha2 | a2ToWikiLink'></a>
Specific country population: {{ IL | a2ToPopulation | commaStyle }}
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.
