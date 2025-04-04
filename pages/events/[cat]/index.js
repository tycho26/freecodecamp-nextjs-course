import EventCard from "@/src/components/event-card"
import { useRouter } from "next/router"
import Image from "next/image"


export default function Events({events}) {

    const router = useRouter();

    let location = new String(router.query.cat)
    location = location.replace("-"," ")
    
    
    return (
        <div>
            <h1>Events in {location}</h1>

            <div>
                {events.map(ev => (
                    <div key={ev.id}>
                        <h2>{ev.title}</h2>
                        <Image width={200} height={200} alt={ev.title} src={ev.image}></Image>
                        <p>{ev.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const {allEvents} = await import ("../../../data/data.json")
    const eventList = allEvents.filter((event) => event.city.toLowerCase() == context.query.cat)


    return {props:{events:eventList}}
}