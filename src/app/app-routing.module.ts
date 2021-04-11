import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ForgotComponent } from './login/forgot/forgot.component';
import { LoginComponent } from './login/login/login.component';
import { RegistComponent } from './login/regist/regist.component';
import { PersonalDataComponent } from './profile/personal-data/personal-data.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { SharedDocumentsComponent } from './profile/shared-documents/shared-documents.component';
import { FileListComponent } from './profile/stored-documents/file-list/file-list.component';
import { FileViewComponent } from './profile/stored-documents/file-view/file-view.component';
import { StoredDocumentsComponent } from './profile/stored-documents/stored-documents.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'forgot', component: ForgotComponent },
  { path: 'login', component: LoginComponent },
  { path: 'regist', component: RegistComponent },
  { path: 'personalData', component: PersonalDataComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'sharedDocs', component: SharedDocumentsComponent },
  { path: 'storedDocs', component: StoredDocumentsComponent },
  { path: 'storedDocs/files/:id', component: FileListComponent }, // category ID
  { path: 'storedDocs/files/view/:id', component: FileViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
