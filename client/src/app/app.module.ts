import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SocketIoModule} from 'ngx-socket-io';
import {SecToMinPipe} from './sec-to-min.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SecToMinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot({
      url: 'http://localhost:3000',
      options: {},
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
