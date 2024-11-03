export interface Product{
  filter(arg0: (product: any) => any): Product[];
  id:string,
  title:string
}
