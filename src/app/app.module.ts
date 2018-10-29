import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { TestInputComponent } from './test-input/test-input.component';
import { TestOutputComponent } from './test-output/test-output.component';

@NgModule({

    declarations: [

        AppComponent,

        TestInputComponent,

        TestOutputComponent

    ],

    imports: [

        BrowserModule

    ],

    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {
}
