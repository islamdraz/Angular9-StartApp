export interface A1Table{
    columns:A1Column[];
    filter:{}
}

export interface A1Column{
    displayName:string;
    columName:string;
    isSortable:boolean;
    sortOrder:string;   
}

export interface A1Filter{
    
}