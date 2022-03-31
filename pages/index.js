import Head from "next/head";
import Image from "next/image";
import Promo from "../components/Promo";
import styles from "../styles/Home.module.css";
import BrowseComp from "../components/Browse-categories/BrowseComp";
import TopFashion from "../components/TopFashion";
import Latest from "../components/Latest";
import Featured from "../components/featured-products/Featured";
import ProductsColumn from "../components/products-column/ProductsColumn";
import Footer from "../components/footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import NewArrival from "../components/new-arrivals/NewArrival";

export default function Home() {
  return (
    <div
      style={{
        // background: "pink",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <Head>
        <title>Porto-site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Navbar />
      <Featured />
      <NewArrival/>
      <TopFashion />
      <Latest />
      <Promo />
      <BrowseComp />
      <ProductsColumn />
      <Footer />
    </div>
  );
}
