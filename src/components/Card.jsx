import "../styles/Card.scss";

function Card(props) {
    console.log(props.selected);
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border border-0" onClick={props.handleClick}>
                <div className="box overflow-hidden">
                    <img src={props.image} className="card-img-top" alt={props.name} />
                </div>
                <div className="card-body d-flex flex-column gap-0">
                    <h5 className="card-title">{props.name}</h5>
                    <p>Role: {props.role}</p>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">Release: {props.releaseDate}</p>
                    <p className="mt-auto">
                        <strong>Cost:</strong> {props.cost}Essence
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
