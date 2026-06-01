export interface employee{
    id:string,
    name:string,
    division:string
}

export interface manager extends employee{
    numberOfEmploye:number
}