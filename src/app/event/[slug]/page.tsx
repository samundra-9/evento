import H1 from "@/components/h1";
import { EventoEvent } from "@prisma/client";
import {  getEvent, sleep } from "@/lib/utils"; 
import Image from "next/image";
import Link from "next/link";

type EventPageProps = { params: { slug: string } };

export async function generateMetadata({params}: EventPageProps) {
    const slug = params.slug;
   const event = await getEvent(slug);
    return {
        title: event.name,  
    }
}


//what will do this is makes those events statically rendered dueing build so it will be faster
export async function generateStaticParams() {
    //most popular events
    return [{
        slug: "comedy-extravaganza" 
    },{
        slug: "dj-practice-session "
    }]
}

export default async function EventPage({ params }: EventPageProps) {
    const slug = params.slug;
    const event = await getEvent(slug);
    // console.log(event);
    return (
        <main className="">
            <section className="relative  overflow-hidden flex items-center justify-center">
                <Image className="object-cover blur-3xl z-0"
                    quality={50}
                    priority
                    src={event.imageUrl} alt="Event background image" fill sizes="(max-width:1280px) 100vw,1280px" />
                <div className="z-1 relative flex flex-col lg:flex-row gap-x-6 lg:gap-x-16 py-14 md:py-20 ">
                    <Image src={event.imageUrl} alt={event.name} width={300} height={201}
                        className="rounded-xl border-2 border-white/50 object-cover"
                    />
                    <div className="flex flex-col">
                        {/* display date as dayname, monthname ,date as friday ,july 23 */}
                        <p className="text-white/75">
                            {
                                new Intl.DateTimeFormat("en-US", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric"
                                }).format(new Date(event.date))
                            }
                        </p>
                        <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl"
                        >{event.name}</H1>
                        <p className="whitespace-nowrap text-xl text-white/75"> Organized By <span className="italic" >{event.organizerName}</span> </p>
                        <button className="bg-white/20 text-lg capitalize mg-5 lg:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 focus:scale-105 hover:scale-105 active:scale-[1.02] transition">Get Ticket</button>
                    </div>
                </div>
            </section>
            <div className="text-center px-5 py-5 min-h-[75vh]">
                <section className="mb-12">
                    <h2 className="text-2xl mb-8">About this event</h2>
                    <p className="max-w-4xl mx-auto text-white/50   text-lg leading-8">{event.description}</p>
                </section> 
                <section>
                    <h2 className="text-2xl mb-8">Location</h2>
                    <p className="max-w-4xl mx-auto text-white/50 text-lg leading-8">{event.location}</p>
                </section> 
            </div>
        </main>
    )
}  