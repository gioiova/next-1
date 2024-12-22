import React from 'react';
import Image from 'next/image';
import { Product,ProductsPageProps } from '@/types/product';
import Link from 'next/link';

const ProductPage = ({ products} : ProductsPageProps ) => {

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product : Product ) => (
            <div
              key={product.id}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="h-56 w-full">
                <Link href={`products/${product.id}`}>
                  <Image
                    className="mx-auto h-full dark:block"
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                  />
                </Link>
              </div>

              <div className="pt-6">

            
                  {product.description.slice(0,100)}
           



                <div  className='mt-2 flex items-center'>
                <a
                  href={'#'}
                  className="text-lg leading-tight font-semibold text-gray-900 hover:underline dark:text-white"
                >
                  {product.title}
                </a>
                </div>
                


      

                <div className="mt-2 flex items-center gap-2">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {product.rating.rate}   
                  </p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    ({product.rating.count})
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    ${product.price}
                  </p>

                  <button
                    type="button"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      className="-ms-2 me-2 h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
