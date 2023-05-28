import { useState } from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
    src: string;
    description: string;
}

const BookItem: React.FC<{ book: Book }> = ({ book }) => {
    const [wishlist, setWishlist] = useState<Book[]>([]);

    const addToWishlist = () => {
        const updatedWishlist = [...wishlist, book];
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    return (
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">{book?.title}</p>
                </div>
                <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                    <img src="/1.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
                </div>
                <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                    <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Add to Wishlist</button>
                </div>
                <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                    {book?.description}
                </p>
            </div>
        </main>

    );
};

export default BookItem;
