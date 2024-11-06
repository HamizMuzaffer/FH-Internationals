export interface loginResponse {
id: string,
admin: boolean    
token : string,
username: string,
email: string,
CNIC : number,
contact: number,
city: string,
role: string,
user : {
    token : string,
    _id : string
}
}


export interface orderResponse {

}


export interface Order{
    _id : string,
    userId : string,
    shipperName: string,
    shipperAddress: string,
    shipperEmail: string,
    shipperPhone: string,
    shipperNTN: string,
    consigneeName: string,
    consigneeAddress: string,
    consigneePhone: string,
    consigneeEmail: string,
    parcelWeight: number,
    parcelDetails: string,
    trackingNumber : string
    status : string
}

export interface filteredOrder {
    status : string,
    orderDetails : object
 
}


export interface Inquiry {
    id: string
    email: string
    name: string
    message: string
  }
  
  
  export interface OrderState {
    orderDetails: Order | null;
  }