import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className; //aca construimos una clase combinada con la class 'card' y le sumamos el className que recibe por parametro props, lo guardamos y lo usamos
    return <div className={classes}>{props.children}</div>;
}

export default Card;