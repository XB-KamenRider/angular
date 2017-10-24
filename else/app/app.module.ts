
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    ChildComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
