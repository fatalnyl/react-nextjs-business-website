import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import Business from "../components/Business";
import { useAnimation } from "framer-motion";
import Services from "../components/Services";
import Team from "../components/Team";
import Footer from "../components/Footer";
import FooterLast from "../components/FooterLast";

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <div>
      <Head>
        <title>NMG Official Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Navbar />
          <div data-scroll-section>
            <Hero />
            <Business />
            <Services />
            <Team />
            <Footer />
            <FooterLast />
          </div>
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Home;
