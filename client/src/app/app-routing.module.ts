import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomePageComponent } from './members/home-page/home-page.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginpageComponent},
  {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: HomePageComponent},
      {path: 'members/id', component: MemberDetailComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },
  {path: 'server-error', component: ServerErrorComponent  },
  {path: 'not-found', component: NotFoundComponent},
  {path: 'errors', component: TestErrorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
