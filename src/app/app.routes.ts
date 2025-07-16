import { Routes } from '@angular/router';
import { AgricultureComponent } from './school_list/agriculture/agriculture';
import { HomeComponent } from './home-content/home';
import { LawComponent } from './school_list/law/law';
import { PharmacyComponent } from './school_list/pharmacy/pharmacy';
import { PhysicalScienceComponent } from './school_list/physical-science/physical-science';
import { CSEComponent } from './school_list/cse/cse';
import { CommerceManagementComponent } from './school_list/commerce-management/commerce-management';
import { HotelManagementComponent } from './school_list/hotel-management/hotel-management';
import { HumanitiesComponent } from './school_list/humanities/humanities';
import { lifeScienceComponent } from './school_list/life-science/life-science';
import { ENTComponent } from './school_list/engineering/engg';
import { VocationalComponent } from './school_list/vocational/vocational';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'agriculture', component: AgricultureComponent },
  { path: 'commerce&management', component: CommerceManagementComponent },
  { path: 'computerscience&technology', component: CSEComponent },
   { path: 'engineering&technology', component: ENTComponent },
  { path: 'hotel-management', component: HotelManagementComponent },
  { path: 'humanities', component: HumanitiesComponent },
  { path: 'law', component: LawComponent },
  { path: 'life-science', component: lifeScienceComponent },
  { path: 'pharmaceutical-science', component: PharmacyComponent , title: 'pharmaceutical-science'},
  { path: 'physical-science', component: PhysicalScienceComponent },
  { path: 'vocational-courses', component: VocationalComponent },
  { path: '**', redirectTo: 'home' }
];
