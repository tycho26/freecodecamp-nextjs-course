import EventCard from "@/src/components/event-card"

function EventCats() {

    return (
        <div>
            <h1>Events page</h1>
            <EventCard location="London" />
            <EventCard location="Barcelona" />
            <EventCard location="San Fransico" />
        </div>
    )
}

export default EventCats