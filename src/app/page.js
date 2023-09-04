"use client"
import Image from "next/image";
import styles from "./page.module.css";
import TopHeader from "./components/TopHeader";
import Search from "./components/Search";
import SliderCart from "./components/SliderCart";
import Hero from "./components/Hero";
import ServicesHome from "./components/ServicesHome";
import SingleService from "./components/SingleService";
import BlogHome from "./components/BlogHome";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      
      <TopHeader /> 
      <SliderCart/>
      <Hero/>
      <ServicesHome/> 
      <SingleService/>
      <BlogHome/>
      {/* <Partners/>  */}
      <Footer/>
    </div>
  );
}
