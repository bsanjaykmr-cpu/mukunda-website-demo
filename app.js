/**
 * SOWJI'S MUKUNDA - Heritage Silks & Designer Wear
 * Application Controller with 100% Authentic Client Data
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    cart: JSON.parse(localStorage.getItem('mukunda_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('mukunda_wishlist') || '[]'),
    activeOccasionTab: 'sarees',
    activeProductFilter: 'all',
    pricingMode: 'retail', // 'retail' or 'dealer'
    currentHeroSlide: 0,
    heroAutoplayTimer: null,
    appliedPromo: null,
    quickViewProduct: null,
    quickViewSelectedOption: null
  };

  // DOM Cache
  const DOM = {
    header: document.querySelector('.site-header'),
    heroSliderTrack: document.getElementById('heroSliderTrack'),
    heroDotsContainer: document.getElementById('heroDots'),
    heroPrevBtn: document.getElementById('heroPrevBtn'),
    heroNextBtn: document.getElementById('heroNextBtn'),
    pricingModeToggle: document.getElementById('pricingModeToggle'),
    retailOpt: document.getElementById('retailOpt'),
    dealerOpt: document.getElementById('dealerOpt'),
    occasionTabs: document.querySelectorAll('.tab-pill'),
    bentoGrid: document.getElementById('bentoGrid'),
    dualCardsGrid: document.getElementById('dualCardsGrid'),
    productFilterBtns: document.querySelectorAll('.filter-btn'),
    productsGrid: document.getElementById('productsGrid'),
    fabricsGrid: document.getElementById('fabricsGrid'),
    reviewsGrid: document.getElementById('reviewsGrid'),
    cartTrigger: document.getElementById('cartTrigger'),
    cartDrawer: document.getElementById('cartDrawer'),
    drawerBackdrop: document.getElementById('drawerBackdrop'),
    drawerCloseBtn: document.getElementById('drawerCloseBtn'),
    cartItemsList: document.getElementById('cartItemsList'),
    cartCountBadge: document.getElementById('cartCountBadge'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartDiscount: document.getElementById('cartDiscount'),
    cartDiscountRow: document.getElementById('cartDiscountRow'),
    cartTotal: document.getElementById('cartTotal'),
    shippingProgressFill: document.getElementById('shippingProgressFill'),
    shippingStatusText: document.getElementById('shippingStatusText'),
    promoInput: document.getElementById('promoInput'),
    promoApplyBtn: document.getElementById('promoApplyBtn'),
    wishlistTrigger: document.getElementById('wishlistTrigger'),
    wishlistCountBadge: document.getElementById('wishlistCountBadge'),
    quickViewModal: document.getElementById('quickViewModal'),
    quickViewModalContent: document.getElementById('quickViewModalContent'),
    searchTrigger: document.getElementById('searchTrigger'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchOverlayInput: document.getElementById('searchOverlayInput'),
    searchOverlayClose: document.getElementById('searchOverlayClose'),
    searchSuggestions: document.getElementById('searchSuggestions'),
    toastContainer: document.getElementById('toastContainer'),
    mobileMenuTrigger: document.getElementById('mobileMenuTrigger'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    mobileDrawerClose: document.getElementById('mobileDrawerClose')
  };

  /* ==========================================================================
     1. UTILITY & TOAST NOTIFICATION
     ========================================================================== */
  const formatCurrency = (amount) => {
    return `${SITE_CONFIG.currencySymbol}${Number(amount).toLocaleString('en-IN')}`;
  };

  const showToast = (message, icon = '✦') => {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  };

  /* ==========================================================================
     2. EDITORIAL HERO SHOWCASE SLIDER
     ========================================================================== */
  const initHeroCarousel = () => {
    if (!DOM.heroSliderTrack || !HERO_SLIDES.length) return;

    DOM.heroSliderTrack.innerHTML = HERO_SLIDES.map((slide, idx) => {
      const waMsg = encodeURIComponent(`Namaste Sowji Garu! Please share video details and availability of: ${slide.title} (Customer Price: ₹${slide.customerPrice})`);
      const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waMsg}`;

      return `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
          <div class="container">
            <div class="hero-split-grid">
              
              <!-- Left Editorial Text Card -->
              <div class="hero-text-card">
                <span class="hero-tag-pill">${slide.tag}</span>
                <h1 class="hero-title">${slide.title}</h1>
                <p class="hero-description">${slide.description}</p>
                
                <div class="hero-pricing-box">
                  <div>
                    <span style="font-size: 0.725rem; text-transform: uppercase; letter-spacing: 0.08em; color: #8E857B; display: block; font-weight: 700;">Customer Price</span>
                    <span class="hero-price-val">${formatCurrency(slide.customerPrice)}</span>
                  </div>
                  <div class="hero-dealer-pill">
                    <span>₹${slide.dealerDiscount} Dealer Margin</span>
                  </div>
                  <div>
                    <span style="font-size: 0.725rem; text-transform: uppercase; letter-spacing: 0.08em; color: #8E857B; display: block; font-weight: 700;">Market MRP</span>
                    <span class="hero-mrp-val">${formatCurrency(slide.mrp)}</span>
                  </div>
                </div>

                <div class="hero-cta-group">
                  <a href="${slide.ctaLink}" class="btn-regal-shimmer">
                    <span>${slide.ctaText}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                  <a href="${waUrl}" target="_blank" class="btn-whatsapp-hero">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/></svg>
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>

              <!-- Right Authentic Image Showcase Stage -->
              <div class="hero-image-stage">
                <img class="hero-stage-img" src="${slide.image}" alt="${slide.title}">
                <div class="hero-stage-badge">
                  <div class="hero-badge-title">
                    <span style="color: #C5A059;">★</span>
                    <span>${slide.badgeText}</span>
                  </div>
                  <div class="hero-badge-subtitle">Ready to Dispatch</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      `;
    }).join('');

    // Render Hero Dots
    if (DOM.heroDotsContainer) {
      DOM.heroDotsContainer.innerHTML = HERO_SLIDES.map((_, idx) => `
        <div class="hero-dot-pill ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>
      `).join('');

      DOM.heroDotsContainer.querySelectorAll('.hero-dot-pill').forEach(dot => {
        dot.addEventListener('click', (e) => {
          const index = parseInt(e.target.dataset.index, 10);
          goToHeroSlide(index);
          resetHeroAutoplay();
        });
      });
    }

    if (DOM.heroPrevBtn) {
      DOM.heroPrevBtn.addEventListener('click', () => {
        prevHeroSlide();
        resetHeroAutoplay();
      });
    }

    if (DOM.heroNextBtn) {
      DOM.heroNextBtn.addEventListener('click', () => {
        nextHeroSlide();
        resetHeroAutoplay();
      });
    }

    startHeroAutoplay();
  };

  const goToHeroSlide = (index) => {
    const slides = DOM.heroSliderTrack.querySelectorAll('.hero-slide');
    const dots = DOM.heroDotsContainer ? DOM.heroDotsContainer.querySelectorAll('.hero-dot-pill') : [];
    
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
    });

    dots.forEach((d, idx) => {
      d.classList.toggle('active', idx === index);
    });

    state.currentHeroSlide = index;
  };

  const nextHeroSlide = () => {
    const nextIdx = (state.currentHeroSlide + 1) % HERO_SLIDES.length;
    goToHeroSlide(nextIdx);
  };

  const prevHeroSlide = () => {
    const prevIdx = (state.currentHeroSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    goToHeroSlide(prevIdx);
  };

  const startHeroAutoplay = () => {
    state.heroAutoplayTimer = setInterval(nextHeroSlide, 7000);
  };

  const resetHeroAutoplay = () => {
    clearInterval(state.heroAutoplayTimer);
    startHeroAutoplay();
  };

  /* ==========================================================================
     3. RETAIL VS DEALER / WHOLESALE PRICING TOGGLE
     ========================================================================== */
  const initPricingModeToggle = () => {
    if (!DOM.pricingModeToggle) return;

    DOM.pricingModeToggle.addEventListener('click', () => {
      if (state.pricingMode === 'retail') {
        state.pricingMode = 'dealer';
        DOM.retailOpt?.classList.remove('active');
        DOM.dealerOpt?.classList.add('active');
        showToast('Wholesale / Dealer Margin Pricing Mode Activated!', '🏷️');
      } else {
        state.pricingMode = 'retail';
        DOM.dealerOpt?.classList.remove('active');
        DOM.retailOpt?.classList.add('active');
        showToast('Standard Customer Retail Pricing Mode Activated!', '🛍️');
      }
      renderProducts(state.activeProductFilter);
    });
  };

  /* ==========================================================================
     4. SHOP BY OCCASION (BENTO GRID)
     ========================================================================== */
  const renderBentoGrid = (tabKey = 'sarees') => {
    if (!DOM.bentoGrid) return;
    const items = OCCASION_CATEGORIES[tabKey] || OCCASION_CATEGORIES.sarees;

    DOM.bentoGrid.innerHTML = items.map((cat, idx) => `
      <div class="bento-card reveal-fade delay-${idx + 1}" data-query="${cat.query}">
        <div class="bento-img-wrap">
          <img src="${cat.image}" alt="${cat.title}">
        </div>
        <div class="bento-gradient"></div>
        <div class="bento-content">
          <span class="bento-badge">${cat.tag}</span>
          <h3 class="bento-title">${cat.title}</h3>
          <div class="bento-meta">
            <span>${cat.stylesCount}</span>
            <span class="bento-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </div>
    `).join('');

    DOM.bentoGrid.querySelectorAll('.bento-card').forEach(card => {
      card.addEventListener('click', () => {
        const query = card.dataset.query;
        filterProductsByOccasion(query);
        document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    observeRevealElements();
  };

  const initOccasionTabs = () => {
    DOM.occasionTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        DOM.occasionTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const categoryKey = tab.dataset.category;
        state.activeOccasionTab = categoryKey;
        renderBentoGrid(categoryKey);
      });
    });
  };

  /* ==========================================================================
     5. DUAL FEATURE CARDS (Big Day & Bridesmaids)
     ========================================================================== */
  const renderDualFeatureCards = () => {
    if (!DOM.dualCardsGrid) return;
    DOM.dualCardsGrid.innerHTML = FEATURED_DUAL_CARDS.map(card => `
      <div class="dual-feature-card reveal-fade" onclick="location.href='${card.link}'">
        <div class="dual-img-wrap">
          <img src="${card.image}" alt="${card.title}">
        </div>
        <div class="dual-overlay"></div>
        <div class="dual-card-content">
          <span class="dual-badge">${card.badge}</span>
          <h3 class="dual-title">${card.title}</h3>
          <p class="dual-desc">${card.description}</p>
          <a href="${card.link}" class="dual-btn">
            <span>${card.buttonText}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `).join('');
  };

  /* ==========================================================================
     6. "MOST LOVED" PRODUCTS WITH REAL LOCAL IMAGES & DIRECT WHATSAPP BUTTON
     ========================================================================== */
  const getBadgeClass = (badge) => {
    if (badge.includes('Pure')) return 'badge-pure';
    if (badge.includes('Loved')) return 'badge-loved';
    if (badge.includes('Ship')) return 'badge-ship';
    return 'badge-new';
  };

  const renderProducts = (category = 'all') => {
    if (!DOM.productsGrid) return;
    
    let filtered = PRODUCTS_DATA;
    if (category !== 'all') {
      filtered = PRODUCTS_DATA.filter(p => p.category === category || p.fabric.toLowerCase().includes(category));
    }

    DOM.productsGrid.innerHTML = filtered.map(prod => {
      const isWishlisted = state.wishlist.some(item => item.id === prod.id);
      const isDealerMode = state.pricingMode === 'dealer';
      
      const displayPrice = isDealerMode ? prod.dealerPrice : prod.price;
      const comparePrice = isDealerMode ? prod.price : prod.originalPrice;
      const discountLabel = isDealerMode 
        ? `Save ₹${prod.dealerDiscount} Dealer Margin` 
        : `${Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100)}% OFF`;

      const whatsappText = encodeURIComponent(`Namaste Sowji Garu! I want to order from Brand Mukunda:\n*Saree:* ${prod.name}\n*Price:* ₹${displayPrice}\n*Ref Image:* ${prod.images.primary}`);
      const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappText}`;

      return `
        <article class="product-card reveal-fade" data-id="${prod.id}">
          <div class="product-image-container">
            <span class="product-badge-pill ${getBadgeClass(prod.badge)}">${prod.badge}</span>
            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${prod.id}" title="Add to Wishlist" aria-label="Add to Wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? '#8C2D38' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
            
            <img class="product-img primary" src="${prod.images.primary}" alt="${prod.name}">
            <img class="product-img secondary" src="${prod.images.secondary}" alt="${prod.name} Pallu / Border Detail">
            
            <button class="quick-view-overlay-btn" data-id="${prod.id}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <span>Quick View</span>
            </button>

            <!-- Floating Slide-Up Drape Selector -->
            <div class="quick-add-slideup-bar">
              <span class="quick-drape-label">Select Drape / Blouse:</span>
              <div class="quick-options-row">
                ${prod.options.slice(0, 3).map(opt => `
                  <button class="quick-option-chip" data-id="${prod.id}" data-option="${opt}">
                    ${opt.split(' ')[0]}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="product-details">
            <span class="product-fabric-meta">${prod.fabric}</span>
            <h4 class="product-title" title="${prod.name}">${prod.name}</h4>
            
            <div class="product-rating">
              <span class="star-fill">★</span>
              <span><strong>${prod.rating}</strong> (${prod.reviewsCount} reviews)</span>
            </div>

            <div class="product-price-row">
              <span class="current-price">${formatCurrency(displayPrice)}</span>
              <span class="original-price">${formatCurrency(comparePrice)}</span>
              <span class="discount-percentage">${isDealerMode ? 'Wholesale' : discountLabel}</span>
            </div>

            <span class="dealer-margin-pill">
              ${isDealerMode ? `Dealer Margin: ₹${prod.dealerDiscount} / pc` : `Reseller Margin: ₹${prod.dealerDiscount} Less`}
            </span>

            <!-- Dual Action Row: Add to Bag + Buy on WhatsApp -->
            <div class="product-card-actions-row">
              <button class="btn-add-to-bag" data-id="${prod.id}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <span>Add to Bag</span>
              </button>
              <a href="${whatsappUrl}" target="_blank" class="btn-buy-whatsapp" title="Buy Directly on WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        </article>
      `;
    }).join('');

    attachProductCardEvents();
    observeRevealElements();
  };

  const attachProductCardEvents = () => {
    DOM.productsGrid.querySelectorAll('.btn-add-to-bag').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const prodId = e.currentTarget.dataset.id;
        const product = PRODUCTS_DATA.find(p => p.id === prodId);
        if (product) {
          const finalPrice = state.pricingMode === 'dealer' ? product.dealerPrice : product.price;
          addToCart({ ...product, price: finalPrice }, product.options[0]);
        }
      });
    });

    DOM.productsGrid.querySelectorAll('.quick-option-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = e.currentTarget.dataset.id;
        const option = e.currentTarget.dataset.option;
        const product = PRODUCTS_DATA.find(p => p.id === prodId);
        if (product) {
          const finalPrice = state.pricingMode === 'dealer' ? product.dealerPrice : product.price;
          addToCart({ ...product, price: finalPrice }, option);
        }
      });
    });

    DOM.productsGrid.querySelectorAll('.wishlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = e.currentTarget.dataset.id;
        toggleWishlist(prodId, e.currentTarget);
      });
    });

    DOM.productsGrid.querySelectorAll('.quick-view-overlay-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = e.currentTarget.dataset.id;
        openQuickView(prodId);
      });
    });
  };

  const initProductFilters = () => {
    DOM.productFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.productFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        state.activeProductFilter = filter;
        renderProducts(filter);
      });
    });
  };

  const filterProductsByOccasion = (query) => {
    DOM.productFilterBtns.forEach(b => b.classList.remove('active'));
    renderProducts('all');
    showToast(`Showing collections for: ${query.toUpperCase()}`);
  };

  /* ==========================================================================
     7. FABRIC ARCH CARDS & REVIEWS
     ========================================================================== */
  const renderFabrics = () => {
    if (!DOM.fabricsGrid) return;
    DOM.fabricsGrid.innerHTML = FABRICS_DATA.map((fab, idx) => `
      <div class="fabric-arch-card reveal-fade delay-${(idx % 4) + 1}" data-slug="${fab.slug}">
        <div class="fabric-arch-frame">
          <img class="fabric-arch-img" src="${fab.image}" alt="${fab.name}">
          <div class="fabric-arch-overlay"></div>
        </div>
        <h4 class="fabric-name">${fab.name}</h4>
        <span class="fabric-origin">${fab.origin}</span>
      </div>
    `).join('');

    DOM.fabricsGrid.querySelectorAll('.fabric-arch-card').forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.dataset.slug;
        const matchingBtn = Array.from(DOM.productFilterBtns).find(b => b.dataset.filter === slug);
        if (matchingBtn) {
          matchingBtn.click();
        } else {
          renderProducts('all');
        }
        document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };

  const renderReviews = () => {
    if (!DOM.reviewsGrid) return;
    DOM.reviewsGrid.innerHTML = REVIEWS_DATA.map((rev, idx) => `
      <div class="review-card reveal-fade delay-${idx + 1}">
        <div class="review-stars">
          ${'★'.repeat(rev.rating)}
        </div>
        <h4 class="review-title">"${rev.title}"</h4>
        <p class="review-comment">${rev.comment}</p>
        <span class="review-product-tag">Draped: ${rev.productBought}</span>
        <div class="reviewer-meta">
          <img class="reviewer-avatar" src="${rev.avatar}" alt="${rev.author}">
          <div class="reviewer-info">
            <h5>
              ${rev.author}
              ${rev.verified ? `
                <span class="verified-icon" title="Verified Mukunda Buyer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/></svg>
                </span>
              ` : ''}
            </h5>
            <span class="reviewer-city">${rev.city} • ${rev.date}</span>
          </div>
        </div>
      </div>
    `).join('');
  };

  /* ==========================================================================
     8. SHOPPING CART LOGIC & DRAWER
     ========================================================================== */
  const addToCart = (product, option = 'Unstitched (6.3m)', quantity = 1) => {
    const existingIndex = state.cart.findIndex(
      item => item.id === product.id && item.option === option
    );

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images.primary,
        fabric: product.fabric,
        option: option,
        quantity: quantity
      });
    }

    saveCart();
    updateCartUI();
    openCartDrawer();
    showToast(`Added "${product.name.slice(0, 22)}..." to your Bag!`, '🛍️');
  };

  const updateCartQuantity = (index, delta) => {
    if (!state.cart[index]) return;
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  };

  const removeCartItem = (index) => {
    if (!state.cart[index]) return;
    const removedName = state.cart[index].name;
    state.cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast(`Removed "${removedName.slice(0, 20)}..." from Bag.`);
  };

  const saveCart = () => {
    localStorage.setItem('mukunda_cart', JSON.stringify(state.cart));
  };

  const updateCartUI = () => {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (DOM.cartCountBadge) {
      DOM.cartCountBadge.textContent = totalCount;
      DOM.cartCountBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    // Free Shipping Progress
    const threshold = SITE_CONFIG.freeShippingThreshold;
    if (DOM.shippingProgressFill && DOM.shippingStatusText) {
      if (subtotal >= threshold) {
        DOM.shippingProgressFill.style.width = '100%';
        DOM.shippingStatusText.innerHTML = `<span><strong>Royal Privilege Unlocked!</strong></span> <span class="text-rose">Free Express Shipping</span>`;
      } else {
        const remaining = threshold - subtotal;
        const percent = Math.min((subtotal / threshold) * 100, 100);
        DOM.shippingProgressFill.style.width = `${percent}%`;
        DOM.shippingStatusText.innerHTML = `<span>Add <strong>${formatCurrency(remaining)}</strong> more for <strong>Free Express Shipping</strong></span>`;
      }
    }

    // Render Cart Items
    if (!DOM.cartItemsList) return;
    if (state.cart.length === 0) {
      DOM.cartItemsList.innerHTML = `
        <div class="empty-cart-message">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <h4>Your Royal Bag is Empty</h4>
          <p>Indulge in Mukunda's authentic handloom sarees and festive collections.</p>
        </div>
      `;
    } else {
      DOM.cartItemsList.innerHTML = state.cart.map((item, idx) => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}">
          <div class="cart-item-details">
            <h5 class="cart-item-name">${item.name}</h5>
            <span class="cart-item-option">Drape: ${item.option}</span>
            <div class="cart-item-bottom">
              <div class="qty-counter">
                <button class="qty-btn dec-btn" data-index="${idx}">−</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn inc-btn" data-index="${idx}">+</button>
              </div>
              <span class="cart-item-price">${formatCurrency(item.price * item.quantity)}</span>
              <span class="cart-item-remove" data-index="${idx}">Remove</span>
            </div>
          </div>
        </div>
      `).join('');

      DOM.cartItemsList.querySelectorAll('.dec-btn').forEach(b => {
        b.addEventListener('click', (e) => updateCartQuantity(parseInt(e.target.dataset.index, 10), -1));
      });
      DOM.cartItemsList.querySelectorAll('.inc-btn').forEach(b => {
        b.addEventListener('click', (e) => updateCartQuantity(parseInt(e.target.dataset.index, 10), 1));
      });
      DOM.cartItemsList.querySelectorAll('.cart-item-remove').forEach(b => {
        b.addEventListener('click', (e) => removeCartItem(parseInt(e.target.dataset.index, 10)));
      });
    }

    // Calculations & Promo
    let discountAmount = 0;
    if (state.appliedPromo) {
      if (state.appliedPromo.discountPercent) {
        discountAmount = Math.round((subtotal * state.appliedPromo.discountPercent) / 100);
      } else if (state.appliedPromo.flatDiscount) {
        discountAmount = Math.min(state.appliedPromo.flatDiscount, subtotal);
      }
    }

    const finalTotal = Math.max(0, subtotal - discountAmount);

    if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = formatCurrency(subtotal);
    if (DOM.cartDiscount) DOM.cartDiscount.textContent = `-${formatCurrency(discountAmount)}`;
    if (DOM.cartDiscountRow) DOM.cartDiscountRow.style.display = discountAmount > 0 ? 'flex' : 'none';
    if (DOM.cartTotal) DOM.cartTotal.textContent = formatCurrency(finalTotal);
  };

  const openCartDrawer = () => {
    DOM.cartDrawer?.classList.add('active');
    DOM.drawerBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeCartDrawer = () => {
    DOM.cartDrawer?.classList.remove('active');
    DOM.drawerBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  };

  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    const promo = SITE_CONFIG.promoCodes[clean];
    if (promo) {
      state.appliedPromo = promo;
      updateCartUI();
      showToast(`Promo "${clean}" Applied! ${promo.description}`);
    } else {
      showToast('Invalid promo code. Try "MUKUNDA10" or "DEALER500".', '⚠️');
    }
  };

  /* ==========================================================================
     9. WISHLIST MANAGEMENT
     ========================================================================== */
  const toggleWishlist = (productId, btnEl) => {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;

    const existingIndex = state.wishlist.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      state.wishlist.splice(existingIndex, 1);
      btnEl?.classList.remove('active');
      btnEl?.querySelector('svg')?.setAttribute('fill', 'none');
      showToast(`Removed from Wishlist`);
    } else {
      state.wishlist.push(prod);
      btnEl?.classList.add('active');
      btnEl?.querySelector('svg')?.setAttribute('fill', '#8C2D38');
      showToast(`Added to your Royal Wishlist`, '💖');
    }

    localStorage.setItem('mukunda_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
  };

  const updateWishlistUI = () => {
    if (DOM.wishlistCountBadge) {
      const count = state.wishlist.length;
      DOM.wishlistCountBadge.textContent = count;
      DOM.wishlistCountBadge.style.display = count > 0 ? 'flex' : 'none';
    }
  };

  /* ==========================================================================
     10. QUICK VIEW MODAL CONTROLLER
     ========================================================================== */
  const openQuickView = (productId) => {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod || !DOM.quickViewModalContent) return;

    state.quickViewProduct = prod;
    state.quickViewSelectedOption = prod.options[0];
    const isDealerMode = state.pricingMode === 'dealer';
    const displayPrice = isDealerMode ? prod.dealerPrice : prod.price;

    const galleryImgs = prod.gallery && prod.gallery.length > 0 ? prod.gallery : [prod.images.primary, prod.images.secondary];

    const whatsappText = encodeURIComponent(`Namaste Sowji Garu! I want to order from Brand Mukunda:\n*Saree:* ${prod.name}\n*Price:* ₹${displayPrice}\n*Ref Image:* ${prod.images.primary}`);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappText}`;

    DOM.quickViewModalContent.innerHTML = `
      <button class="modal-close-btn" id="modalCloseAction">&times;</button>
      <div class="modal-inner-grid">
        <div class="modal-gallery-wrap">
          <img class="modal-main-img" id="modalMainImg" src="${prod.images.primary}" alt="${prod.name}">
          <div class="modal-thumb-row">
            ${galleryImgs.map((img, i) => `
              <img class="modal-thumb ${i === 0 ? 'active' : ''}" src="${img}" alt="Angle ${i+1}">
            `).join('')}
          </div>
        </div>
        <div class="modal-details-wrap">
          <span class="modal-fabric-tag">${prod.fabric} • Handloom Pure</span>
          <h2 class="modal-product-title">${prod.name}</h2>
          
          <div class="product-rating" style="margin-bottom: 1rem;">
            <span class="star-fill">★</span>
            <span><strong>${prod.rating}</strong> (${prod.reviewsCount} verified reviews)</span>
          </div>

          <div class="modal-price-box">
            <span class="modal-price">${formatCurrency(displayPrice)}</span>
            <span class="original-price">${formatCurrency(prod.originalPrice)}</span>
            <span class="dealer-margin-pill" style="margin-left: 0.5rem;">
              ₹${prod.dealerDiscount} Reseller Margin
            </span>
          </div>

          <div class="modal-specs-box">
            <div class="spec-line">
              <span class="spec-title">Description:</span>
              <span>${prod.description}</span>
            </div>
            <div class="spec-line">
              <span class="spec-title">Blouse:</span>
              <span>${prod.blouseIncluded}</span>
            </div>
            <div class="spec-line">
              <span class="spec-title">Care Guide:</span>
              <span>${prod.care}</span>
            </div>
          </div>

          <div class="modal-option-select-wrap">
            <label class="modal-option-label">Choose Drape / Stitching:</label>
            <div class="modal-chips-row">
              ${prod.options.map((opt, i) => `
                <button class="modal-chip ${i === 0 ? 'active' : ''}" data-opt="${opt}">${opt}</button>
              `).join('')}
            </div>
          </div>

          <div class="modal-cta-row">
            <button class="btn-regal-shimmer" id="modalAddBagBtn" style="width: 100%;">
              <span>Add to Royal Bag • ${formatCurrency(displayPrice)}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp-hero" style="width: 100%; justify-content: center;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/></svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    `;

    document.getElementById('modalCloseAction')?.addEventListener('click', closeQuickView);

    // Thumbnail Switcher
    const mainImg = document.getElementById('modalMainImg');
    DOM.quickViewModalContent.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        DOM.quickViewModalContent.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        mainImg.src = e.target.src;
      });
    });

    // Option Chips
    DOM.quickViewModalContent.querySelectorAll('.modal-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        DOM.quickViewModalContent.querySelectorAll('.modal-chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        state.quickViewSelectedOption = e.target.dataset.opt;
      });
    });

    // Stitching Services Drawer Trigger
    document.getElementById('quickViewStitchingBtn')?.addEventListener('click', () => {
      if (window.openStitchingDrawerForProduct) {
        window.openStitchingDrawerForProduct(prod);
      }
    });

    // Modal Add Bag
    document.getElementById('modalAddBagBtn')?.addEventListener('click', () => {
      addToCart({ ...prod, price: displayPrice }, state.quickViewSelectedOption || prod.options[0]);
      closeQuickView();
    });

    DOM.quickViewModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    DOM.quickViewModal?.classList.remove('active');
    document.body.style.overflow = '';
  };

  /* ==========================================================================
     11. SEARCH OVERLAY
     ========================================================================== */
  const initSearchOverlay = () => {
    const openSearch = () => {
      DOM.searchOverlay?.classList.add('active');
      DOM.searchOverlayInput?.focus();
    };

    const closeSearch = () => {
      DOM.searchOverlay?.classList.remove('active');
    };

    DOM.searchTrigger?.addEventListener('click', openSearch);
    DOM.searchOverlayClose?.addEventListener('click', closeSearch);

    DOM.searchOverlayInput?.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) return;

      const matches = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.fabric.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );

      if (DOM.searchSuggestions) {
        DOM.searchSuggestions.innerHTML = matches.slice(0, 6).map(m => `
          <span class="search-chip" data-id="${m.id}">${m.name}</span>
        `).join('');

        DOM.searchSuggestions.querySelectorAll('.search-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            const id = chip.dataset.id;
            closeSearch();
            openQuickView(id);
          });
        });
      }
    });
  };

  /* ==========================================================================
     12. SCROLL REVEALS & STICKY HEADER
     ========================================================================== */
  const observeRevealElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.reveal-fade:not(.revealed)').forEach(el => observer.observe(el));
  };

  const initScrollHeader = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        DOM.header?.classList.add('scrolled');
      } else {
        DOM.header?.classList.remove('scrolled');
      }
    }, { passive: true });
  };

  /* ==========================================================================
     13. WHATSAPP CONCIERGE DIRECT INTEGRATION
     ========================================================================== */
  const initWhatsAppConcierge = () => {
    const waButtons = document.querySelectorAll('[data-whatsapp]');
    waButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const msg = encodeURIComponent(SITE_CONFIG.whatsappDefaultMsg);
        const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;
        window.open(url, '_blank');
      });
    });
  };

  /* ==========================================================================
     14. GLOBAL EVENT LISTENERS & INITIALIZATION
     ========================================================================== */
  DOM.cartTrigger?.addEventListener('click', openCartDrawer);
  DOM.drawerCloseBtn?.addEventListener('click', closeCartDrawer);
  DOM.drawerBackdrop?.addEventListener('click', closeCartDrawer);

  DOM.promoApplyBtn?.addEventListener('click', () => {
    const code = DOM.promoInput?.value || '';
    if (code) applyPromoCode(code);
  });

  DOM.quickViewModal?.addEventListener('click', (e) => {
    if (e.target === DOM.quickViewModal) closeQuickView();
  });

  DOM.mobileMenuTrigger?.addEventListener('click', () => {
    DOM.mobileDrawer?.classList.toggle('active');
    DOM.drawerBackdrop?.classList.toggle('active');
  });

  DOM.mobileDrawerClose?.addEventListener('click', () => {
    DOM.mobileDrawer?.classList.remove('active');
    DOM.drawerBackdrop?.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeQuickView();
      DOM.searchOverlay?.classList.remove('active');
      DOM.mobileDrawer?.classList.remove('active');
    }
  });

  // App Initialization
  initHeroCarousel();
  initPricingModeToggle();
  initOccasionTabs();
  renderBentoGrid('sarees');
  renderDualFeatureCards();
  initProductFilters();
  renderProducts('all');
  renderFabrics();
  renderReviews();
  updateCartUI();
  updateWishlistUI();
  initSearchOverlay();
  initScrollHeader();
  observeRevealElements();
  initWhatsAppConcierge();
});

