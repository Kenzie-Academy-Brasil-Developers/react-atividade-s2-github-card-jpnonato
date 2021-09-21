import { Container } from "./style.js"

export default function Card ({data, image}){
    
    return(
        <>
            <Container>
                <img src={image}></img>
                <section>
                    <h2>{data.name}</h2>
                    <h4>{data.description}</h4>
                </section>
            </Container>
        </>
    )
}