public class SearchCustomer {
    @AuraEnabled(cacheable=true)
    public static List<Customer__c> getcustomerDetails(String customerName){
        customerName='%'+customerName+'%';
        List<Customer__c> customers=[SELECT id,name,Email__c,Status__c FROM Customer__c 
                                        WHERE name LIKE : customerName OR 
                                        Email__c LIKE : customerName];
        return customers;
    }
}