import EventCard from "@/src/components/event-card"
import { useRouter } from "next/router"


function Events() {

    const router = useRouter();
    let location = new String(router.query.cat)
    location = location.replace("-"," ")

    return (
        <div>
            <h1>Events in {location}</h1>
        </div>
    )
}

export default Events