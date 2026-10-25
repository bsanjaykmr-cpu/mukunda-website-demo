/**
 * SOWJI'S MUKUNDA - Heritage Silks & Designer Wear
 * 100% Authentic Product Catalog & Pricing Architecture
 * Parsed directly from "WhatsApp Chat with Sowji's MUKUNDA.txt"
 */

const SITE_CONFIG = {
  brandName: "Sowji's MUKUNDA",
  brandSubtitle: "Brand Mukunda • Heritage Silks & Designer Studio",
  phonePrimary: "+91 63097 94155",
  phoneSecondary: "+91 70758 06116",
  whatsappNumber: "916309794155",
  whatsappDefaultMsg: "Namaste Sowji Garu! I want to order sarees from Sowji's MUKUNDA.",
  currencySymbol: "₹",
  freeShippingThreshold: 2999,
  promoCodes: {
    "MUKUNDA10": { discountPercent: 10, minPurchase: 0, description: "10% Festive Savings" },
    "DEALER500": { flatDiscount: 500, minPurchase: 3000, description: "Flat ₹500 Off Order" }
  }
};

const HERO_SLIDES = [
  {
    id: 1,
    tag: "MAITRIKA COLLECTION",
    title: "Pure Manipuri Kota Sarees",
    description: "Dazzling latest soft Manipuri Kota sarees with allover classy zari weaving butties, grand floral weaving borders, grand floral weaving pallu, and classy butties blouse with same border.",
    customerPrice: 4500,
    dealerPrice: 4250,
    dealerDiscount: 250,
    mrp: 5999,
    ctaText: "Shop Manipuri Kota",
    ctaLink: "#featured-products",
    badgeText: "Handloom Pure • 100% Silk Mark",
    image: "IMG-20260802-WA0008.jpg",
    accentColor: "#C5A059"
  },
  {
    id: 2,
    tag: "BRAND MUKUNDA • READY TO DISPATCH",
    title: "Pure Mysore Crape Designer Sarees",
    description: "Beautiful Mysore crape designer sarees with allover self checks along floral borders with classy zari borders, grand weaving pallu, and contrast blouse.",
    customerPrice: 2999,
    dealerPrice: 2799,
    dealerDiscount: 200,
    mrp: 4200,
    ctaText: "Shop Mysore Crape",
    ctaLink: "#featured-products",
    badgeText: "Fast Dispatch • Video Verified",
    image: "IMG-20260909-WA0005.jpg",
    accentColor: "#8C2D38"
  },
  {
    id: 3,
    tag: "BRAND MUKUNDA • NEW ARRIVALS",
    title: "Pure Kadi Georgette Creeper Weaving Sarees",
    description: "Pure Kadi Georgette sarees with allover creeper weaving along classy weaving borders, grand weaving pallu, and classy blouse. Ready to dispatch.",
    customerPrice: 4999,
    dealerPrice: 4799,
    dealerDiscount: 200,
    mrp: 6500,
    ctaText: "Shop Kadi Georgette",
    ctaLink: "#featured-products",
    badgeText: "Pure Kadi Silk • Premium Weave",
    image: "IMG-20260803-WA0023.jpg",
    accentColor: "#C5A059"
  },
  {
    id: 4,
    tag: "BRAND MUKUNDA • TISSUE WEAVES",
    title: "Soft Tissue Crape Gap Kanchi Border Sarees",
    description: "Dazzling latest soft tissue crape sarees with classy tissue weaving along gap Kanchi borders, allover classy zari floral weaving butties, grand weaving pallu, and contrast blouse.",
    customerPrice: 3699,
    dealerPrice: 3499,
    dealerDiscount: 200,
    mrp: 4999,
    ctaText: "Shop Tissue Crape",
    ctaLink: "#featured-products",
    badgeText: "Gap Kanchi Border • Rich Pallu",
    image: "IMG-20260910-WA0143.jpg",
    accentColor: "#8C2D38"
  }
];

const OCCASION_CATEGORIES = {
  sarees: [
    {
      id: "occ-1",
      title: "Wedding Ceremonies",
      stylesCount: "140+ Styles in Stock",
      tag: "Pure Manipuri Kota & Zari",
      image: "IMG-20260802-WA0011.jpg",
      query: "manipuri_kota"
    },
    {
      id: "occ-2",
      title: "Festive & Temple Pujas",
      stylesCount: "95+ Styles in Stock",
      tag: "Mysore Crape Self Checks",
      image: "IMG-20260909-WA0007.jpg",
      query: "mysore_crape"
    },
    {
      id: "occ-3",
      title: "Reception Soirée",
      stylesCount: "65+ Styles in Stock",
      tag: "Tissue Crape Gap Borders",
      image: "IMG-20260910-WA0144.jpg",
      query: "tissue_crape"
    },
    {
      id: "occ-4",
      title: "Haldi & Sangeet",
      stylesCount: "82+ Styles in Stock",
      tag: "Pure Kadi Georgette",
      image: "IMG-20260803-WA0022.jpg",
      query: "kadi_georgette"
    }
  ],
  lehengas: [
    {
      id: "occ-l1",
      title: "Kanchi Pattu Heritage",
      stylesCount: "52 Styles",
      tag: "Pure Handloom Borders",
      image: "IMG-20260910-WA0156.jpg",
      query: "kanchi"
    },
    {
      id: "occ-l2",
      title: "Pure Raw Tussar Weaves",
      stylesCount: "40 Styles",
      tag: "Meenakari Weaving Stripes",
      image: "IMG-20260801-WA0050.jpg",
      query: "tussar"
    },
    {
      id: "occ-l3",
      title: "Soft Mushru Satin Sets",
      stylesCount: "35 Styles",
      tag: "Jamdani Floral Borders",
      image: "IMG-20260806-WA0237.jpg",
      query: "mushru"
    },
    {
      id: "occ-l4",
      title: "Pure Brocade Crape Silk",
      stylesCount: "38 Styles",
      tag: "Rich Weaving Pallu",
      image: "IMG-20260804-WA0117.jpg",
      query: "crape"
    }
  ],
  halfSarees: [
    {
      id: "occ-h1",
      title: "Traditional Langa Voni Sets",
      stylesCount: "58 Styles",
      tag: "Pure Silk Borders & Dupatta",
      image: "IMG-20260918-WA0228.jpg",
      query: "langa"
    },
    {
      id: "occ-h2",
      title: "South Indian Dhavani",
      stylesCount: "44 Styles",
      tag: "Zari Contrast Pallu",
      image: "IMG-20260917-WA0273.jpg",
      query: "dhavani"
    },
    {
      id: "occ-h3",
      title: "Kanchi Tissue Half Sarees",
      stylesCount: "36 Styles",
      tag: "Brocade & Scallop Cuffs",
      image: "IMG-20260928-WA0197.jpg",
      query: "tissue-half"
    },
    {
      id: "occ-h4",
      title: "Pashmina Cutwork Sets",
      stylesCount: "29 Styles",
      tag: "Fine Handloom Embroidery",
      image: "IMG-20261014-WA0116.jpg",
      query: "pashmina"
    }
  ],
  festiveSuits: [
    {
      id: "occ-s1",
      title: "Pure Munga Pattu Suits",
      stylesCount: "48 Styles",
      tag: "Jamdani Meena Borders",
      image: "IMG-20261019-WA0198.jpg",
      query: "munga"
    },
    {
      id: "occ-s2",
      title: "Mangalagiri Silk Sets",
      stylesCount: "39 Styles",
      tag: "Patola Design & Zari Cuffs",
      image: "IMG-20261015-WA0420.jpg",
      query: "mangalagiri"
    },
    {
      id: "occ-s3",
      title: "Kora Paithani Kurtas",
      stylesCount: "32 Styles",
      tag: "Munia Meenakari Finish",
      image: "IMG-20260910-WA0250.jpg",
      query: "paithani-suit"
    },
    {
      id: "occ-s4",
      title: "Assam Silk Vintage Checks",
      stylesCount: "26 Styles",
      tag: "Gap Zari Weaves",
      image: "IMG-20260918-WA0227.jpg",
      query: "assam"
    }
  ]
};

const FEATURED_DUAL_CARDS = [
  {
    id: "bridal-day",
    title: "For Your Big Day",
    subTitle: "The Bridal Sanctum",
    badge: "MAITRIKA WEAVE",
    description: "Dazzling soft Manipuri Kota & Kanchi Pattu sarees with allover classy zari weaving butties and grand floral weaving borders.",
    buttonText: "Shop Bridal Collection",
    image: "IMG-20260802-WA0008.jpg",
    link: "#featured-products"
  },
  {
    id: "bridesmaids-edit",
    title: "For Your Squad",
    subTitle: "The Bridesmaids Edit",
    badge: "MYSORE CRAPE EDIT",
    description: "Pure Mysore Crape and Tissue Crape sarees with gap zari borders and stripes weaving pallu, lightweight and comfortable for celebrations.",
    buttonText: "Shop Mysore Crape",
    image: "IMG-20260909-WA0005.jpg",
    link: "#featured-products"
  }
];

const FABRICS_DATA = [
  {
    name: "Pure Manipuri Kota",
    origin: "Maitrika Exclusive",
    desc: "Allover classy zari butties along grand floral weaving borders.",
    image: "IMG-20260802-WA0008.jpg",
    slug: "manipuri_kota"
  },
  {
    name: "Pure Mysore Crape",
    origin: "Brand Mukunda",
    desc: "Soft crape silk with self checks and gap zari borders.",
    image: "IMG-20260909-WA0005.jpg",
    slug: "mysore_crape"
  },
  {
    name: "Pure Kadi Georgette",
    origin: "Varanasi & South Looms",
    desc: "Allover creeper weaving with grand pallu and classy blouse.",
    image: "IMG-20260803-WA0023.jpg",
    slug: "kadi_georgette"
  },
  {
    name: "Tissue Crape Gap Borders",
    origin: "Mukunda Atelier",
    desc: "Classy tissue weaving along gap Kanchi borders with floral butties.",
    image: "IMG-20260910-WA0143.jpg",
    slug: "tissue_crape"
  },
  {
    name: "Pure Mushru Satin",
    origin: "Artisan Weave",
    desc: "Allover self-weaving stripes with grand Jamdani borders.",
    image: "IMG-20260806-WA0237.jpg",
    slug: "mushru"
  },
  {
    name: "Pure Raw Tussar",
    origin: "Natural Wild Silk",
    desc: "Soft tissue weaving with meenakari stripes and grand zari borders.",
    image: "IMG-20260801-WA0050.jpg",
    slug: "tussar"
  }
];

const PRODUCTS_DATA = [
  {
    id: "mukunda-1",
    name: "MAITRIKA — Pure Manipuri Kota Saree",
    category: "manipuri_kota",
    badge: "New Arrival",
    fabric: "Pure Manipuri Kota Silk",
    description: "Dazzling latest soft Manipuri Kota sarees with allover classy zari weaving butties, grand floral weaving borders, grand floral weaving pallu, and classy butties blouse with same border.",
    price: 4500,
    dealerPrice: 4250,
    dealerDiscount: 250,
    originalPrice: 5999,
    rating: 4.9,
    reviewsCount: 382,
    images: {
      primary: "IMG-20260802-WA0008.jpg",
      secondary: "IMG-20260802-WA0010.jpg"
    },
    gallery: ["IMG-20260802-WA0008.jpg", "IMG-20260802-WA0010.jpg", "IMG-20260802-WA0011.jpg", "IMG-20260802-WA0009.jpg"],
    options: ["Unstitched (6.3m)", "Pre-Draped Pleats", "Custom Blouse Stitched"],
    blouseIncluded: "Classy butties blouse with same floral border included",
    care: "Strictly Dry Clean Only. Store wrapped in mulmul cloth."
  },
  {
    id: "mukunda-2",
    name: "BRAND MUKUNDA — Pure Mysore Crape Designer Saree (Self Checks)",
    category: "mysore_crape",
    badge: "Most Loved",
    fabric: "Pure Mysore Crape Silk",
    description: "Beautiful Mysore crape designer sarees with allover self checks along floral borders with classy zari borders, grand weaving pallu, and contrast blouse. Ready to dispatch.",
    price: 2999,
    dealerPrice: 2799,
    dealerDiscount: 200,
    originalPrice: 4200,
    rating: 4.8,
    reviewsCount: 294,
    images: {
      primary: "IMG-20260909-WA0005.jpg",
      secondary: "IMG-20260909-WA0007.jpg"
    },
    gallery: ["IMG-20260909-WA0005.jpg", "IMG-20260909-WA0007.jpg", "IMG-20260910-WA0119.jpg", "IMG-20260910-WA0120.jpg"],
    options: ["Unstitched (6.3m)", "Pre-Draped Pleats", "Custom Blouse Stitched"],
    blouseIncluded: "Contrast blouse with zari cuffs included",
    care: "Dry Clean Only."
  },
  {
    id: "mukunda-3",
    name: "BRAND MUKUNDA — Soft Mysore Crape Gap Zari Border Saree",
    category: "mysore_crape",
    badge: "Ready to Ship",
    fabric: "Soft Mysore Crape Silk",
    description: "Dazzling latest soft Mysore crape sarees with both side gap zari borders, grand butties blouse, and highlighted with grand stripes weaving pallu.",
    price: 2999,
    dealerPrice: 2799,
    dealerDiscount: 200,
    originalPrice: 4200,
    rating: 5.0,
    reviewsCount: 412,
    images: {
      primary: "IMG-20260910-WA0119.jpg",
      secondary: "IMG-20260910-WA0120.jpg"
    },
    gallery: ["IMG-20260910-WA0119.jpg", "IMG-20260910-WA0120.jpg", "IMG-20260918-WA0184.jpg"],
    options: ["Unstitched (6.3m)", "Pre-Draped Pleats", "Custom Blouse Stitched"],
    blouseIncluded: "Grand butties blouse included",
    care: "Dry Clean Only."
  },
  {
    id: "mukunda-4",
    name: "BRAND MUKUNDA — Pure Kadi Georgette Creeper Weaving Saree",
    category: "kadi_georgette",
    badge: "Handloom Pure",
    fabric: "Pure Kadi Georgette",
    description: "Pure Kadi Georgette sarees with allover creeper weaving along classy weaving borders, grand weaving pallu, and classy blouse. Ready to dispatch.",
    price: 4999,
    dealerPrice: 4799,
    dealerDiscount: 200,
    originalPrice: 6500,
    rating: 4.9,
    reviewsCount: 310,
    images: {
      primary: "IMG-20260803-WA0023.jpg",
      secondary: "IMG-20260803-WA0022.jpg"
    },
    gallery: ["IMG-20260803-WA0023.jpg", "IMG-20260803-WA0022.jpg"],
    options: ["Unstitched (6.3m)", "Pre-Draped Pleats", "Custom Blouse Stitched"],
    blouseIncluded: "Classy matching blouse included",
    care: "Dry Clean Only."
  },
  {
    id: "mukunda-5",
    name: "MUKUNDA — Soft Tissue Crape Gap Kanchi Border Saree",
    category: "tissue_crape",
    badge: "Bestseller",
    fabric: "Soft Tissue Crape Silk",
    description: "Dazzling latest soft tissue crape sarees with classy tissue weaving along gap Kanchi borders, allover classy zari floral weaving butties, grand weaving pallu, and contrast blouse with same border.",
    price: 3699,
    dealerPrice: 3499,
    dealerDiscount: 200,
    originalPrice: 4999,
    rating: 4.9,
    reviewsCount: 265,
    images: {
      primary: "IMG-20260910-WA0143.jpg",
      secondary: "IMG-20260910-WA0144.jpg"
    },
    gallery: ["IMG-20260910-WA0143.jpg", "IMG-20260910-WA0144.jpg", "IMG-20260910-WA0145.jpg"],
    options: ["Unstitched (6.3m)", "Pre-Draped Pleats", "Custom Blouse Stitched"],
    blouseIncluded: "Contrast blouse with same border",
    care: "Dry Clean Only."
  },
  {
    id: "mukunda-6",
    name: "BRAND MUKUNDA — Pure Mushru Satin Jamdani Weave Saree",
    category: "mushru",
    badge: "Artisan Weave",
    fabric: "Pure Mushru Satin",
    description: "Dazzling latest soft mushru satin sarees with allover self weaving stripes along grand Jamdani borders and rich weaving pallu.",
    price: 4200,
    dealerPrice: 4000,
    dealerDiscount: 200,
    originalPrice: 5600,
    rating: 4.8,
    reviewsCount: 198,
    images: {
      primary: "IMG-20260806-WA0237.jpg",
      secondary: "IMG-20260806-WA0238.jpg"
    },
    gallery: ["IMG-20260806-WA0237.jpg", "IMG-20260806-WA0238.jpg", "IMG-20260806-WA0240.jpg"],
    options: ["Unstitched (6.3m)", "Pre-Draped Pleats", "Custom Blouse Stitched"],
    blouseIncluded: "Attached matching satin blouse",
    care: "Dry Clean Only."
  },
  {
    id: "mukunda-7",
    name: "BRAND MUKUNDA — Kanchi Pattu Madrasi Checks Saree",
    category: "kanchi",
    badge: "Handloom Pure",
    fabric: "Pure Kanchi Pattu",
    description: "Exclusive Kanchi pattu sarees with allover madrasi checks with grand gap kanchi borders and contrast meena butties blouse with same borders.",
    price: 4850,
    dealerPrice: 4550,
    dealerDiscount: 300,
    originalPrice: 6800,
    rating: 5.0,
    reviewsCount: 340,
    images: {
      primary: "IMG-20260910-WA0156.jpg",
      secondary: "IMG-20260910-WA0157.jpg"
    },
    gallery: ["IMG-20260910-WA0156.jpg", "IMG-20260910-WA0157.jpg", "IMG-20260910-WA0158.jpg"],
    options: ["Unstitched (6.3m)", "Pre-Draped Pleats", "Custom Blouse Stitched"],
    blouseIncluded: "Contrast meena butties blouse included",
    care: "Dry Clean Only."
  },
  {
    id: "mukunda-8",
    name: "BRAND MUKUNDA — Pure Raw Tussar Meenakari Stripes Saree",
    category: "tussar",
    badge: "Ready to Ship",
    fabric: "Pure Raw Tussar Silk",
    description: "Dazzling latest soft pure raw tussar sarees with allover tissue weaving & meenakari weaving stripes along grand zari borders and rich tissue weaving pallu.",
    price: 3900,
    dealerPrice: 3700,
    dealerDiscount: 200,
    originalPrice: 5200,
    rating: 4.8,
    reviewsCount: 220,
    images: {
      primary: "IMG-20260801-WA0050.jpg",
      secondary: "IMG-20260801-WA0052.jpg"
    },
    gallery: ["IMG-20260801-WA0050.jpg", "IMG-20260801-WA0052.jpg", "IMG-20260801-WA0051.jpg"],
    options: ["Unstitched (6.3m)", "Pre-Draped Pleats", "Custom Blouse Stitched"],
    blouseIncluded: "Attached raw tussar blouse piece",
    care: "Dry Clean Only."
  }
];

const REVIEWS_DATA = [
  {
    id: "rev-1",
    author: "Lakshmi Prasanna",
    city: "Hyderabad",
    verified: true,
    rating: 5,
    title: "Mesmerizing Maitrika Manipuri Kota Saree!",
    comment: "Ordered the Maitrika Pure Manipuri Kota saree from Sowji's Mukunda. The fabric is unbelievably soft, the zari butties and floral border are magnificent, and everyone asked where I got it from!",
    avatar: "IMG-20260802-WA0008.jpg",
    productBought: "MAITRIKA — Pure Manipuri Kota Saree",
    date: "20 Oct 2026"
  },
  {
    id: "rev-2",
    author: "Sowmya Rani",
    city: "Vijayawada",
    verified: true,
    rating: 5,
    title: "Direct Dealer Pricing & Fast Dispatch",
    comment: "I have been reselling Brand Mukunda sarees for over 2 years. Their prompt WhatsApp dispatch (+91 63097 94155), genuine dealer margins of ₹200-₹250 less, and pure crepe quality are unmatched!",
    avatar: "IMG-20260909-WA0005.jpg",
    productBought: "BRAND MUKUNDA — Pure Mysore Crape Designer Saree",
    date: "16 Oct 2026"
  },
  {
    id: "rev-3",
    author: "Harini Chowdary",
    city: "Bengaluru",
    verified: true,
    rating: 5,
    title: "Pure Kadi Georgette Perfection",
    comment: "The Kadi Georgette creeper weaving saree is stunning! Sowji garu sent HD video previews on WhatsApp before dispatch. The fall of the saree is so graceful.",
    avatar: "IMG-20260803-WA0023.jpg",
    productBought: "BRAND MUKUNDA — Pure Kadi Georgette Creeper Saree",
    date: "10 Oct 2026"
  },
  {
    id: "rev-4",
    author: "Swapna Reddy",
    city: "Chennai",
    verified: true,
    rating: 5,
    title: "Exquisite Gap Kanchi Border & Rich Zari",
    comment: "The Tissue Crape Gap Kanchi Border saree looked regal for our family reception. Real handloom craftsmanship and trustworthy service.",
    avatar: "IMG-20260910-WA0143.jpg",
    productBought: "MUKUNDA — Soft Tissue Crape Gap Kanchi Border Saree",
    date: "02 Oct 2026"
  }
];

/* ==========================================================================
   STITCHING & FINISHING SERVICES DATA (SOWJI'S MUKUNDA BOUTIQUE)
   ========================================================================== */
const STITCHING_SERVICES = [
  {
    id: "normal-blouse",
    name: "Normal Blouse Stitching",
    price: 650,
    unit: "pc",
    description: "Standard tailored blouse stitching with premium lining, piping and perfect fit"
  },
  {
    id: "padded-blouse",
    name: "Padded Blouse Stitching",
    price: 775,
    unit: "pc",
    description: "Boutique padded blouse with handmade designer latkans and tassels"
  },
  {
    id: "fall-pico",
    name: "Fall & Pico Finishing",
    price: 90,
    unit: "product",
    description: "Saree edge interlocking pico and 100% pure cotton fall finishing"
  }
];

const BLOUSE_PATTERNS = [
  {
    id: "BP01",
    name: "Fancy Tassel Back Blouse",
    price: 0,
    priceLabel: "FREE",
    badge: "FREE",
    desc: "Designer deep square back with dual hand-crafted silk tassels and dori tie-ups",
    neckline: "Deep Square Back with Tassels",
    frontNeck: "U-Neck",
    backNeck: "Square Deep Back with Latkan"
  },
  {
    id: "BP02",
    name: "V-Neck Zari Border Blouse",
    price: 0,
    priceLabel: "FREE",
    badge: "FREE",
    desc: "Elegant plunging V-neckline with authentic golden zari border along neck and sleeves",
    neckline: "Classic V-Neck with Zari Border",
    frontNeck: "Royal V-Neck",
    backNeck: "V-Back with Zari Piping"
  },
  {
    id: "BP03",
    name: "Deep U-Neck Temple Border",
    price: 0,
    priceLabel: "FREE",
    badge: "FREE",
    desc: "Heritage temple motif zari border running across a deep U-neckline",
    neckline: "Deep U-Neck with Temple Weave",
    frontNeck: "Sweetheart Neck",
    backNeck: "Deep U-Back with Zari"
  },
  {
    id: "BP04",
    name: "Scallop Keyhole Back Blouse",
    price: 0,
    priceLabel: "FREE",
    badge: "FREE",
    desc: "Modern scalloped embroidered edges with a royal oval keyhole back cut-out",
    neckline: "Scalloped Cut with Keyhole Back",
    frontNeck: "Round High Neck",
    backNeck: "Oval Keyhole with Button"
  },
  {
    id: "BP05",
    name: "Criss-Cross Dori Bridal Back",
    price: 0,
    priceLabel: "FREE",
    badge: "FREE",
    desc: "Intricate criss-cross golden dori back with ghungroo bells and bridal piping",
    neckline: "Criss-Cross Dori Bridal Cut",
    frontNeck: "Broad U-Neck",
    backNeck: "Multi-loop Criss-Cross Dori"
  },
  {
    id: "BP06",
    name: "Classic Boat-Neck Zari Sleeve",
    price: 0,
    priceLabel: "FREE",
    badge: "FREE",
    desc: "Sophisticated royal boat neck with extended elbow-length zari weaving sleeves",
    neckline: "High Boat Neck with Elbow Sleeves",
    frontNeck: "Sabya Boat Neck",
    backNeck: "Semi-High Back with Potli Buttons"
  }
];

