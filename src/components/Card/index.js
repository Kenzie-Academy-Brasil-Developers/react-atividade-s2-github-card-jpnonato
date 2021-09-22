import './style.css'

export default function Card ({name, desc, img}) {
    
  
    return (
        <div className="card">
            <img src={img} alt={name}></img>
            <section>
                <h2> {name}</h2>
                <h4>{desc}</h4>
            </section>
        </div>
    )
}