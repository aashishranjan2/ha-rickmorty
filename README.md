# HaRickmorty

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Application(Component) Structure
AppComponent
|
 --> CharactersComponent
|
 --> FooterComponent

Service
|
 --> RickMortyService

## Application Features
    It's an application that displays the list of characters along with its details. It makes a rest api call to rickandmorty api
    and populates the details. Previous and Next buttons are used to load another subsequest set character details by making another api     call.
![image](https://user-images.githubusercontent.com/22346376/61946746-b0aa6d80-afa3-11e9-8b6d-420591b73288.png)
