
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    ChildComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
