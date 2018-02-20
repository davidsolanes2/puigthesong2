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

    images1: any[];

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
            source: 'http://josemercadofotografia.com/assets/img/eventos/fito-y-los-fitipaldis/Jose-Mercado-Fotografia-Concierto-Fito-y-los-Fitipaldis-01.jpg',
            alt: '',
            title: ''
        });
        this.images.push({
            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4U9WJTtHNEoX4xnTTRCt21T6BXb3UYWpt_0hcKoENyki7E_CU',
            alt: '',
            title: ''
        });
        this.images.push({
            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrF7dUGQkxv4wDGtmAILaPiL6R8yx_2KMaflTr20xrmAnUCO4',
            alt: '',
            title: ''
        });

        this.images1 = [];
        this.images1.push({
            source: 'https://sxmfeed.files.wordpress.com/2015/07/pentatonix.jpg?w=630',
            alt: '',
            title: ''
        });
        this.images1.push({
            source: 'data:image/jpeg;base64,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',
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
