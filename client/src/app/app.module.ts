import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MovieApiEffects } from './entities/movies-api.effects';

import { AppComponent} from './app.component';
import { AppService} from './app.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StripesComponent } from './stripes/stripes.component';
import { StripesOverlayComponent } from './stripes-overlay/stripes-overlay.component';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

// STORE
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

// MATERIAL
import {MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessagesComponent,
    DashboardComponent,
    StripesComponent,
    StripesOverlayComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([MovieApiEffects]),
    StoreRouterConnectingModule.forRoot()
    ],

  exports: [ MatCheckboxModule, MatMenuModule,MatIconModule ],

  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
