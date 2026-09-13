import { useState } from 'react';
import posts from './posts';
import './PostContainer.css';

function PostContainer() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = posts.filter((post) =>
            post.title.toLowerCase().includes(inputValue.toLowerCase()) ||
            post.content.toLowerCase().includes(inputValue.toLowerCase())
        );
        setSearchTerm(inputValue);
        setFilteredPosts(filtered);
    };

    return (
        <div className="post-container">
            <h1 className="post-container-title">📝 Blog Posts</h1>

            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Cari postingan..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="search-button">🔍 Search</button>
            </form>

            {searchTerm && (
                <p className="search-info">
                    Hasil pencarian untuk: <strong>"{searchTerm}"</strong> — {filteredPosts.length} post ditemukan
                </p>
            )}

            <div className="posts-grid">
                {filteredPosts.map((post) => (
                    <div className="post-card" key={post.id}>
                        <div className="post-image-wrapper">
                            <img src={post.image} alt={post.title} className="post-image" />
                        </div>
                        <div className="post-body">
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-content">{post.content}</p>
                            <span
                                className={`post-publish ${post.publish ? 'published' : 'unpublished'}`}
                            >
                                {post.publish ? '✅ Published' : '❌ Unpublished'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <p className="no-results">Tidak ada postingan yang ditemukan.</p>
            )}
        </div>
    );
}

export default PostContainer;
