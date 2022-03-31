public class ContactListController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(Id recordId) {
        return [SELECT Id, LastName, FirstName, Title, Phone FROM Contact WHERE Id = :recordId];
    }
}
