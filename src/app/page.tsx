import { BrainCircuit, Flame, ShieldCheck, Sparkles } from "lucide-react";

export default function Home() {
  const highlights = [
    { emoji: "🚚", title: "Free Shipping", text: "Orders above ₹499" },
    { emoji: "🌿", title: "100% Organic", text: "No additives ever" },
    { emoji: "🔒", title: "Secure Payment", text: "Razorpay & UPI" },
    { emoji: "↩️", title: "Easy Returns", text: "7-day policy" },
  ];

  const products = [
    {
      tag: "Organic",
      tagClass: "tag-green",
      kicker: "Raw Turmeric",
      name: "Farm Fresh Haldi Root",
      description:
        "Stone-ground from Erode, Tamil Nadu. Rich, earthy aroma with deep golden hue.",
      rating: "4.9",
      reviews: "(218 reviews)",
      price: "₹299",
      oldPrice: "₹399",
      icon: "🌿",
      tileClass: "tile-sand",
    },
    {
      tag: "Bestseller",
      tagClass: "tag-orange",
      kicker: "Premium Powder",
      name: "High Curcumin Haldi",
      description:
        "5.8% curcumin content - 3x higher than market standard. Lab-certified purity.",
      rating: "4.9",
      reviews: "(342 reviews)",
      price: "₹449",
      oldPrice: "₹599",
      icon: "✨",
      tileClass: "tile-cream",
    },
    {
      tag: "New",
      tagClass: "tag-dark",
      kicker: "Wellness Blend",
      name: "Golden Milk Mix",
      description:
        "Haldi + ashwagandha + black pepper. Perfect blend for your evening haldi doodh.",
      rating: "4.7",
      reviews: "(89 reviews)",
      price: "₹349",
      oldPrice: "₹449",
      icon: "🍵",
      tileClass: "tile-mint",
    },
    {
      tag: "Premium",
      tagClass: "tag-gold",
      kicker: "Gift Sets",
      name: "Haldi Hamper Box",
      description:
        "Curated gift box with 3 varieties - raw, powder and golden milk mix. Glass jar included.",
      rating: "5.0",
      reviews: "(61 reviews)",
      price: "₹899",
      oldPrice: "₹1099",
      icon: "🫙",
      tileClass: "tile-peach",
    },
    {
      tag: "20% Off",
      tagClass: "tag-amber",
      kicker: "Supplements",
      name: "Curcumin Capsules",
      description:
        "60 capsules with BioPerine for 20x better absorption. Vegan and gluten-free.",
      rating: "4.6",
      reviews: "(155 reviews)",
      price: "₹699",
      oldPrice: "₹899",
      icon: "💊",
      tileClass: "tile-lavender",
    },
    {
      tag: "Natural",
      tagClass: "tag-green",
      kicker: "Beauty Care",
      name: "Haldi Ubtan Pack",
      description:
        "Traditional face pack with rose petals, sandalwood and pure haldi. Glowing skin guaranteed.",
      rating: "4.8",
      reviews: "(203 reviews)",
      price: "₹249",
      oldPrice: "₹299",
      icon: "🧴",
      tileClass: "tile-pink",
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
            🛒 Cart (0)
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
                From the ancient fields of Rajasthan to your kitchen - pure haldi
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
            {highlights.map((item) => (
              <article className="feature-item" key={item.title}>
                <span className="feature-emoji">{item.emoji}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="collection" className="collection-section">
          <div className="container">
            <p className="section-eyebrow">✦ Our Collection</p>
            <h2 className="section-title">
              Finest <span>Haldi</span> Products
            </h2>

            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.name}>
                  <div className={`product-image ${product.tileClass}`}>
                    <span className={`tag ${product.tagClass}`}>{product.tag}</span>
                    <span className="product-icon" aria-hidden="true">
                      {product.icon}
                    </span>
                  </div>
                  <div className="product-content">
                    <p className="kicker">{product.kicker}</p>
                    <h3>{product.name}</h3>
                    <p className="description">{product.description}</p>
                    <p className="rating">★★★★★ {product.rating} {product.reviews}</p>
                    <div className="price-row">
                      <div>
                        <strong>{product.price}</strong>
                        <s>{product.oldPrice}</s>
                      </div>
                      <button type="button" aria-label={`Add ${product.name} to cart`}>
                        +
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <article className="promo-banner">
              <div>
                <h3>
                  Festival Special - <span>Haldi</span> Bundles
                </h3>
                <p>
                  Stock up for weddings, ceremonies and gifting season. Bulk
                  orders available with custom packaging and branding.
                </p>
                <button type="button" className="btn btn-primary">
                  Get Bundle Offer →
                </button>
              </div>
            </article>
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
