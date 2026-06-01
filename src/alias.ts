export type Category={
    id:number;
    Nama:string;
}

export type Product={
    id:number;
    Nama:string;
    Price:number;
    category:Category;
}

const category :Category={
    id:1,
    Nama:"Samsung s20"
};

const product : Product={
    id:1,
    Nama:"Samsung S20",
    Price:20000000,
    category:category
};

console.info(category);
console.info(product);
