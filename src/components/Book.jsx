import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
        <Link to={`../book/${book.isbn13}`}>
            <div className=" overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl ">
            <img src={book.image} alt="cover image" className=' object-cover w-full h-96 xl:h-80 ' />

            <div className="bg-black text-gray-300 bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-200 px-6 py-6 flex flex-col">
                <p>{book.title}</p> <br />
                <p>{book.subtitle.substring(0, 45)}.....</p> <br />
                <p className='mt-auto'> Price: {book.price}</p> <br />
            </div>
        </div>
        </Link>
    );
};

export default Book;