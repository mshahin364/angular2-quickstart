import {Component} from 'angular2/core';
import {HelloWorldComponent} from './app.helloworld';


@Component({
    selector: 'my-app',
    template: [
        '<h1>My First Angular 2 App</h1>',
        '<h2>Get Started...</h2>',
        '<hello-world>Hello....</hello-world>'
    ].join(''),
directives: [HelloWorldComponent]
})
export class AppComponent { };

