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
import { LeadGenerationComponent } from './ads/lead-generation/lead-generation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsAndConditionsComponent } from './ads/terms-and-conditions/terms-and-conditions.component';
@NgModule({
  declarations: [AppComponent, LeadGenerationComponent, TermsAndConditionsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
