import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';

import { PuigthesongSharedModule } from '../shared';
import {ButtonModule} from 'primeng/components/button/button';
import {AccordionModule, GrowlModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import {SidebarModule} from 'primeng/components/sidebar/sidebar';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import { HomeRoute, HomeComponent } from './';
import {FormsModule} from "@angular/forms";

const Home_Route = [
    HomeRoute
];

@NgModule({
    imports: [
        PuigthesongSharedModule,
        ButtonModule,
        SidebarModule,
        FormsModule,
        AccordionModule,
        CheckboxModule,
        SelectButtonModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        GalleriaModule,
        WizardModule,
        RouterModule.forRoot( Home_Route , { useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PuigthesongHomeModule {}
