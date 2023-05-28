import Link from 'next/link';
import { useRouter } from 'next/router';
import BookItem from './BookItem';

interface Book {
    id: number;
    title: string;
    author: string;
    src: string;
    description: string;
}

const BookList: React.FC = () => {
    const router = useRouter();
    const handelClick = () => {
        router.push('/wishlist')
    }
    const books: Book[] = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            src: '/1.jpg',
            description: 'This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur',
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2',
            src: '/1.jpg',
            description: 'This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur',
        },
    ];

    return (
        <div className='flex flex-col container justify-center items-center'>
            <h2 className='text-xl font-bold'>Book List</h2>
            <div>
                {books.map((book) => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>

            <button type="button" onClick={handelClick} className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Wishlist Page</button>
        </div >
    );
};

export default BookList;
