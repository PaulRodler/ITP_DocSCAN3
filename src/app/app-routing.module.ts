import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { LoginComponent } from './login/login/login.component';
import { RegistComponent } from './login/regist/regist.component';
import { PersonalDataComponent } from './profile/personal-data/personal-data.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { StoredDocumentsComponent } from './profile/stored-documents/stored-documents.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'forgot', component: ForgotComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regist', component: RegistComponent },
  { path: 'personalData', component: PersonalDataComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'storedDocs', component: StoredDocumentsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
