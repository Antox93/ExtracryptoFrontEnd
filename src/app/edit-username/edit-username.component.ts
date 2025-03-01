import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../user';
import { UserService } from '../user-service';

@Component({
  selector: 'app-edit-username',
  templateUrl: './edit-username.component.html',
  styleUrl: './edit-username.component.css'
})
export class EditUsernameComponent {
error?:string;
  password?:string;
  newUsername?:string;
  
  constructor(
      public dialogRef: MatDialogRef<EditUsernameComponent>,
      private userService: UserService
      
    ) {}
  
    onSubmit(): void {
      this.error = '';
      const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
      this.userService.changeUsername(String(user.id),this.newUsername!, this.password!).subscribe(
        () => {
        
            this.dialogRef.close();
          
        }
      );
    }
  
    onClose(): void {
      this.dialogRef.close(); 
    }
}

