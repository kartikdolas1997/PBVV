import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomizeComponent } from './components/customize/customize.component';
import { EportalComponent } from './components/eportal/eportal.component';
import { ResultsComponent } from './components/results/results.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule } from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { RedCustomizeComponent } from './components/red-customize/red-customize.component';
import { BlueCustomizeComponent } from './components/blue-customize/blue-customize.component';
import { GreenCustomizeComponent } from './components/green-customize/green-customize.component';
import { YellowCustomizeComponent } from './components/yellow-customize/yellow-customize.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import {MatSortModule} from '@angular/material/sort';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
// import { OtploginComponent } from './otplogin/otplogin.component';






@NgModule({
  declarations: [
    AppComponent,
    CustomizeComponent,
    EportalComponent,
    ResultsComponent,
    HomeComponent,
    RedCustomizeComponent,
    BlueCustomizeComponent,
    GreenCustomizeComponent,
    YellowCustomizeComponent,
    SidenavComponent,
    ChangePasswordComponent,
    // OtploginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatSortModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
