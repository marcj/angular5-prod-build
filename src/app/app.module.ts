/*
 * Copyright (c) by Marc J. Schmidt <marc@marcjschmidt> - all rights reserved.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import AppComponent from "./AppComponent";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
