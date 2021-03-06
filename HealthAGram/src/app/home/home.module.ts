import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NotSignedInComponent } from './not-signed-in/not-signed-in.component';
import { SignedInComponent } from './signed-in/signed-in.component';
import { EditProfileComponent } from './signed-in/edit-profile/edit-profile.component';
import { ExerciseFollowListComponent } from './signed-in/exercise-follow-list/exercise-follow-list.component';
import { ExerciseDescriptionComponent } from './signed-in/exercise-description/exercise-description.component'
import { PipesModule } from '../pipes/pipes.module';
import { CreateGymComponent } from './signed-in/create-gym/create-gym.component';
import { EditExerciseComponent } from './signed-in/edit-exercise/edit-exercise.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, NotSignedInComponent, SignedInComponent, EditProfileComponent, ExerciseFollowListComponent, ExerciseDescriptionComponent, CreateGymComponent, EditExerciseComponent],
  entryComponents: [EditProfileComponent, ExerciseFollowListComponent, ExerciseDescriptionComponent, CreateGymComponent, EditExerciseComponent]
})
export class HomePageModule {}
