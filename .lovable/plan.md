
# Medico - Medical Ecommerce UI Showcase

## Project Overview
A pixel-perfect recreation of the **Medico** medical/pharmacy ecommerce website based on your PDF designs. This will be a UI showcase with placeholder content and all specified animations. I'll also design a custom Medico logo that matches the teal/medical brand identity.

---

## Design System

### Brand Colors
- **Primary**: `#1fb5a8` (Teal - used in header, buttons, accents)
- **Secondary**: `#e8f7f6` (Light teal background)
- **Accent**: `#ff8a00` (Orange - for badges like SALE, HOT)
- **Text**: Dark gray/black for readability
- **Background**: White with soft shadows

### Typography & Style
- Clean, modern medical aesthetic
- Rounded cards with soft shadows
- Consistent 8px spacing system
- Desktop-first, fully responsive

---

## Pages & Components

### 🔷 Global Components (Used Across All Pages)

**1. Header (Sticky)**
- Top bar: Cashback promo text + Track Order + Language dropdown + Currency selector
- Main header: Medico logo (custom designed) + Category dropdown + Search bar + "Need Help?" phone number
- Icon bar: Account, Wishlist (with badge), Cart (with badge)
- Navigation: All Categories, Home, Shop, Categories (SALE badge), Products (HOT badge), Top Deals, Elements, Best Deals
- Sticky behavior with backdrop blur
- Hover scale animations on icons

**2. Footer**
- Newsletter signup section ($20 discount offer)
- 4-column link grid: Quick Links, Products, Your Account, About Information
- Medico logo with tagline + App Store/Google Play buttons
- Social icons (Facebook, X, YouTube, Instagram, Pinterest) with hover scale
- Payment method icons (Visa, PayPal, Mastercard, etc.)
- Copyright notice

---

### 🏠 Home Page (Exact Section Order)

1. **Hero Section**
   - Left: COVID-19 vaccine headline + "SHOP NOW" CTA button
   - Right: Doctor/nurse image
   - Animations: Text fade-up, image fade-left

2. **Promo Banners (2 cards)**
   - Mask banner + Stethoscope banner
   - Hover: Image zoom effect

3. **Popular Categories**
   - Icon grid: Capsules, Medical Mask, Thermometer, Blood Pressure, Syringe, Stethoscope
   - Hover: Lift animation

4. **Info Strip**
   - Secure delivery messaging + CTA button

5. **Latest Products Grid**
   - Product cards with: Image, Name, Price (with discount strikethrough), Star rating, "ADD TO CART" button
   - Some cards with countdown timers (Deal badges)
   - Hover: Image zoom + button slide-up

6. **Deal of the Week (2 featured products)**
   - Large discount badge (-15%, -14%)
   - Countdown timer (Days, Hours, Min, Sec)
   - Pulse animation on seconds

7. **Commitment Banner**
   - Doctor image + Healthcare commitment heading + CTA
   - Fade-right animation

8. **Featured Products Carousel**
   - Product cards with timers
   - Navigation arrows

9. **Trust Strip (4 icons)**
   - Secure Shipping, Easy Refund, Best Offers, 24/7 Support

10. **Testimonials Slider**
    - Customer reviews with photos
    - Auto-slide with fade transition

11. **Popular Brands**
    - Logo grid (grayscale → color on hover)

12. **Promo Banner**
    - Pills/medication image + CTA

13. **Gallery Section (3 images)**
    - Medical imagery grid

---

### 🛒 Shop Page

**Layout**: Left sidebar (filters) + Right main content (products)

**Left Sidebar Filters:**
- Category accordion (Baby Care, Beauty Care, Health Care, etc.)
- Filter By section:
  - Categories checkboxes (Blood Test, Hair & Skin Care, Temperature Reader, Thermometer)
  - Availability (In stock, Not available)
  - Price range slider ($16 - $62)
  - Color swatches (Orange, Blue, Pink, Yellow, Green, Purple, Gray)
  - Size checkboxes (50ml, 100ml, 250ml, 500ml, Small, Medium, Large, Extra Large)
  - Brand checkboxes (Cartify, EcomZone, EcoShop, etc.)
  - Selections (Discounted, New product)
  - Condition (New, Refurbished, Used)

**Main Content:**
- Breadcrumb navigation (Home / Shop)
- Description text about the store
- Subcategories icons row
- Grid controls: View toggles (grid/list) + "24 products" count + Sort dropdown
- Product grid (4 columns)
- Product cards with countdown timers for deals
- Pagination (1, 2, →)
- About section with image

**Animations:**
- Fade-up on product cards
- Hover lift on cards

---

### 📦 Product Detail Page

**Layout**: Breadcrumb → Product Section → Tabs → Related Products → Reviews

**Product Section (2 columns):**
- **Left**: Main image gallery + Thumbnail carousel with arrows
- **Right**: 
  - Brand name (EcomZone)
  - Product title
  - Price with discount ($50.00 → $46.50, Save 7%)
  - Star rating + review count
  - Feature bullets
  - Size selector (Small, Medium, Large)
  - Color selector (swatches)
  - Countdown timer ("Hurry up! Sale ends in:")
  - Quantity selector (+/-)
  - "ADD TO CART" button (teal outline)
  - "BUY NOW" button (teal filled)
  - Add to Wishlist / Add to Compare
  - Stock status badge
  - Social share icons
  - Policy info (Free Shipping, Estimated Delivery, Security)

**Tabs Section:**
- Description tab
- Product Details tab (General Information table)

**Related Products:**
- "You might also like" carousel
- "5 other products in the same category" grid

**Reviews Section:**
- Customer reviews with star ratings, dates, usernames
- Like/dislike buttons
- "WRITE YOUR REVIEW" CTA button

**Animations:**
- Image hover zoom
- Button hover lift
- Tab transitions

---

### ℹ️ About Page

**Layout**: Title → Tabs → Content Sections

**Sections:**
1. **Page Title Bar** (teal background with breadcrumb)

2. **Tabs Section**
   - Development | Qualified Team | Strategy tabs
   - Tab content with Lorem Ipsum text

3. **Image Grid (2x2)**
   - Woman with phone + Delivery truck
   - Woman at desk + Shop Online illustration

4. **Accordion Section**
   - Heading: "Inspiration, innovation, and opportunities"
   - Illustration on right
   - Expandable items: Business's Vision, Our Mission, Our Support

5. **Feature Cards (3 columns)**
   - Submit a Task (checkbox icon)
   - Send Message (chat icon)
   - Trusted Experience (people icon)

6. **Stats Counter Section** (image background)
   - 18+ Years
   - 200+ Employees
   - 85% Page Views
   - 27+ Awards
   - Counter animation on scroll

7. **Contact CTA Section**
   - "About us info" heading
   - "CLICK HERE TO CONTACT US" button

---

### 📞 Contact Page

**Layout**: Title Bar → Main Content (Map + Form) → Info Cards

**Sections:**
1. **Page Title Bar** (teal background with breadcrumb)

2. **Main Content (2 columns)**
   - **Left**: Google Maps embed (London Eye location marker)
   - **Right**: Contact form
     - "Get In Touch With Us" heading
     - Subject dropdown (Customer Service)
     - Email input
     - File attachment button
     - Message textarea
     - Terms checkbox
     - "SEND" button

3. **Info Cards Row (4 cards)**
   - Address: 50-UTC, Beside Orange Hospital
   - Phone: +00 123-456-789
   - Email: demo@example.com
   - Hours: 10:00AM - 6:00PM

**Animations:**
- Input focus ring
- Button hover lift

---

## Custom Logo Design

I'll create a **Medico** logo featuring:
- Teal (`#1fb5a8`) color scheme
- Medical cross or pharmacy-related icon
- Clean, modern typography
- Matches the style shown in the PDFs

---

## Animation Library

All animations will follow your specifications:
- **Fade-up/Fade-left**: Content entrance (300ms)
- **Scale-in**: Element emphasis (200ms)
- **Hover lift**: Cards and buttons
- **Image zoom**: Product images on hover
- **Countdown pulse**: Timer seconds box
- **Slide transitions**: Carousels and drawers
- **Counter animation**: Stats numbers counting up

---

## Deliverables

1. ✅ Fully responsive 5-page website
2. ✅ Custom Medico logo
3. ✅ All placeholder product images and content
4. ✅ Interactive filters (visual only)
5. ✅ Working countdown timers
6. ✅ All hover states and animations
7. ✅ Consistent header/footer across pages
8. ✅ Clean, maintainable component structure

---

## Technical Approach

- **React + TypeScript** for components
- **Tailwind CSS** for styling (no UI libraries as specified)
- **Reusable components** for cards, buttons, inputs
- **Custom hooks** for countdown timers
- **Responsive breakpoints**: Desktop-first with mobile adaptations
