export default class Vendor{
    public ID: number;
    public Name: string;
    public PostalCode: string;
    public Address: string;
    public ContactPerson: string;
    public ECOFriendly: boolean;

    constructor(ID: number, Name: string, PostalCode: string, Address: string, ContactPerson: string, ECOFriendly: boolean){
        this.ID = ID;
        this.Name = Name;
        this.PostalCode = PostalCode;
        this.Address = Address;
        this.ContactPerson = ContactPerson;
        this.ECOFriendly = ECOFriendly;
    }
}
