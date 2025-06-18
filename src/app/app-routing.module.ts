import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { PrivacyPolicyComponent } from '../app/privacy-policy/privacy-policy.component';
import { LeadGenerationComponent } from '../app/ads/lead-generation/lead-generation.component';
import { LeadSubmittedComponent } from '../app/ads/lead-submitted/lead-submitted.component';

const routes: Routes = [
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '', component: LeadGenerationComponent },
  { path: 'thank-you', component: LeadSubmittedComponent },
];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
