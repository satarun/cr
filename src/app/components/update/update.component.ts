import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrService } from 'src/app/services/cr.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
form:FormGroup;
products:any;
 public key;
data;


  constructor(private fb:FormBuilder,private service:CrService,private active:ActivatedRoute,private router:Router) {
    this.form= fb.group({
      name:new FormControl(),
      number:new FormControl(),
      address:new FormControl()
    })
   }

  ngOnInit(): void {
    this.active.params.subscribe(res=>{
      this.data=res.id;
    })
    this.service.recieve().subscribe(res=>{
     this.key=res[this.data]
      //this.isUpdated = true;

       /* this.products = res;
        for (var i = 0; i < this.products.length; i++) {
          if (parseInt(this.products[i].id) === this.data) {
            //this.exist = true;
            this.key = this.products[i];
            break;
          } else {
            //this.exist = false;
          }
        }*/
        })     
    
  }

  update(todo){
    console.log(todo,"hello");
    debugger;
      this.service.update(this.data,todo).subscribe(res=>{
              console.log(res,"updated");
             
     })
     this.router.navigateByUrl('/View');
  }
}
