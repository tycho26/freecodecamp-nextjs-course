import Image from "next/image"

export default function EventCategoryItem({category}){

    return(
        <a key={category.id} href={`/events/${category.id}`}>
            <Image width={200} height={200} alt={category.title} src={category.image}></Image>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
        </a>
    )
}