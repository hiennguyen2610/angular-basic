import { Component, Input } from '@angular/core';
import { JobListService } from '../job-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
})
export class AddNewComponent {
  @Input() placeholder: string | undefined;
  @Input() listIndex: number | undefined;
  input: string = "";

constructor(
  private jobListService: JobListService,
  private snackBar: MatSnackBar

) {}

  addNew() {
    // Nếu job ko có tên thì ko add
    if (this.input.trim()) {
      // Add List
      if (this.listIndex === undefined) {
        this.jobListService.addNewList(this.input);

        this.snackBar.open("New List was created successfully!", "Dismiss", {
          duration: 2000,
        });
      } 
      // Add job
      else {
        this.jobListService.addNewJob(this.listIndex, this.input);

        this.snackBar.open("New Job was created successfully!", "Dismiss", {
          duration: 2000,
        });
      }

      this.input = "";
    }
  }
}
