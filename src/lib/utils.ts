import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent, PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

const prisma = new PrismaClient()

export function cn(...classes: ClassValue[]) {
   return twMerge(clsx(...classes));
}
export async function sleep(ms: number) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms)
   })
}
export function capitalize(string: string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

//prisma by default doesnt cache so we this methos to cache the data 
export const   getEvents = unstable_cache(async(city: string , page = 1) =>{
   // const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
   // const events: EventoEvent[] = await response.json();
   // fetch by prisma
   const events:EventoEvent[] = await prisma.eventoEvent.findMany({
      where: {
         city: city === 'all' ? undefined : capitalize(city)
      },
      orderBy: {
         date: 'asc'
      },
      take: 6,
      skip: (page - 1) * 6,
   });
   let totalCounts;
   if(city === 'all')
    totalCounts = await prisma.eventoEvent.count()
   else
    totalCounts = await prisma.eventoEvent.count({
      where: {
         city:  capitalize(city)
      }
   })

   return {events, totalCounts};
});

 export const  getEvent=unstable_cache(async(slug: string) =>{
   //   const response =await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
   //    const event:EventoEvent = await response.json();
   // fetch by prisma
   const event = await prisma.eventoEvent.findUnique({
      where: {
         slug:slug
      } 
      
   });
   if (!event) {
      // throw new Error(`Event with slug ${slug} not found`);
      return notFound();
   }
   return event;
});