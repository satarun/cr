import { Component, OnInit } from '@angular/core';
import { CrService } from 'src/app/services/cr.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  searchString="";
result:any;
data;
search="Search Here With Name "
user:User[];
todayDate:Date=new Date();
  constructor(private service:CrService) { }

  ngOnInit(): void {
    this.service.recieve().subscribe(res=>{
      this.result=res;
    })
  }
remove(data){
  alert(data);
  console.log("Hi");
  this.service.remove(data).subscribe(res=>{
    debugger;
    this.result=res;
  })
}

}
