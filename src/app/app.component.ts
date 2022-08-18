import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'XperTuto.com : FormArray Example';

  tagsForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initializeForm();
    this.addTags();
  }

  initializeForm(): void {
    this.tagsForm = this.formBuilder.group({
      webSite: '',
      tags: this.formBuilder.array([]),
    });
  }

  get tags(): FormArray {
    return this.tagsForm.get("tags") as FormArray
  }

  newTag(): FormGroup {
    return this.formBuilder.group({
      technologie: '',
      nb_tutorials: '',
    })
  }

  addTags(): void {
    this.tags.push(this.newTag());
  }

  removeTag(tagIndex: number): void {
    this.tags.removeAt(tagIndex);
  }

  submit() {
    console.log(this.tagsForm.value);
  }
}
