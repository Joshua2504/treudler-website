# Treudler - Managed Services Website

A modern, responsive website for your managed services business. Built with clean HTML, CSS, and JavaScript - no frameworks needed!

## 🚀 Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and form handling
- **Performance Optimized**: Lightweight and fast loading
- **SEO Friendly**: Semantic HTML structure
- **Accessible**: WCAG compliant design principles

## 📁 File Structure

```
treudler-website/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🎨 Customization

### Colors
The website uses a modern color palette. Main colors are defined in the CSS:
- Primary: `#6366f1` (Indigo)
- Secondary: `#fbbf24` (Amber)
- Background: `#f9fafb` (Light gray)
- Text: `#1f2937` (Dark gray)

### Content
Update the following in `index.html`:
1. **Company Name**: Change "Treudler" to your company name
2. **Contact Info**: Update email, phone, and business hours
3. **Services**: Modify the service cards to match your offerings
4. **About Section**: Update the stats and description
5. **Hero Section**: Customize the main headline and description

### Images
- Replace the placeholder team image in the about section
- Add your company logo
- Consider adding service-specific images

## 🛠️ Technical Features

### JavaScript Functionality
- Mobile hamburger menu
- Smooth scrolling navigation
- Form submission with validation
- Scroll-triggered animations
- Interactive notifications
- Easter egg (konami code)

### CSS Features
- CSS Grid and Flexbox layouts
- CSS animations and transitions
- Backdrop blur effects
- Responsive breakpoints
- Modern button styles
- Card hover effects

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your browser
2. **Customize content**: Edit the HTML to match your business
3. **Adjust styling**: Modify `styles.css` for brand colors/fonts
4. **Test functionality**: Check the contact form and mobile menu

## 🎯 Quick Customization Checklist

- [ ] Update company name throughout
- [ ] Change contact information
- [ ] Modify service descriptions
- [ ] Update business statistics
- [ ] Replace placeholder content
- [ ] Add your brand colors
- [ ] Test on different devices
- [ ] Add privacy-friendly analytics (Plausible/Matomo) (optional)
- [ ] Set up form submission backend (optional)

## 💡 Enhancement Ideas

### Easy Additions:
- Add privacy-friendly analytics (Plausible/Matomo)
- Include a favicon
- Add social media links
- Create a blog section
- Add customer testimonials

### Advanced Features:
- Contact form backend (Node.js, PHP, or form service)
- Live chat integration
- Newsletter signup
- Case studies section
- Team member profiles

## 🌐 Deployment

### Quick Deploy Options:
1. **GitHub Pages**: Push to GitHub and enable Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Connect your GitHub repo to Vercel
4. **Traditional Hosting**: Upload files via FTP

### Custom Domain:
Update these files when using a custom domain:
- Add CNAME file for GitHub Pages
- Update any absolute URLs
- Set up proper redirects

## 📧 Contact Form Setup

The contact form currently shows a success message. To make it functional:

1. **Add a backend** (Node.js, PHP, or Python) — self-hosted mailer preferred
2. **Use serverless functions** (Netlify/Vercel Functions)
3. **Use a form service** (e.g., FormSpree) if you prefer SaaS

Example with FormSpree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🎨 Brand Customization

### Fonts
Currently using Google Fonts (Inter). To change:
1. Update the Google Fonts link in HTML
2. Change `font-family` in CSS

### Logo
Add your logo by replacing the text logo:
```html
<div class="nav-logo">
    <img src="logo.png" alt="Your Company" height="40">
</div>
```

## 📊 Performance Tips

- Optimize images (WebP format, proper sizing)
- Minify CSS and JavaScript for production
- Use a CDN for faster loading
- Enable compression on your server
- Consider lazy loading for images

## 🐛 Browser Support

Supports all modern browsers:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🎭 Easter Eggs

The website includes a fun easter egg - try the konami code: ↑↑↓↓←→←→BA

---

**Need help customizing or have questions?** 
This is a solid foundation that you can easily build upon. The code is clean, well-commented, and follows modern web development best practices.
