import { LightningElement } from 'lwc';
import getCustomer from '@salesforce/apex/SearchCustomer.getcustomerDetails'

export default class Searchcustomer extends LightningElement {
    customerName;
    customerEmail;
    

    handleOnChangeCustomerName(event){
        this.customerName=event.target.value;
        //alert(this.customerName)
    }
   

    clearData(){
        this.customerName = '';
        this.dispatchEvent(new CustomEvent('clearcustomer',null))
    }

    initiateSearch(){
        
        getCustomer({customerNameOrEmail:this.customerName}) // Promise call Internally
        
        .then(result=>{this.dispatchEvent(new CustomEvent('getcustomerdetails',{detail:result}))
    })
        .catch(error=>{console.log(error)})
      //  alert("I am ready to search for "+this.customerName);
    }
}