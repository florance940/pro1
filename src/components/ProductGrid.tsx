import { products } from '../data/products';

export default function ProductGrid() {
    return (
        <section className="collection" id="products">
            <div className="section-header">
                <span className="badge">Curated Sets</span>
                <h2>The <span>Boutique</span> Series</h2>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-img">
                            <img src={product.image} alt={product.title} />
                            <button className="quick-add">Add to Cart</button>
                        </div>
                        <div className="product-info">
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <div className="product-rating">
                                <span className="stars">{'★'.repeat(Math.round(product.rating.rate))}</span>
                                <span className="count">({product.rating.count})</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
