import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import ProductCard from "../components/ProductCard";
import spinach1 from "../assets/spinach1.jpeg";

const productList = [
  {
    id: 1,
    product: "Organic Spinach",
    quantity: "5 kg",
    price: 120,
    images: [spinach1],
  },
{
  id: 2,
  product: "Fresh Tomatoes",
  quantity: "10 kg",
  price: 100,
  images: [
    "https://media.istockphoto.com/id/1299586597/photo/indeterminate-tomato-plants-growing-outside-in-uk.jpg?s=612x612&w=0&k=20&c=XqvpohIQda3X_uqf2GLh_CwUKJAN3SYgqF2Hlo8thSM="
  ],
},
  {
    id: 3,
    product: "Coriander Bunch",
    quantity: "50 bunches",
    price: 50,
    images: [
      "https://media.istockphoto.com/id/170931923/photo/group-on-cilantro-tied-together.jpg?s=612x612&w=0&k=20&c=LwCbYdyJlbyToiB6B51hFLPw_pU9yFjw1pe2Db2X2Zc="
    ],
  },
  {
    id: 4,
    product: "Mint Leaves",
    quantity: "25 bunches",
    price: 40,
    images: ["https://media.istockphoto.com/id/951044634/photo/fresh-green-mint-plants-in-growth-at-field.jpg?s=612x612&w=0&k=20&c=ZdaydBiGL32jJKzVNcbECORFGJmZy9t0734b2GQIZOU="],
  },
  {
    id: 5,
    product: "Lettuce",
    quantity: "10 kg",
    price: 150,
    images: ["https://media.istockphoto.com/id/815950794/photo/lettuce-in-rows-in-the-vegetable-garden.jpg?s=612x612&w=0&k=20&c=WWnw5gp7qHr5B_ieKcJUNMz5m7BwtsJuoLKUDCRUUO8="],
  },
  {
    id: 6,
    product: "Bell Peppers",
    quantity: "4 kg",
    price: 200,
    images: ["https://media.istockphoto.com/id/897503508/photo/colorful-paprika-background.jpg?s=612x612&w=0&k=20&c=t5ETcPE_E-9JMjQgwpbi-BfMh4i5eSTd4oAA9YYO_LQ="]
  },
  {
    id: 7,
    product: "Broccoli",
    quantity: "3 kg",
    price: 170,
    images:["https://media.istockphoto.com/id/147060621/photo/broccoli.jpg?s=612x612&w=0&k=20&c=I1cCxLxci23nrSNZb7o6gsqUYB911z6IZlLdEOk4I9M="]
  },
  // {
  //   id: 8,
  //   product: "Green Beans",
  //   quantity: "6 kg",
  //   price: 110,
  //   image: "https://via.placeholder.com/300x200?text=Green+Beans",
  // },
  // {
  //   id: 9,
  //   product: "Basil Leaves",
  //   quantity: "20 bunches",
  //   price: 60,
  //   image: "https://via.placeholder.com/300x200?text=Basil",
  // },
  // {
  //   id: 10,
  //   product: "Organic Carrots",
  //   quantity: "5 kg",
  //   price: 130,
  //   image: "https://via.placeholder.com/300x200?text=Carrots",
  // },
];

export default function Availability() {
  const [products] = useState(productList);

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#f1f8f5] p-8">
        <h1 className="text-3xl font-bold text-[#2e604a] mb-6">
          Available Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
