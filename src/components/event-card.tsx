"use client"
import { EventoEvent } from "@prisma/client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use, useRef } from "react";

const MotionLink = motion(Link);
export default function EventCard({ event }: { event: EventoEvent }) {
    const ref =useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1", "1.5 1"]
        
    });

    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8,1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.3,1]);

    return (
        <MotionLink 
        ref={ref}
        className="flex-1 basis-80 h-[380px] max-w-[500px] "
            href={`/event/${event.slug}`} 
            style={{
                scale:scaleProgress,
                opacity:opacityProgress,
            }}
            initial={{
                scale:0.8,
                opacity:0,
            }}
            >
            <section className="max-w[1100px] px-[20px] h-full w-full flex flex-col  bg-white/[3%] rounded-xl overflow-hidden relative transition hover:scale-105 active:scale-[1.02]" >
                <Image src={event.imageUrl} alt={event.name} height={280} width={500}
                    className="h-[60%] object-cover"
                />
                <div className="flex flex-col flex-1 justify-center items-center " >
                    <h2 className="text-2xl font-semibold">{event.name}</h2>
                    <p className="italic text-white/75">By {event.organizerName}</p>
                    <p className="text-sm text-white/50 mt-4 " >{event.location}</p>
                </div>
                <section className="absolute top-[12px] left-[12px] h-[45px] w-[45px] bg-black/30 rounded-md flex flex-col justify-center items-center" >
                    <p className="text-xl font-bold -mb-[5px]">

                        {
                            new Date(event.date).toLocaleDateString('en-US', {
                                day: '2-digit',
                            })
                        }
                    </p>
                    <p className="text-xs uppercase text-accent">
                        {
                            new Date(event.date).toLocaleDateString('en-US', {
                                month: 'short',
                            })
                        }
                    </p>
                </section>
            </section>
        </MotionLink>
    )
}
