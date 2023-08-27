import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { LogInComponent } from './auth/components/log-in/log-in.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AfterRegisterComponent } from './components/after-register/after-register.component';
import { BeforeRegisterComponent } from './components/before-register/before-register.component';
import { MaterialsSpecializationComponent } from './components/materials-specialization/materials-specialization.component';
import { CoursesQuestionsComponent } from './components/courses-questions/courses-questions.component';
import { StartTaskComponent } from './components/start-task/start-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LogInComponent },
  { path: 'afterregister', component: AfterRegisterComponent },
  { path: 'beforeregister', component: BeforeRegisterComponent },
  { path: 'beforeregister', component: BeforeRegisterComponent },
  { path: 'materials', component: MaterialsSpecializationComponent },
  { path: 'questions', component: CoursesQuestionsComponent },
  { path: 'starttask', component: StartTaskComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
