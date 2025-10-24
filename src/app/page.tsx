"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Heart, Sparkles, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Products", id: "products" },
            { name: "Wellness", id: "wellness" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Intimacy Plus"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Wellness & Intimacy Redefined"
          description="Discover premium wellness products designed to enhance your personal journey with quality, discretion, and care."
          tag="Premium Wellness"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Explore Products",
              href: "products"
            },
            {
              text: "Learn More",
              href: "wellness"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/6267375/pexels-photo-6267375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Wellness and relaxation setting"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Carefully curated wellness products for your personal care and intimate well-being"
          tag="Premium Selection"
          tagIcon={Heart}
          products={[
            {
              id: "1",
              name: "Wellness Essentials Kit",
              price: "$89.99",
              imageSrc: "https://images.pexels.com/photos/6620860/pexels-photo-6620860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wellness essentials collection"
            },
            {
              id: "2",
              name: "Intimate Care Collection",
              price: "$124.99",
              imageSrc: "https://images.pexels.com/photos/7317086/pexels-photo-7317086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium intimate care products"
            },
            {
              id: "3",
              name: "Couples Wellness Set",
              price: "$159.99",
              imageSrc: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Couples wellness products"
            }
          ]}
        />
      </div>

      <div id="wellness" data-section="wellness">
        <TextAbout
          title="We believe wellness is a journey of self-discovery, connection, and empowerment. Our mission is to provide premium products that support your personal well-being with discretion and care."
          buttons={[
            {
              text: "Our Story",
              href: "about"
            },
            {
              text: "Wellness Guide",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Customer Experiences"
          description="Real stories from customers who trust our wellness products"
          tag="Testimonials"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah M.",
              role: "Wellness Enthusiast",
              testimonial: "The quality and discretion of service exceeded my expectations. These products have genuinely enhanced my wellness routine.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah M. customer photo"
            },
            {
              id: "2",
              name: "Michael & Lisa",
              role: "Couple",
              testimonial: "Finally found a company that understands the importance of quality and privacy. Excellent products and service.",
              imageSrc: "https://images.pexels.com/photos/7077809/pexels-photo-7077809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael & Lisa customer photo"
            },
            {
              id: "3",
              name: "Jennifer R.",
              role: "Healthcare Professional",
              testimonial: "I recommend these products to my clients. The attention to safety and quality is outstanding.",
              imageSrc: "https://images.pexels.com/photos/5992869/pexels-photo-5992869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer R. customer photo"
            },
            {
              id: "4",
              name: "David K.",
              role: "Verified Customer",
              testimonial: "Discreet packaging, premium quality, and excellent customer service. Couldn't ask for more.",
              imageSrc: "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David K. customer photo"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have questions about our products or need personalized recommendations? We're here to help with discretion and care."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "How can we help you today?",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Intimacy Plus"
          columns={[
            {
              items: [
                {
                  label: "Products",
                  href: "products"
                },
                {
                  label: "Wellness Guide",
                  href: "wellness"
                },
                {
                  label: "About Us",
                  href: "about"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}