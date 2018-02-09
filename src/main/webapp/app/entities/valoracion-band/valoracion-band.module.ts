import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PuigthesongSharedModule } from '../../shared';
import {
    ValoracionBandService,
    ValoracionBandPopupService,
    ValoracionBandComponent,
    ValoracionBandDetailComponent,
    ValoracionBandDialogComponent,
    ValoracionBandPopupComponent,
    ValoracionBandDeletePopupComponent,
    ValoracionBandDeleteDialogComponent,
    valoracionBandRoute,
    valoracionBandPopupRoute,
} from './';

const ENTITY_STATES = [
    ...valoracionBandRoute,
    ...valoracionBandPopupRoute,
];

@NgModule({
    imports: [
        PuigthesongSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ValoracionBandComponent,
        ValoracionBandDetailComponent,
        ValoracionBandDialogComponent,
        ValoracionBandDeleteDialogComponent,
        ValoracionBandPopupComponent,
        ValoracionBandDeletePopupComponent,
    ],
    entryComponents: [
        ValoracionBandComponent,
        ValoracionBandDialogComponent,
        ValoracionBandPopupComponent,
        ValoracionBandDeleteDialogComponent,
        ValoracionBandDeletePopupComponent,
    ],
    providers: [
        ValoracionBandService,
        ValoracionBandPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PuigthesongValoracionBandModule {}
