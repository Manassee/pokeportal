

function Card({ title, text, onClick }){
    return(
        <article className="card clickable" onClick={onClick}>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </article>
    );
}

export default Card;