import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PuigthesongSharedModule } from '../../shared';
import { PuigthesongAdminModule } from '../../admin/admin.module';
import {
    ValoracionArtistService,
    ValoracionArtistPopupService,
    ValoracionArtistComponent,
    ValoracionArtistDetailComponent,
    ValoracionArtistDialogComponent,
    ValoracionArtistPopupComponent,
    ValoracionArtistDeletePopupComponent,
    ValoracionArtistDeleteDialogComponent,
    valoracionArtistRoute,
    valoracionArtistPopupRoute,
} from './';

const ENTITY_STATES = [
    ...valoracionArtistRoute,
    ...valoracionArtistPopupRoute,
];

@NgModule({
    imports: [
        PuigthesongSharedModule,
        PuigthesongAdminModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ValoracionArtistComponent,
        ValoracionArtistDetailComponent,
        ValoracionArtistDialogComponent,
        ValoracionArtistDeleteDialogComponent,
        ValoracionArtistPopupComponent,
        ValoracionArtistDeletePopupComponent,
    ],
    entryComponents: [
        ValoracionArtistComponent,
        ValoracionArtistDialogComponent,
        ValoracionArtistPopupComponent,
        ValoracionArtistDeleteDialogComponent,
        ValoracionArtistDeletePopupComponent,
    ],
    providers: [
        ValoracionArtistService,
        ValoracionArtistPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PuigthesongValoracionArtistModule {}
