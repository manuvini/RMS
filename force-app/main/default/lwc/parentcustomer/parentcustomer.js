import { LightningElement } from 'lwc';

export default class Parentcustomer extends LightningElement {
    searchDetail=[];
    handleCustomer(event){
        this.searchDetail=[];
     //   alert('See the Magic, I called from child')
     //   alert(event.detail);
        try{
            event.detail.forEach(element => {
                var custData={
                    id:element.Id,
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