"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

type ServiceItem = {
  title: string
  desc: string
  image: string
}

const SERVICES: ServiceItem[] = [
  { title: "Technical Consulting", desc: "We provide expert guidance to help you navigate complex technical challenges, optimize systems, and align technology strategy with business goals.", image: "/assets/visi.jpeg" },
  { title: "Technical Consulting", desc: "We provide expert guidance to help you navigate complex technical challenges, optimize systems, and align technology strategy with business goals.", image: "/assets/visi.jpeg" },
  { title: "Technical Consulting", desc: "We provide expert guidance to help you navigate complex technical challenges, optimize systems, and align technology strategy with business goals.", image: "/assets/visi.jpeg" },
  { title: "Technical Consulting", desc: "We provide expert guidance to help you navigate complex technical challenges, optimize systems, and align technology strategy with business goals.", image: "/assets/visi.jpeg" },
  { title: "Technical Consulting", desc: "We provide expert guidance to help you navigate complex technical challenges, optimize systems, and align technology strategy with business goals.", image: "/assets/visi.jpeg" },
  { title: "Technical Consulting", desc: "We provide expert guidance to help you navigate complex technical challenges, optimize systems, and align technology strategy with business goals.", image: "/assets/visi.jpeg" },
  { title: "Technical Consulting", desc: "We provide expert guidance to help you navigate complex technical challenges, optimize systems, and align technology strategy with business goals.", image: "/assets/visi.jpeg" },
]

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,                    
    align: "start",               
    slidesToScroll: 1,            
    containScroll: "trimSnaps",   
    dragFree: false,              
    duration: 25,                  
    skipSnaps: false,              
  })


  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false)

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = React.useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="svc-wrap">
      <div className="svc-container">
        <div className="svc-head">
          <h2 className="svc-title">Our Services</h2>
          <div className="svc-line" />
        </div>

        <div className="svc-shell">
          <button
            type="button"
            className="svc-nav svc-nav-left"
            onClick={scrollPrev}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="svc-embla" ref={emblaRef}>
            <div className="svc-track">
              {SERVICES.map((item, i) => (
                <div key={i} className="svc-slide">
                  <article className="svc-card group" data-card="service">
                    <div className="svc-card-bg" />
                    <div className="svc-card-deco" />

                    <div className="svc-img-wrap">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="svc-img"
                        sizes="(max-width: 900px) 85vw, 360px"
                        priority={i < 3}
                      />
                      <div className="svc-img-overlay" />
                    </div>

                    <div className="svc-card-content">
                      <h3 className="svc-card-title">{item.title}</h3>
                      <p className="svc-card-desc">{item.desc}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="svc-nav svc-nav-right"
            onClick={scrollNext}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="svc-dots">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`svc-dot ${index === selectedIndex ? "svc-dot-active" : ""}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}