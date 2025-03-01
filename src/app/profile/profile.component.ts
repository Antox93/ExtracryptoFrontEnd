import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditPasswordComponent } from '../edit-password/edit-password.component';
import { EditUsernameComponent } from '../edit-username/edit-username.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    
  }

  onEditPassword() {
    const dialogRef = this.dialog.open(EditPasswordComponent, {
          width: '400px',
        });
  }

  onEditUsername() {
    const dialogRef = this.dialog.open(EditUsernameComponent, {
      width: '400px',
    });
  }
 
}
