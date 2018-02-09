import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PuigthesongSharedModule } from '../../shared';
import { PuigthesongAdminModule } from '../../admin/admin.module';
import {
    ValoracionSongService,
    ValoracionSongPopupService,
    ValoracionSongComponent,
    ValoracionSongDetailComponent,
    ValoracionSongDialogComponent,
    ValoracionSongPopupComponent,
    ValoracionSongDeletePopupComponent,
    ValoracionSongDeleteDialogComponent,
    valoracionSongRoute,
    valoracionSongPopupRoute,
} from './';

const ENTITY_STATES = [
    ...valoracionSongRoute,
    ...valoracionSongPopupRoute,
];

@NgModule({
    imports: [
        PuigthesongSharedModule,
        PuigthesongAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ValoracionSongComponent,
        ValoracionSongDetailComponent,
        ValoracionSongDialogComponent,
        ValoracionSongDeleteDialogComponent,
        ValoracionSongPopupComponent,
        ValoracionSongDeletePopupComponent,
    ],
    entryComponents: [
        ValoracionSongComponent,
        ValoracionSongDialogComponent,
        ValoracionSongPopupComponent,
        ValoracionSongDeleteDialogComponent,
        ValoracionSongDeletePopupComponent,
    ],
    providers: [
        ValoracionSongService,
        ValoracionSongPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PuigthesongValoracionSongModule {}
