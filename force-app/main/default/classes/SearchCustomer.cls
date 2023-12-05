public class SearchCustomer {
	@AuraEnabled(cacheable=true)
    public static List<Customer__c> getcustomerDetails(String customerNameOrEmail){
     //   customerNameOrEmail='%'+customerNameOrEmail+'%';
     	String customerName='%'+customerNameOrEmail+'%';
        List<Customer__c> customers=[SELECT Customer_Id__c,name,Email__c,Status__c FROM Customer__c 
                                        WHERE name LIKE: customerName OR 
                                        Email__c =: customerNameOrEmail ORDER BY Customer_Id__c ASC];
        return customers;
    }
}