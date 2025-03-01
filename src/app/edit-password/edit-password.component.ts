import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../user';
import { UserService } from '../user-service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrl: './edit-password.component.css'
})
export class EditPasswordComponent {
  error?:string;
  oldPassword?:string;
  newPassword?:string;
  
  constructor(
      public dialogRef: MatDialogRef<EditPasswordComponent>,
      private userService: UserService
      
    ) {}
  
    onSubmit(): void {
      this.error = '';
      const user : User = JSON.parse(sessionStorage.getItem('currentUser')!);
      this.userService.changePassword(String(user.id),this.newPassword!, this.oldPassword!).subscribe(
        () => {
        
            this.dialogRef.close();
          
        }
      );
    }
  
    onClose(): void {
      this.dialogRef.close(); 
    }
}
