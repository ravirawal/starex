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
import { AboutComponent } from './about_list/about/about';
import { ChacellorComponent } from './about_list/chancellor/chancellor';
import { VchancellorComponent } from './about_list/vchancellor/vchancellor';
import { RegistrarComponent } from './about_list/registrar/registrar';
import { OSDComponent } from './about_list/osd/osd';
import { COEComponent } from './about_list/coe/coe';
import { RecognisationComponent } from './about_list/recognisation/recognisation';
import { DisclosureComponent } from './about_list/disclosure/disclosure';
import { MOUComponent } from './about_list/mou/mou';
import { UGCComponent } from './about_list/ugc/ugc';
import { PoliciesComponent } from './about_list/policies/policies';

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
   { path: 'about-starex', component: AboutComponent },
    { path: 'chancellor-message', component: ChacellorComponent },
  { path: 'vc-message', component: VchancellorComponent },
  { path: 'registrar-message', component: RegistrarComponent },
    { path: 'osd-message', component: OSDComponent },
  { path: 'coe', component: COEComponent },
  { path: 'approval-recognition', component: RecognisationComponent },
    { path: 'disclosure', component: DisclosureComponent },
  { path: 'starex-mou', component: MOUComponent },
  { path: 'ugc-inspection', component: UGCComponent },
    { path: 'annual-reports', component:  PoliciesComponent},
  { path: 'ombudsperson', component:  PoliciesComponent},
  { path: 'policies', component:  PoliciesComponent},
  { path: '**', redirectTo: 'home' }
];
