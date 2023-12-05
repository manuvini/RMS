import { LightningElement, track } from 'lwc';

export default class Parentcustomer extends LightningElement {
     searchDetail=[];


    handleCustomer(event){
        this.searchDetail=[];
    
        try{
            event.detail.forEach(element => {
                var custData={
                    id:element.Customer_Id__c	,
                    name:element.Name,
                    email:element.Email__c,
                    status:element.Status__c
                }
                this.searchDetail.push(custData);
            });

            

        }catch(e){
            console.log(e);
        }

    }

    handleClear () {
        this.searchDetail = [];
    }
}