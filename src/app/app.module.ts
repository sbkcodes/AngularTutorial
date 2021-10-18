import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { AfterviewparentComponent } from './afterviewparent/afterviewparent.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, ParentComponent, OnChangesParentComponent, OnChangesComponent, AfterviewparentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
{
}
