import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import {DataService} from '../../data.service';
//import {HttpService} from '../../http.service';
import { LoginInputs } from './login-inputs.models';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg = " ";
  inputs: LoginInputs = {email: '', pwd: ''};

  constructor(private router: Router, private loginService: LoginService, public data: DataService) { }

  ngOnInit(): void {
  }
  
  login(): void {
    console.log(environment.csrfToken);

    this.loginService.login(this.inputs).subscribe(data => {
      if(data.code === 202){
        localStorage.setItem('docScan_authToken', data.data.token);
        environment.authToken = data.data.token;
        this.data.authToken = data.data.token;
        this.data.loggedIn = true;

        //localStorage.setItem('auth_token', data.data.token);
        console.log(this.data);
        this.router.navigate(['/index'])
      } else {
        this.errorMsg = data.message;
        console.error(data);
      } 
    });
  }
  logout(): void{
    console.log("logout");
    //localStorage.setItem('user_authenticated', 'false');
    this.loginService.logout().subscribe(data=>{
      localStorage.removeItem('docScan_authToken');
      environment.authToken = "";
      environment.csrfToken = "";
      console.log(data);
      location.reload();
    });
    
  }
  

}

