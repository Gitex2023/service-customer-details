import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  constructor(private httpService: HttpService){
    this.getCustomerDetails()
  }
  userDetails:any = {}
  summary: boolean = false
  onGoingCall : boolean = false;
  ngOnInit(){

  }

  public getCustomerDetails(){
    let payload = {
      "operation":"getProfile",
      "profileName": "alexsmithservices"
      }
    this.httpService.apiCall('post','/public_getProfile_MongoDB_Services', payload)?.subscribe(
      data=>{
        console.log('User Details  :', data)
        this.userDetails = data;
      },error=>{
        console.log('Error', error)
      }
    )
  }

  callToCustomer(userPhone: string){
    this.onGoingCall = true;
    window.open(`tel:${userPhone}`);
      // Simulate call duration and stop animation after a certain time
      setTimeout(() => {
        this.onGoingCall = false;
      }, 10000); // Adjust the time as needed (e.g., 10000 ms = 10 seconds)
  }

}
