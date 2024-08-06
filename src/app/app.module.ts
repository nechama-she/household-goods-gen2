import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LongDistanceMovingComponent } from './homepage/long-distance-moving/long-distance-moving.component';
import { LongDistanceMovingPageComponent } from './long-distance-moving-page/long-distance-moving-page.component';
import { QuoteComponent } from './homepage/quote/quote.component';
import { ResidentialMoversComponent } from './homepage/residential-movers/residential-movers.component';
import { ResidentialMoversPageComponent } from './residential-movers-page/residential-movers-page.component';
import { InterstateMoversAreaPageComponent } from './interstate-movers-area-page/interstate-movers-area-page.component';
import { ThirdPartyReviewsComponent } from './homepage/third-party-reviews/third-party-reviews.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ArticleQuoteComponent } from './article/article-quote/article-quote.component';
import { ArticlesComponent } from './homepage/articles/articles.component';
import { ArticlePageComponent } from './article/article-page/article-page.component';
import { ArticleVideoComponent } from './article/article-video/article-video.component';
import { FAQMainPageComponent } from './FAQ/faq-main-page/faq-main-page.component';
import { FAQSubjectComponent } from './FAQ/faq-subject/faq-subject.component';
import { FAQQuestionComponent } from './FAQ/faq-question/faq-question.component';
import { FAQHomepageComponent } from './homepage/faq-homepage/faq-homepage.component';
import { FaqBlogPostComponent } from './FAQ/faq-blog-post/faq-blog-post.component';
import { FaqBlogComponent } from './FAQ/faq-blog/faq-blog.component';
import { FaqBlogCardComponent } from './FAQ/faq-blog-card/faq-blog-card.component';
import { SocalHomeComponent } from './movers/socal/socal-home/socal-home.component';
import { DmvHomeComponent } from './movers/dmv/dmv-home/dmv-home.component';
import { MidwestHomeComponent } from './movers/midwest/midwest-home/midwest-home.component';
import { ChicagoHomeComponent } from './movers/chicago/chicago-home/chicago-home.component';
import { AreasComponent } from './homepage/areas/areas.component';
import { PackingMaterialsTableComponent } from './packing-materials/packing-materials-table/packing-materials-table.component';
import { ArticleTableComponent } from './article/article-table/article-table.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { OrderCallbackModalComponent } from './forms/order-callback-modal/order-callback-modal.component';
import { OrderCallbackFormComponent } from './forms/order-callback-form/order-callback-form.component';
import { OrderCallbackFormThanksComponent } from './forms/order-callback-form-thanks/order-callback-form-thanks.component';
import { QuoteModalComponent } from './forms/quote/quote-modal/quote-modal.component';
import { MenuComponent } from './homepage/menu/menu.component';
import { MovingServicesMainComponent } from './moving-services/moving-services-main/moving-services-main.component';
import { DirectDeliveryComponent } from './homepage/direct-delivery/direct-delivery.component';
import { OrderSummaryComponent } from './products/order-summary/order-summary.component';
import { DirectDeliveryPageComponent } from './products/direct-delivery-page/direct-delivery-page.component';
import { DirectDeliveryPageSmallScreenComponent } from './products/direct-delivery-page-small-screen/direct-delivery-page-small-screen.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LongDistanceMovingComponent,
    LongDistanceMovingPageComponent,
    QuoteComponent,
    ResidentialMoversComponent,
    ResidentialMoversPageComponent,
    InterstateMoversAreaPageComponent,
    ThirdPartyReviewsComponent,
    ArticleQuoteComponent,
    ArticlesComponent,
    ArticlePageComponent,
    ArticleVideoComponent,
    FAQMainPageComponent,
    FAQSubjectComponent,
    FAQQuestionComponent,
    FAQHomepageComponent,
    FaqBlogPostComponent,
    FaqBlogComponent,
    FaqBlogCardComponent,
    SocalHomeComponent,
    DmvHomeComponent,
    MidwestHomeComponent,
    ChicagoHomeComponent,
    AreasComponent,
    PackingMaterialsTableComponent,
    ArticleTableComponent,
    PrivacyPolicyComponent,
    OrderCallbackModalComponent,
    OrderCallbackFormComponent,
    OrderCallbackFormThanksComponent,
    QuoteModalComponent,
    MenuComponent,
    MovingServicesMainComponent,
    DirectDeliveryComponent,
    OrderSummaryComponent,
    DirectDeliveryPageComponent,
    DirectDeliveryPageSmallScreenComponent,
    CollapsibleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgxPageScrollModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  exports: [DirectDeliveryComponent],
})
export class AppModule {}
