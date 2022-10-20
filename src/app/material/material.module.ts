import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength'; 

const MaterialComponents = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatButtonModule,
];


@NgModule({
  imports: [...MaterialComponents, MatPasswordStrengthModule.forRoot()],
  exports: [MaterialComponents, MatPasswordStrengthModule]
})
export class MaterialModule {  }
