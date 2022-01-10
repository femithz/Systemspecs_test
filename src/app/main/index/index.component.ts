import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  kangarooForm: FormGroup;
  result: any;

  constructor( 
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) { 
    this.kangarooForm = this.fb.group({
      x1: ['', Validators.required],
      v1: ['', Validators.required],
      x2: ['', Validators.required],
      v2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // Function to submit form inputs and check for the same location
  submit() {
       //  Initialize the test history
       let test_history = JSON.parse(localStorage.getItem("test_history")) || [] ;
      // check if the second kangaroo has an higher speed rate than the first kangaroo
      if(this.kangarooForm.value?.v1 < this.kangarooForm.value?.v2) { 
        this.result = 'NO';
        // setion to save the two start and speed rate of the kangaroo's
        let payload = {
          x1: this.kangarooForm.value?.x1,
          v1: this.kangarooForm.value?.v1,
          x2: this.kangarooForm.value?.x2,
          v2: this.kangarooForm.value?.v2,
          result: this.result
        }
        // Method to push the test parameters and the result to an array
        test_history.push(payload);
        localStorage.setItem("test_history", JSON.stringify(test_history));
        this.toastr.info("The two kangaroo is not at same location", "Info");
        this.kangarooForm.reset();
      } else if((this.kangarooForm.value?.x2 - this.kangarooForm.value?.x1) % (this.kangarooForm.value?.v1 - this.kangarooForm.value?.v2) === 0) {
         this.result = 'YES'; 
         // setion to save the two start and speed rate of the kangaroo's
         let payload = {
            x1: this.kangarooForm.value?.x1,
            v1: this.kangarooForm.value?.v1,
            x2: this.kangarooForm.value?.x2,
            v2: this.kangarooForm.value?.v2,
            result: this.result
         }
        // Method to push the test parameters and the result to an array
        test_history.push(payload);
        localStorage.setItem("test_history", JSON.stringify(test_history));
        this.toastr.success("The two kangaroo is at same location", "Success");
        this.kangarooForm.reset();
      } else {
        // If any of the test parameters didn't pass the above checks or conditions then --
        this.result = 'NO';
        // setion to save the two start and speed rate of the kangaroo's
        let payload = {
          x1: this.kangarooForm.value?.x1,
          v1: this.kangarooForm.value?.v1,
          x2: this.kangarooForm.value?.x2,
          v2: this.kangarooForm.value?.v2,
          result: this.result
        }
        // Method to push the test parameters and the result to an array
        test_history.push(payload);
        localStorage.setItem("test_history", JSON.stringify(test_history));
        this.toastr.info("The two kangaroo is not at same location", "Info");
        this.kangarooForm.reset();
      };
  }
  // Navigate to source code
  navigateToSource() {
    window.location.href = "https://github.com/femithz/Systemspecs_test";
  } 
  // view parameters history
  viewHistory() {
    this.router.navigate(['/history']);
  }
}
