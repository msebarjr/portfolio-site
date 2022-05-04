import "../styles/Quote.module.css";

const Quote = (props) => {
    return (
        <blockquote className={props.cname}>
            <p>"{props.quote.text}"</p>
            <small>~ {props.quote.author}</small>
        </blockquote>
    );
};

export default Quote;
