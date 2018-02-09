import { Route } from '@angular/router';
import { UserRouteAccessService} from "../shared";
import { HomeComponent } from './home.component';

export const HomeRoute: Route = {
    path: '',
    component: HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    },
    canActivate : [UserRouteAccessService]
};
