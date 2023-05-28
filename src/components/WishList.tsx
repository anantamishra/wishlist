import { useEffect, useState } from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
}

const Wishlist: React.FC = () => {
    const [wishlist, setWishlist] = useState<Book[]>([]);

    useEffect(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    return (
        <div>
            <h2>Wishlist</h2>
            {wishlist.length > 0 ? (
                wishlist.map((book) => (
                    <div key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))
            ) : (
                <p>Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default Wishlist;
