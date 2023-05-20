import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CallsModule } from './modules/calls/calls.module';
import { ChatModule } from './modules/chat/chat.module';
import { StatusModule } from './modules/status/status.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ChatModule, CallsModule, StatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
