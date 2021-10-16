import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './highlight.directive';
import { CustomattrdirectiveComponent } from './customattrdirective/customattrdirective.component';
import { StrudirectiveComponent } from './strudirective/strudirective.component';

@NgModule({
  declarations: [AppComponent, DirectiveComponent, HighlightDirective, CustomattrdirectiveComponent, StrudirectiveComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
