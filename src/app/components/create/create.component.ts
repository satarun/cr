import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CrService} from '../../services/cr.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
forme:FormGroup;
data:any;
  constructor(private fb:FormBuilder,private service:CrService,public router:Router) {
this.forme=this.fb.group({
 name:new FormControl("",Validators.required),
 number:new FormControl("",Validators.required),
 address:new FormControl("",Validators.required)
})
  }
   

  ngOnInit(): void {
  }
sub(){
  console.log(this.forme.value);
  debugger;
  this.service.send(this.forme.value).subscribe(res=>{
    this.data=res;
    console.log("success");
    this.router.navigateByUrl('/View');
  })
}
}
