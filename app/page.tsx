import Banner from "@/components/mainPage/Banner";
import ProductPage from "@/components/mainPage/ProductPage";
import Image from "next/image";

export default async function Home() {

  const data = await fetch("https://fakestoreapi.com/products")
  const products =  await data.json()

  console.log(products)



  return (
    <>
    <Banner />
    <ProductPage
    products = {products} />
    </>

    
  );
}
