import { Component } from '@angular/core';
import {User} from './IUser'
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users: User[] =[]
  public sel:string="All"
  public sortBy:string=""
  constructor(private UsersData: DataService) { }

  ngOnInit(): void {
    this.UsersData.getUsers().subscribe(r=>{
      this.users=r.results
    }
    )
  }
  sort(e){
    this.sortBy=e.target.innerHTML
  }



}
