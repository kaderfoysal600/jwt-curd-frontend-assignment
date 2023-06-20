import { Component } from '@angular/core';
import { ApicallService } from '../shared/apicall.service';
import { ReloadService } from '../service/reload.service';
import { MatDialog } from '@angular/material/dialog';
import { WhyControllerComponent } from '../dialog-view/why-controller/why-controller.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.scss'],
})
export class AlluserComponent {
  public dataUser: any = [];
  constructor(
    public apicallService: ApicallService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getAllUser();
  }
  private getAllUser() {
    this.apicallService.allUser().subscribe({
      next: (res) => {
        console.log(res);
        this.dataUser = res;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  public deleteUser(id: string) {
    this.apicallService.deleteUserById(id).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          location.reload();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public openProjectControllerDialog(data?: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      maxWidth: '600px',
      width: '95%',
      data: data,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult && dialogResult.data) {
        if (data) {
          this.updateProjectById(data._id, dialogResult.data);
        } else {
          // this.addProject(dialogResult.data);
        }
      }
    });
  }

  public updateProjectById(id: string, data: any) {
    this.apicallService.updateUserById(id, data).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          location.reload();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
