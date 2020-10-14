import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {User} from  '../user'
@Injectable({
  providedIn: 'root'
})
export class CrService {

  constructor(private http:HttpClient) {}
   public send(data):Observable<any>{
     return this.http.post("http://localhost:3000/data",data);
     
   }
   public recieve():Observable<any>{
     return this.http.get("http://localhost:3000/data");
   }
 public remove(id):Observable<any>{
   return this.http.delete<User[]>("http://localhost:3000/data/"+id);
 }
 public update(id,user:User):Observable<any>{
   return this.http.put("http://localhost:3000/data/"+id,user);
 }
 public reciev(id):Observable<any>{
  return this.http.get("http://localhost:3000/data/"+id);
}
}
