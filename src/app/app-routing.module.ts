import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizAppComponent } from './quiz-app/quiz-app.component'

const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
