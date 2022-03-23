import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworldfront';
  response : String = "" ; 
  constructor ( private http: HttpClient) {
     
  }
  ngOnInit() {
   this.http.get("http://localhost:32405", {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }).subscribe( (responseData: any )  => 
   {
      this.response = responseData[0].name ; 
   } ) ;   
  }
}
