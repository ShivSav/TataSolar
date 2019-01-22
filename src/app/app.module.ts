import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MlsOrEntryComponent } from './mls-or-entry/mls-or-entry.component';
import { LoginComponent } from './login/login.component';
import { NavigationOnTopComponent } from './navigation-on-top/navigation-on-top.component';
const appRoutes: Routes = [{path: 'mlsOrEntry', component: MlsOrEntryComponent}];

@NgModule({
  declarations: [
    AppComponent,
    MlsOrEntryComponent,
    LoginComponent,
    NavigationOnTopComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
