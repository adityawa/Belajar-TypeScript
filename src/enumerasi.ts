export enum CustomerType {
    REGULER="REGULER",
    PREMIUM="PREMIUM",
    GOLD="GOLD",
    PLATINUM="PLATINUM"
}

export type Customer={
    id:number;
    name:string;
    type:CustomerType;
}