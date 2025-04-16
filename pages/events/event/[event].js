import Error from "next/error"
import Image from "next/image"

function SingleEvent({eventData }) {

    return (
        <>
            <h1>{eventData.title}</h1>
            <Image width={200} height={200} alt={eventData.title} src={eventData.image}></Image>
            <p>{eventData.description}</p>
        </>
    )
}

export default SingleEvent

export async function getStaticPaths(){
    const { allEvents } = await import("../../../data/data.json")
    let allPaths = allEvents.map(event => {
        return {
            params: {
                event: event.id
            }
        }
    })
    return {
        paths:allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {

    const { allEvents } = await import("../../../data/data.json")

    let eventObj = allEvents.find(event => event.id == context.params.event)

    return ({ props: {eventData: eventObj } })

}