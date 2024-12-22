export type Product = {
    id: string; 
    title: string; 
    description:string;
    image: string; 
    price: number; 
    rating: {
      rate: number; 
      count: number; 
    };
};

export type ProductsPageProps = {
   products : Product [];
};
