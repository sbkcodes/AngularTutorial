import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemopipeComponent } from './components/demopipe/demopipe.component';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';

@NgModule({
  declarations: [AppComponent, DemopipeComponent, ExponentialStrengthPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
