function EventCard({ location }) {

    const locationSlug = location.toLowerCase().replace(" ","-")

    return (
        <a href={"/events/"+locationSlug}>
            <h2>Events in {location}</h2>
            <p>
                Props let you think about parent and child components independently. For example, you can change the person or the size props inside Profile without having to think about how Avatar uses them. Similarly, you can change how the Avatar uses these props, without looking at the Profile.
                You can think of props like “knobs” that you can adjust. They serve the same role as arguments serve for functions—in fact, props are the only argument to your component! React component functions accept a single argument, a props object:
            </p>
        </a>
    )
}

export default EventCard