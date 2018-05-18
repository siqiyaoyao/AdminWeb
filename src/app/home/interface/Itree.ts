export interface Itree {
    title:string;
    key:string;
    children?:any;
    isLeaf?:boolean;
    checked?:boolean;
    selected?:boolean;
    expanded?:boolean;
    selectable?:boolean;
    disabled?:boolean;
    disableCheckbox?:boolean;
    
}