import { IndividualCustomerProtocol, EnterpriseCustomerProtocol, CustomerOrderProtocol } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrderProtocol {
  constructor(
    public firstName: string,
    public lastName: string,
    public customerID: string,
  ) { }

  getName(): string {
    return this.firstName + ' ' + this.lastName
  }

  getIDN(): string {
    return this.customerID
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrderProtocol {
  constructor(
    public name: string,
    public cnpj: string,
  ) { }

  getName(): string {
    return this.name
  }

  getIDN(): string {
    return this.cnpj
  }
}