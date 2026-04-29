import Image from "next/image";
import { BrainCircuit, Flame, ShieldCheck, ShoppingCart, Sparkles } from "lucide-react";

export default function Home() {
  const highlights = [
    { title: "Free Shipping", text: "Orders above ₹499" },
    { title: "100% Organic", text: "No additives ever" },
    { title: "Secure Payment", text: "Razorpay & UPI" },
    { title: "Easy Returns", text: "7-day policy" },
  ];

  const products = [
    {
      tag: "Raw Turmeric",
      tagClass: "tag-olive",
      kicker: "Raw Turmeric",
      name: "Lakadong Haldi Roots",
      description:
        "Small-batch roots sourced from clean hill farms and packed for freshness.",
      highlights: ["Fresh roots", "Deep golden color", "Strong aroma"],
      price: "₹249",
      oldPrice: "₹349",
      tileClass: "tile-root",
      image: "/products/lakadong-roots.jpg",
    },
    {
      tag: "Turmeric Powder",
      tagClass: "tag-amber-soft",
      kicker: "Premium Powder",
      name: "High Curcumin Powder",
      description:
        "Finely milled turmeric powder with rich color and premium aroma.",
      highlights: ["Stone ground", "Lab tested", "Bold color"],
      price: "₹399",
      oldPrice: "₹499",
      tileClass: "tile-powder",
      image: "/products/powder.png",
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "Immunity",
      text: "Strengthens the natural defense mechanisms of your body.",
    },
    {
      icon: Flame,
      title: "Anti-Inflammatory",
      text: "Natural relief for joint health and muscle recovery.",
    },
    {
      icon: BrainCircuit,
      title: "Brain Health",
      text: "Boosts cognitive function and mental clarity naturally.",
    },
    {
      icon: Sparkles,
      title: "Skin Glow",
      text: "Detoxifies from within for a luminous, healthy complexion.",
    },
  ];

  const reviews = [
    {
      quote:
        "The colour of this haldi is just stunning - deep saffron orange. The aroma is completely different from supermarket haldi.",
      name: "Priya Sharma",
      place: "Mumbai, Maharashtra",
      emoji: "🌸",
    },
    {
      quote:
        "Ordered for my daughter's wedding ceremony. The quality was exceptional - so pure that it stained her clothes a beautiful gold.",
      name: "Rajesh Gupta",
      place: "Jaipur, Rajasthan",
      emoji: "🙏",
    },
    {
      quote:
        "As an Ayurvedic practitioner, I'm very particular. This is the best quality haldi I've sourced for my patients. High curcumin, no fillers.",
      name: "Dr. Meena Iyer",
      place: "Bangalore, Karnataka",
      emoji: "🌿",
    },
  ];

  return (
    <div className="site-shell">
      <header className="top-nav">
        <div className="container nav-content">
          <div className="brand">
            <span className="brand-hindi">हल्दी</span>
            <span className="brand-gold">Gold</span>
          </div>
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#collection">Shop</a>
            <a href="#benefits">Benefits</a>
            <a href="#">Recipes</a>
            <a href="#">About</a>
          </nav>
          <button className="cart-btn" type="button">
            <ShoppingCart size={19} style={{ verticalAlign: 'middle', marginRight: 6 }} />
            <span style={{ verticalAlign: 'middle', fontWeight: 600 }}>Cart (0)</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">✦ Pure & Organic</p>
              <h1 className="hero-title">
                The <span>Golden</span> Spice of India
              </h1>
              <p className="hero-copy">
                From the ancient fields to your kitchen - pure haldi
                with the highest curcumin content, certified organic and
                stone-ground for maximum potency.
              </p>
              <div className="hero-actions">
                <a href="#collection" className="btn btn-primary">
                  Shop Now →
                </a>
                <a href="#benefits" className="btn btn-outline">
                  Learn More
                </a>
              </div>
            </div>

            <div>
              <div className="jar-wrap" aria-hidden="true">
                <div className="jar-cap" />
                <div className="jar-body">
                  <div className="jar-fill" />
                </div>
                <div className="jar-label">
                  <strong>Pure Haldi</strong>
                  <small>100% Organic</small>
                </div>
              </div>
              <div className="hero-stats">
                <div className="stat-card">
                  <strong>5.8%</strong>
                  <span>Curcumin</span>
                </div>
                <div className="stat-card">
                  <strong>100%</strong>
                  <span>Organic</span>
                </div>
                <div className="stat-card">
                  <strong>4500+</strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-strip">
          <div className="container feature-grid">
            {highlights.map((item, index) => (
              <article className="feature-item" key={item.title}>
                <span className="feature-index">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="collection" className="collection-section">
          <div className="container collection-layout">
            <div className="collection-intro">
              <p className="section-eyebrow">Our Collection</p>
              <h2 className="section-title">
                Finest <span>Haldi</span> Products
              </h2>
              <p className="section-copy collection-copy">
                Two essentials for your kitchen: whole roots for freshness and
                powder for everyday cooking.
              </p>
            </div>

            <div className="product-grid product-grid-two">
              {products.map((product) => (
                <article className="product-card" key={product.name}>
                  <div className={`product-image ${product.tileClass}`}>
                    <span className={`tag ${product.tagClass}`}>{product.tag}</span>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      priority
                      className="product-image-img"
                    />
                  </div>
                  <div className="product-content">
                    <p className="kicker">{product.kicker}</p>
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                    <ul className="product-highlights">
                      {product.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="price-row">
                      <div>
                        <strong>{product.price}</strong>
                        <s>{product.oldPrice}</s>
                      </div>
                      <button type="button" aria-label={`Add ${product.name} to cart`}>
                        Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="benefits-section">
          <div className="container">
            <p className="section-eyebrow">✦ Why Haldi?</p>
            <h2 className="section-title">
              The <span>Ancient</span> Superfood
            </h2>
            <p className="section-copy">
              Used for millennia in Ayurveda, Haldi Gold brings the clinical
              potency of curcumin into your modern daily ritual.
            </p>

            <div className="benefits-grid">
              {benefits.map((item) => (
                <article className="benefit-card" key={item.title}>
                  <span className="benefit-icon" aria-hidden="true">
                    <item.icon className="benefit-icon-svg" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="container">
            <p className="section-eyebrow">✦ Real Reviews</p>
            <h2 className="section-title">
              What Our <span>Customers</span> Say
            </h2>

            <div className="reviews-grid">
              {reviews.map((item) => (
                <article className="review-card" key={item.name}>
                  <p className="rating">★★★★★</p>
                  <p className="quote">&ldquo;{item.quote}&rdquo;</p>
                  <div className="reviewer">
                    <span>{item.emoji}</span>
                    <div>
                      <strong>{item.name}</strong>
                      <small>{item.place}</small>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand">
              <span className="brand-hindi">हल्दी</span>
              <span className="brand-gold">Gold</span>
            </div>
            <p>
              Pure, organic turmeric sourced from the finest farms in India. From
              our fields to your kitchen.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <a href="#">Raw Turmeric</a>
            <a href="#">Powder Range</a>
            <a href="#">Wellness Blends</a>
            <a href="#">Gift Hampers</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="#">Track Order</a>
            <a href="#">Returns Policy</a>
            <a href="#">Shipping Info</a>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p>support@haldigold.in</p>
            <p>+91 98765 43210</p>
            <p>Mon-Sat, 9am-6pm IST</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 हल्दी Gold. Made with love in India.</p>
          <div className="socials" aria-hidden="true">
            <span>📱</span>
            <span>📷</span>
            <span>🛍️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
