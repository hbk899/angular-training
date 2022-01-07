import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { UsersComponent } from './views/users/users.component';
import { UserCardComponent } from './views/user-card/user-card.component';
import { YoutubeComponent } from './views/youtube/youtube.component';
import { HeaderComponent } from './views/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './views/todo/todo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserCardComponent,
    YoutubeComponent,
    HeaderComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
