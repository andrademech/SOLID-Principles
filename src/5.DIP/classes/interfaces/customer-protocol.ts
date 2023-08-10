export interface CustomerOrderProtocol {
  getName(): string
  getIDN(): string
}

export interface IndividualCustomerProtocol {
  firstName: string
  lastName: string
  customerID: string
}

export interface EnterpriseCustomerProtocol {
  name: string
  cnpj: string
}