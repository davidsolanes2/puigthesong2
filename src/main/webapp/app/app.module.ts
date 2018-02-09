import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { PuigthesongSharedModule, UserRouteAccessService } from './shared';
import { PuigthesongHomeModule } from './home/home.module';
import { PuigthesongAdminModule } from './admin/admin.module';
import { PuigthesongAccountModule } from './account/account.module';
import { PuigthesongEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import { PuigthesongprimengModule } from './primeng/primeng.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        PuigthesongSharedModule,
        PuigthesongHomeModule,
        PuigthesongAdminModule,
        PuigthesongAccountModule,
        PuigthesongEntityModule,
        PuigthesongprimengModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class PuigthesongAppModule {}
