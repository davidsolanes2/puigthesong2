import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';
import { Message} from "primeng/components/common/api";


@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;

    activeIndex = 0;
    msgs: Message[] = [];

    visibleSidebar1;

    accordionActiveIndexes: number[] = [0, 2];

    onTabClose(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab Closed', detail: 'Index: ' + event.index});
    }

    onTabOpen(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Tab Expanded', detail: 'Index: ' + event.index});
    }

    images: any[];

    constructor(private principal: Principal,
                private loginModalService: LoginModalService,
                private eventManager: JhiEventManager) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.images = [];

        this.images.push({
            source: 'https://media.gettyimages.com/photos/photo-of-mark-knopfler-and-dire-straits-and-live-aid-and-jack-sonni-picture-id86104351?s=612x612',
            alt: '',
            title: ''
        });
        this.images.push({
            source: '/content/primeng/assets/data/images/cars/Polo.png',
            alt: '',
            title: ''
        });

    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    onImageClicked($event: any) {
        window.open($event.image.source, '_blank');
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;

    }

}
