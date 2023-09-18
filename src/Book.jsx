const Book = ({ id, image, title, author, number }) => {
    return (
        <article className="book">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{author}</p>
            <span className="number">{`#${number + 1}`}</span>
        </article>
    );
};
export default Book;
