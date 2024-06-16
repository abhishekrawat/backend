"use client"

import Image from "next/image";
// import EmblaCarousel from './EmblaCarousel'
// import { EmblaOptionsType } from 'embla-carousel'
// import { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import { Button, Heading } from "@medusajs/ui"
// import './embla.css'

// const slides = [
//   { url: "https://picsum.photos/1200/400" },
//   { url: "https://picsum.photos/1200/400" },
//   { url: "https://picsum.photos/1200/400" },
//   { url: "https://picsum.photos/1200/400" },
//   { url: "https://picsum.photos/1200/400" },
// ];

// const OPTIONS: EmblaOptionsType = {}
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Hero = () => {
  return (
    <>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <Image
        className="content-container"
        src="https://picsum.photos/1600/900"
        width={1600}
        height={900}
        alt="Picture of the author">
      </Image>

    </>
  )
}
export default Hero

