import Book from "./Book";
import { books } from "./books";

const BookList = () => {
    return (
        <section className="bookList">
            {books.map((book, index) => (
                <Book key={book.id} {...book} number={index} />
            ))}
        </section>
    );
};
export default BookList;
