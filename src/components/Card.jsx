function Card({ title, text}){
    return(
        <article className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </article>
    );
}

export default Card;