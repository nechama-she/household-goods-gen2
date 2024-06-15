import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LongDistanceMovingPageComponent } from './long-distance-moving-page/long-distance-moving-page.component';
import { ResidentialMoversPageComponent } from './residential-movers-page/residential-movers-page.component';
import { InterstateMoversAreaPageComponent } from './interstate-movers-area-page/interstate-movers-area-page.component';
import { ArticlePageComponent } from './article/article-page/article-page.component';
import { ArticleVideoComponent } from './article/article-video/article-video.component';

import { FaqBlogComponent } from './FAQ/faq-blog/faq-blog.component';
import { FAQMainPageComponent } from './FAQ/faq-main-page/faq-main-page.component';
import { FaqBlogPostComponent } from './FAQ/faq-blog-post/faq-blog-post.component';

import { QuoteComponent } from './homepage/quote/quote.component';
import { SocalHomeComponent } from './movers/socal/socal-home/socal-home.component';
import { DmvHomeComponent } from './movers/dmv/dmv-home/dmv-home.component';
import { ChicagoHomeComponent } from './movers/chicago/chicago-home/chicago-home.component';
import { PackingMaterialsTableComponent } from './packing-materials/packing-materials-table/packing-materials-table.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MovingServicesMainComponent } from './moving-services/moving-services-main/moving-services-main.component';

const routes: Routes = [
  { path: '', component: QuoteComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  { path: 'movers/faq', component: FAQMainPageComponent },
  { path: 'residential-movers/faq', component: FAQMainPageComponent },
  { path: 'southern-california-mover', component: SocalHomeComponent },
  {
    path: 'best-moving-company-in-washington-dc-area',
    component: DmvHomeComponent,
  },
  { path: 'chicago-and-suburbs-mover', component: ChicagoHomeComponent },
  {
    path: 'essential-moving-supplies-checklist-for-an-easy-move',
    component: PackingMaterialsTableComponent,
  },
  {
    path: 'moving-services',
    component: MovingServicesMainComponent,
  },
  {
    path: 'local-movers-rockville-maryland',
    component: ArticlePageComponent,
  },
  {
    path: 'short-distance-movers-rockville-maryland',
    component: ArticlePageComponent,
  },
  {
    path: 'apartment-movers-rockville-maryland',
    component: ArticlePageComponent,
  },

  {
    path: 'office-movers-rockville-maryland',
    component: ArticlePageComponent,
  },
  {
    path: 'appliance-movers-rockville-maryland',
    component: ArticlePageComponent,
  },
  {
    path: 'piano-movers-rockville-maryland',
    component: ArticlePageComponent,
  },
  {
    path: 'same-day-movers-rockville-maryland',
    component: ArticlePageComponent,
  },
  {
    path: 'junk-removal-rockville-maryland',
    component: ArticlePageComponent,
  },
  {
    path: 'blog',
    component: FaqBlogComponent,
  },
  { path: 'blog/:question', component: FaqBlogPostComponent },
  {
    path: 'household-moving-company/how-to-find-an-interstate-mover',
    component: ArticlePageComponent,
  },
  {
    path: 'household-moving-company/how-to-find-an-interstate-mover/video',
    component: ArticleVideoComponent,
  },

  {
    path: 'household-moving-company/long-distance-moving',
    component: LongDistanceMovingPageComponent,
  },
  {
    path: 'household-moving-company/residential-movers',
    component: ResidentialMoversPageComponent,
  },
  {
    path: 'household-moving-company/interstate-movers/:area',
    component: InterstateMoversAreaPageComponent,
  },
  {
    path: 'household-moving-company/interstate-movers/:area/:state',
    component: InterstateMoversAreaPageComponent,
  },
  {
    path: 'household-moving-company/residential-movers/interstate-movers/:area',
    component: InterstateMoversAreaPageComponent,
  },
  {
    path: 'household-moving-company/residential-movers/interstate-movers/:area/:state',
    component: InterstateMoversAreaPageComponent,
  },
  {
    path: 'household-moving-company/long-distance-moving/interstate-movers/:area',
    component: InterstateMoversAreaPageComponent,
  },
  {
    path: 'household-moving-company/long-distance-moving/interstate-movers/:area/:state',
    component: InterstateMoversAreaPageComponent,
  },
];
const routerOptions: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
