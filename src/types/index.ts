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

export interface filteredOrder {
    status : string,
    orderDetails : object
 
}