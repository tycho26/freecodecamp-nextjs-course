import EventCard from "@/src/components/event-card"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link";


export default function Events({events}) {

    const router = useRouter();

    let location = new String(router.query.cat)
    location = location.replace("-"," ")
    
    
    return (
        <>
            <h1>Events in {location}</h1>

            <div>
                {events.map(ev => (
                    <Link key={ev.id} href={`/events/event/${ev.id}`}>
                        <h2>{ev.title}</h2>
                        <Image width={200} height={200} alt={ev.title} src={ev.image}></Image>
                        <p>{ev.description}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}

export async function getStaticPaths(){
    const { events_categories } = await import("../../../data/data.json")
    let allPaths = events_categories.map(cat => {
        return {
            params: {
                cat: cat.id
            }
        }
    })
    return {
        paths:allPaths,
        fallback: false
    }
}

export async function getStaticProps(context){
    const {allEvents} = await import ("../../../data/data.json")
    const eventList = allEvents.filter((event) => event.city.toLowerCase() == context.params.cat)


    return {props:{events:eventList}}
}