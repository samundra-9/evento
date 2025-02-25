import React from 'react'
import EventCard from './event-card';
import { getEvents, sleep } from '@/lib/utils';
import PaginationControls from './PaginationControls';
type EventsListProps = {
  city: string;
  page?: number;
}

export default async function EventsList({ city, page=1 }: EventsListProps) {

  const { events, totalCounts } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
  const nextPath = page*6 < totalCounts  ? `/events/${city}?page=${page + 1}` : '';
  return (<>

    <section className='flex flex-wrap gap-10  justify-center'>
      {
        events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      }
    </section>
    <PaginationControls previousPath={previousPath} nextPath={nextPath} />
  </>
  )
}
