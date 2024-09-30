import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { PrivacyPolicyComponent } from '../app/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
const routerOptions: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
