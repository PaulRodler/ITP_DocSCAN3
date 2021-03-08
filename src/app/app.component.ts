import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginService } from './login/login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DocSCAN';
  constructor(private loginService: LoginService) { }


  ngOnInit(): void {
    console.log("getcsrf");
    this.loginService.getcsrf().subscribe(data =>{
      console.log(data);
      environment.csrfToken = data.data;
    });
  };
}

