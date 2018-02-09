import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PuigthesongCountryModule } from './country/country.module';
import { PuigthesongGenreModule } from './genre/genre.module';
import { PuigthesongAlbumModule } from './album/album.module';
import { PuigthesongSongModule } from './song/song.module';
import { PuigthesongArtistModule } from './artist/artist.module';
import { PuigthesongBandModule } from './band/band.module';
import { PuigthesongSocialModule } from './social/social.module';
import { PuigthesongInstrumentModule } from './instrument/instrument.module';
import { PuigthesongLabelModule } from './label/label.module';
import { PuigthesongUserExtModule } from './user-ext/user-ext.module';
import { PuigthesongValoracionAlbumModule } from './valoracion-album/valoracion-album.module';
import { PuigthesongValoracionSongModule } from './valoracion-song/valoracion-song.module';
import { PuigthesongValoracionArtistModule } from './valoracion-artist/valoracion-artist.module';
import { PuigthesongValoracionBandModule } from './valoracion-band/valoracion-band.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        PuigthesongCountryModule,
        PuigthesongGenreModule,
        PuigthesongAlbumModule,
        PuigthesongSongModule,
        PuigthesongArtistModule,
        PuigthesongBandModule,
        PuigthesongSocialModule,
        PuigthesongInstrumentModule,
        PuigthesongLabelModule,
        PuigthesongUserExtModule,
        PuigthesongValoracionAlbumModule,
        PuigthesongValoracionSongModule,
        PuigthesongValoracionArtistModule,
        PuigthesongValoracionBandModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PuigthesongEntityModule {}
