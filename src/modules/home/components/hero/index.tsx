"use client"
import { Github } from "@medusajs/icons"
import Image from "next/image";
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button, Heading } from "@medusajs/ui"
import './embla.css'

const slides = [
  { url: "https://picsum.photos/1200/400" },
  { url: "https://picsum.photos/1200/400" },
  { url: "https://picsum.photos/1200/400" },
  { url: "https://picsum.photos/1200/400" },
  { url: "https://picsum.photos/1200/400" },
];

const OPTIONS: EmblaOptionsType = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Hero = () => {
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  )
}
export default Hero

