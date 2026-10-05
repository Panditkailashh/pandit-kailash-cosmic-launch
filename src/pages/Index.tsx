import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleUserRound,
  Compass,
  Clock3,
  ExternalLink,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoonStar,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";

import { Button } from "@/components/ui/button";
import logo from "@/assets/Pandit Kailash_logo.png";
import reviewFaceOne from "@/assets/client-review-one.png";
import reviewFaceTwo from "@/assets/client-review-two.png";
import reviewFaceThree from "@/assets/review-face-three.jpeg";
import reviewFaceFour from "@/assets/review-face-four.jpeg";
import reviewFaceFive from "@/assets/review-face-five.jpeg";
import palm from "@/assets/image-2.jpeg";
import kailash from "@/assets/image-3.jpeg";
import numerology from "@/assets/image-4.jpeg";
import zodiac from "@/assets/image-5.jpeg";
import psychicImage from "@/assets/service-psychic.jpg";
import loveImage from "@/assets/service-love.jpg";
import careerImage from "@/assets/service-career.jpg";
import generalImage from "@/assets/service-general.jpg";
import certificate1 from "@/assets/certificate-1.jpeg";
import certificate2 from "@/assets/certificate-2.jpeg";
import certificate3 from "@/assets/certificate-3.jpeg";
import astroTalkReelOne from "@/assets/Astro Talk Reel 1_1.mp4";
import astroTalkReelTwo from "@/assets/Astro Talk Reel 2.mp4";
import astroWithCaptions from "@/assets/Astro 1 with captions.mp4";

const PHONE_DISPLAY = "+44 7552 063168";
const PHONE_LINK = "tel:+447552063168";
const EMAIL = "psychickailashshastri@gmail.com";
const YOUTUBE = "https://youtube.com/@panditkailashuk";

function whatsApp(message: string) {
  return `https://wa.me/447552063168?text=${encodeURIComponent(message)}`;
}

const generalMessage =
  "Hello Pandit Kailash, I would like to book a reading. Please provide availability and details.";

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>;

const services: Array<{
  title: string;
  description: string;
  image: string;
  icon: IconType;
  message: string;
}> = [
  {
    title: "Psychic Readings",
    description:
      "Private one-to-one readings focused on your questions, concerns and current situation.",
    image: psychicImage,
    icon: Sparkles,
    message: "Hello Pandit Kailash, I am interested in a Psychic Reading.",
  },
  {
    title: "Love & Relationship Readings",
    description:
      "Guidance around relationships, communication, emotional situations and compatibility.",
    image: loveImage,
    icon: Heart,
    message: "Hello Pandit Kailash, I would like to enquire about a Love & Relationship reading.",
  },
  {
    title: "Marriage & Compatibility",
    description: "Personal guidance relating to relationships, marriage and compatibility.",
    image: numerology,
    icon: ShieldCheck,
    message:
      "Hello Pandit Kailash, I would like to enquire about a Marriage & Compatibility reading.",
  },
  {
    title: "Career & Life Readings",
    description:
      "Personal insight around career direction, opportunities, decisions and life changes.",
    image: careerImage,
    icon: BriefcaseBusiness,
    message: "Hello Pandit Kailash, I would like to enquire about a Career & Life reading.",
  },
  {
    title: "Palm Reading",
    description: "Traditional interpretation of palm lines and hand features.",
    image: palm,
    icon: CircleUserRound,
    message: "Hello Pandit Kailash, I am interested in a Palm Reading.",
  },
  {
    title: "Astrology & Vedic Astrology",
    description: "Astrological guidance using birth information and traditional techniques.",
    image: kailash,
    icon: Sun,
    message: "Hello Pandit Kailash, I am interested in an Astrology / Vedic Astrology reading.",
  },
  {
    title: "Horoscope / Birth Chart Reading",
    description: "Personalised interpretation based on birth details.",
    image: zodiac,
    icon: MoonStar,
    message: "Hello Pandit Kailash, I am interested in a Horoscope / Birth Chart reading.",
  },
  {
    title: "General Psychic Reading",
    description: "For clients who want to discuss several areas of life during one consultation.",
    image: generalImage,
    icon: Compass,
    message: "Hello Pandit Kailash, I am interested in a General Psychic Reading.",
  },
];

const nav = ["Home", "Services", "About", "Readings", "Locations", "Reviews", "Gallery", "Contact"];
const topContactItems = [
  { label: "Phone", text: PHONE_DISPLAY, href: PHONE_LINK, icon: Phone },
  { label: "Email", text: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
  { label: "Location", text: "All Across UK", icon: MapPin },
  { label: "Business hours", text: "8 AM – 8 PM", icon: Clock3 },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <Sparkles aria-hidden="true" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [lightbox]);

  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="top-contact-bar" role="group" aria-label="Contact information">
        <div className="top-contact-track">
          {[0, 1, 2, 3].map((copy) => (
            <div className="top-contact-group" key={copy} aria-hidden={copy > 0}>
              {topContactItems.map(({ label, text, href, icon: Icon }) => {
                const content = (
                  <>
                    <Icon aria-hidden="true" />
                    <span>{text}</span>
                  </>
                );

                return href ? (
                  <a href={href} aria-label={`${label} ${text}`} key={label}>
                    {content}
                  </a>
                ) : (
                  <span key={label}>{content}</span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <header className="nav-shell">
        <a href="#home" className="brand" aria-label="PanditKailash home">
          <img src={logo} alt="Pandit Kailash Astrology and Psychic Readings" />
          <span>
            <strong>PanditKailash</strong>
            <small>British Fortunes</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <Button asChild variant="outline" className="nav-whatsapp">
            <a href={whatsApp(generalMessage)} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp
            </a>
          </Button>
          <Button asChild className="gold-button nav-book">
            <a href={whatsApp(generalMessage)} target="_blank" rel="noreferrer">
              Book Reading
            </a>
          </Button>
          <Button
            className="menu-button"
            size="icon"
            variant="outline"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-menu-panel">
              <Button
                size="icon"
                variant="ghost"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X />
              </Button>
              <nav aria-label="Mobile navigation">
                {nav.map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                    {item}
                    <ChevronRight />
                  </a>
                ))}
              </nav>
              <Button asChild className="gold-button">
                <a href={whatsApp(generalMessage)} target="_blank" rel="noreferrer">
                  Book a Reading
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main">
        <section id="home" className="hero">
          <div className="stars" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true">
            <span />
          </div>
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="status">
                <span /> Open Daily • 8 AM – 8 PM
              </div>
              <p className="hero-kicker">British Fortunes • Private Consultations</p>
              <h1>
                Astrology &amp; Vedic Astrology <em>Readings</em>
              </h1>
              <p className="hero-location">
                <MapPin /> London <i>•</i> Manchester <i>•</i> Birmingham
              </p>
              <p className="hero-description">
                Personalised spiritual guidance for love, relationships, marriage, career and
                important life decisions.
              </p>
              <p className="hero-note">
                Private one-to-one consultations • In-person &amp; remote sessions
              </p>
              <div className="hero-actions">
                <Button asChild className="gold-button hero-button">
                  <a
                    href={whatsApp(
                      "Hello Pandit Kailash, I would like to book an astrology reading. Please provide more details.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BookOpen /> Book a Reading
                  </a>
                </Button>
                <Button asChild variant="outline" className="glass-button hero-button">
                  <a href={whatsApp(generalMessage)} target="_blank" rel="noreferrer">
                    <MessageCircle /> WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="ghost" className="call-button hero-button">
                  <a href={PHONE_LINK}>
                    <Phone /> Call Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="hero-visual">
              <img className="hero-logo" src={logo} alt="Pandit Kailash" />
            </div>
          </div>
          <a href="#services" className="scroll-cue">
            <span>Explore readings</span>
            <ArrowRight />
          </a>
        </section>

        <div className="trust-strip" aria-label="Available services">
          {[
            "Astrology Readings",
            "Vedic Astrology",
            "Psychic Readings",
            "Palm Reading",
            "Horoscope & Birth Chart",
          ].map((item) => (
            <span key={item}>
              <Sparkles />
              {item}
            </span>
          ))}
        </div>

        <section id="services" className="section services-section">
          <Reveal>
            <SectionHeading
              eyebrow="Our services"
              title="Personalised Readings & Guidance"
              copy="Private consultations focused on your questions, concerns and current situation."
            />
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className="service-card"
                  whileHover={{
                    y: -8,
                    rotateX: 1.5,
                    rotateY: index % 2 ? -1.5 : 1.5,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={`${service.title} consultation`}
                      loading="lazy"
                      width="816"
                      height="816"
                    />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="service-content">
                    <Icon className="service-icon" />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href={whatsApp(service.message)} target="_blank" rel="noreferrer">
                      Explore Reading <ArrowRight />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="readings" className="section pricing-section">
          <Reveal>
            <SectionHeading
              eyebrow="Private consultations"
              title="Choose Your Reading"
              copy="Select your preferred reading and message Pandit Kailash directly for availability."
            />
          </Reveal>
          <div className="pricing-grid">
            {[
              ["Essential Reading", "£10"],
              ["Personal Guidance", "£20"],
              ["Premium Consultation", "£45"],
            ].map(([label, price], index) => (
              <Reveal key={price} className={`price-card ${index === 1 ? "featured" : ""}`}>
                {index === 1 && <span className="popular">Popular choice</span>}
                <p>{label}</p>
                <strong>{price}</strong>
                <div className="price-rule" />
                <span>
                  <Check /> Private consultation
                </span>
                <Button asChild className={index === 1 ? "gold-button" : "glass-button"}>
                  <a
                    href={whatsApp(
                      `Hello Pandit Kailash, I am interested in the ${price} reading. Please provide availability.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book This Reading <ArrowRight />
                  </a>
                </Button>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="section astrologer-section">
          <div className="astrologer-grid">
            <Reveal className="portrait-wrap">
              <div className="portrait-frame">
                <img src={kailash} alt="Pandit Kailash in meditation" loading="lazy" />
              </div>
              <div className="portrait-mark">
                <Sparkles />
                <span>
                  Private guidance
                  <br />
                  <strong>In person & remote</strong>
                </span>
              </div>
            </Reveal>
            <Reveal className="astrologer-copy">
              <span className="eyebrow">
                <Sparkles /> Your consultation
              </span>
              <h2>
                Meet the Astrologer
                <br />
                <em>— Pandit Kailash</em>
              </h2>
              <p>
                Pandit Kailash offers personalised guidance through private one-to-one
                consultations, with a calm and respectful approach to the questions that matter to
                you.
              </p>
              <p>
                Consultations can explore astrology, Vedic astrology, palm reading, horoscope
                interpretation and birth-chart guidance, including love, relationships, marriage,
                career and important life decisions.
              </p>
              <ul>
                <li>
                  <Check /> Personalised, easy-to-understand guidance
                </li>
                <li>
                  <Check /> In-person and remote consultations
                </li>
                <li>
                  <Check /> Love, relationship, marriage and career guidance
                </li>
              </ul>
              <Button asChild className="gold-button">
                <a href={whatsApp(generalMessage)} target="_blank" rel="noreferrer">
                  Book a Private Reading <ArrowRight />
                </a>
              </Button>
            </Reveal>
          </div>
        </section>

        <section className="section video-section">
          <Reveal>
            <SectionHeading
              eyebrow="Watch & discover"
              title="Discover Pandit Kailash"
              copy="Watch our latest astrology and spiritual guidance videos."
            />
          </Reveal>
          <div className="video-grid">
            {[
              {
                source: astroTalkReelOne,
                label: "Astrology & Vedic Astrology",
              },
              { source: astroTalkReelTwo, label: "Spiritual Guidance" },
              { source: astroWithCaptions, label: "Palm Reading" },
            ].map((video) => (
              <article key={video.label} className="video-card">
                <video
                  src={video.source}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.label}
                />
                <div>
                  <small>Astro talk video</small>
                  <h3>{video.label}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section why-section">
          <Reveal>
            <SectionHeading
              eyebrow="A considered approach"
              title="Why Clients Choose PanditKailash"
            />
          </Reveal>
          <div className="why-grid">
            {[
              [
                CircleUserRound,
                "Private & Personal",
                "Comfortable one-to-one consultations focused on your individual concerns.",
              ],
              [
                Compass,
                "Clear Guidance",
                "Easy-to-understand spiritual and astrological guidance.",
              ],
              [
                MessageCircle,
                "Flexible Sessions",
                "Consultations available in person and remotely.",
              ],
              [MapPin, "UK Locations", "Serving clients across London, Manchester and Birmingham."],
            ].map(([Icon, title, copy]) => {
              const ItemIcon = Icon as IconType;
              return (
                <Reveal key={title as string} className="why-card">
                  <ItemIcon />
                  <h3>{title as string}</h3>
                  <p>{copy as string}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="locations" className="section locations-section">
          <div className="map-orbit" aria-hidden="true" />
          <Reveal>
            <SectionHeading
              eyebrow="London • Manchester • Birmingham"
              title="Readings Across the UK"
              copy="Remote consultations available for clients across the UK."
            />
          </Reveal>
          <div className="locations-grid">
            {[
              ["01", "London", "Private astrology and spiritual consultations"],
              ["02", "Manchester", "Personalised readings and guidance"],
              ["03", "Birmingham", "Private consultations and readings"],
            ].map(([number, city, copy]) => (
              <Reveal key={city} className="location-card">
                <span>{number}</span>
                <MapPin />
                <h3>{city}</h3>
                <p>{copy}</p>
                <a
                  href={whatsApp(
                    `Hello Pandit Kailash, I would like to enquire about a reading in ${city}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire now <ArrowRight />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="reviews" className="section reviews-section">
          <Reveal>
            <SectionHeading
              eyebrow="Client feedback"
              title="What Our Clients Say"
              copy="Sample review copy for illustration; replace with genuine client feedback when available."
            />
          </Reveal>
          <div className="reviews-grid">
            {[
              [
                reviewFaceOne,
                "Verified Client",
                "Professional, welcoming and easy to talk to. The reading gave me a fresh perspective and helped me think more clearly about my next steps.",
              ],
              [
                reviewFaceTwo,
                "London Client",
                "A warm and thoughtful reading that helped me reflect on my personal situation with greater clarity. I really appreciated the calm and respectful approach.",
              ],
              [
                reviewFaceThree,
                "Manchester Client",
                "The consultation was comfortable and insightful. I was able to discuss the things that were on my mind and came away feeling more positive and focused.",
              ],
              [
                reviewFaceFour,
                "Birmingham Client",
                "A very pleasant experience from start to finish. The reading gave me useful guidance and encouraged me to look at my situation from a different perspective.",
              ],
              [
                reviewFaceFive,
                "UK Client",
                "Very welcoming and professional experience. The reading was thoughtful, personal and gave me plenty to reflect on afterwards.",
              ],
            ].map(([image, label, review], index) => (
              <Reveal key={label} className="review-card">
                <div className="review-top">
                  <img src={image} alt={`${label} review avatar`} loading="lazy" />
                  <div>
                    <h3>{label}</h3>
                    <span>{index === 0 ? "Verified review" : "Client review"}</span>
                  </div>
                </div>
                <div className="stars-row" aria-label="Five stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill="currentColor" />
                  ))}
                </div>
                <blockquote>“{review}”</blockquote>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <Reveal>
            <SectionHeading
              eyebrow="Visual collection"
              title="Gallery & Recognition"
              copy="A selection of astrology and spiritual imagery from PanditKailash."
            />
          </Reveal>
          <div className="gallery-grid">
            {[
              [kailash, "Pandit Kailash spiritual guidance"],
              [palm, "Palm reading symbolism"],
              [zodiac, "Astrology zodiac wheel"],
              [numerology, "Numerology sacred geometry"],
              [generalImage, "Astrological birth chart"],
              [certificate1, "Pandit Kailash Certificate 1", "certificate"],
              [certificate2, "Pandit Kailash Certificate 2", "certificate"],
              [certificate3, "Pandit Kailash Certificate 3", "certificate"],
            ].map(([image, alt, imageType], index) => (
              <button
                key={image}
                type="button"
                className={`gallery-item gallery-${index + 1}${imageType === "certificate" ? " gallery-certificate" : ""}`}
                onClick={() => image && setLightbox(image)}
                aria-label={`Open ${alt}`}
              >
                <img src={image} alt={alt} loading="lazy" />
                <span>
                  <ExternalLink />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section approach-section">
          <div className="approach-grid">
            <Reveal>
              <span className="eyebrow">
                <Sparkles /> Spiritual approach
              </span>
              <h2>
                Guidance With a <em>Personal Touch</em>
              </h2>
              <p>
                Pandit Kailash offers private psychic readings, palm reading, astrology and
                spiritual guidance. Sessions are private, respectful and easy to understand.
              </p>
              <p>
                Consultations can focus on love, relationships, marriage, career, family matters and
                important life decisions, using palm reading, horoscope interpretation, Vedic
                astrology and birth-chart guidance.
              </p>
              <p>
                The service welcomes clients from different backgrounds, with both in-person and
                remote consultations available.
              </p>
            </Reveal>
            <Reveal className="approach-visual">
              <img src={generalImage} alt="Open astrological birth chart book" loading="lazy" />
              <div>
                <Sun />
                <span>
                  Astrology
                  <br />
                  <strong>Personal guidance</strong>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section process-section">
          <Reveal>
            <SectionHeading eyebrow="Simple & private" title="How It Works" />
          </Reveal>
          <div className="process-grid">
            {[
              [BookOpen, "01", "Choose Your Reading"],
              [MessageCircle, "02", "Contact Pandit Kailash"],
              [Sparkles, "03", "Begin Your Private Consultation"],
            ].map(([Icon, num, title]) => {
              const StepIcon = Icon as IconType;
              return (
                <Reveal key={num as string} className="process-step">
                  <span>{num as string}</span>
                  <div>
                    <StepIcon />
                  </div>
                  <h3>{title as string}</h3>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="final-cta">
          <div className="orbit cta-orbit" aria-hidden="true" />
          <Reveal>
            <span className="eyebrow">
              <Sparkles /> Your next step
            </span>
            <h2>Ready to Discover What Your Path Holds?</h2>
            <p>Book a private astrology or Vedic astrology reading with Pandit Kailash.</p>
            <div className="hero-actions">
              <Button asChild className="gold-button hero-button">
                <a href={whatsApp(generalMessage)} target="_blank" rel="noreferrer">
                  <BookOpen /> Book a Reading
                </a>
              </Button>
              <Button asChild variant="outline" className="glass-button hero-button">
                <a href={whatsApp(generalMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghost" className="call-button hero-button">
                <a href={PHONE_LINK}>
                  <Phone /> Call Now
                </a>
              </Button>
            </div>
            <div className="cta-meta">
              <span>London • Manchester • Birmingham</span>
              <span>Open Daily • 8 AM – 8 PM</span>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section contact-section">
          <Reveal>
            <SectionHeading
              eyebrow="Contact Pandit Kailash"
              title="Begin Your Private Consultation"
              copy="Get in touch directly to ask about availability and select the right reading for you."
            />
          </Reveal>
          <div className="contact-grid">
            <a href={PHONE_LINK}>
              <Phone />
              <div>
                <span>Phone</span>
                <strong>{PHONE_DISPLAY}</strong>
              </div>
              <ArrowRight />
            </a>
            <a href={`mailto:${EMAIL}`}>
              <Mail />
              <div>
                <span>Email</span>
                <strong>{EMAIL}</strong>
              </div>
              <ArrowRight />
            </a>
            <div>
              <MapPin />
              <div>
                <span>Location</span>
                <strong>All Across UK</strong>
              </div>
            </div>
            <div>
              <MoonStar />
              <div>
                <span>Business Hours</span>
                <strong>8 AM – 8 PM</strong>
              </div>
            </div>
          </div>
          <div className="social-row">
            <span>Follow PanditKailash</span>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/share/1CL7Lz5HBj/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/panditkailashuk?stkn=NnBhYzFvNHczMjBy"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a aria-label="YouTube" href={YOUTUBE} target="_blank" rel="noreferrer">
              <Youtube />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <img src={logo} alt="PanditKailash logo" loading="lazy" />
          <div>
            <strong>PanditKailash</strong>
            <p>ASTROLOGY • VEDIC ASTROLOGY • PSYCHIC READINGS • PALM READING</p>
          </div>
        </div>
        <div className="footer-links">
          <span>London • Manchester • Birmingham • UK</span>
          <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={whatsApp(generalMessage)} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 PanditKailash. All Rights Reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsApp(generalMessage)}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Pandit Kailash on WhatsApp"
      >
        <MessageCircle />
        <span>WhatsApp</span>
      </a>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <Button
              size="icon"
              variant="outline"
              aria-label="Close gallery image"
              onClick={() => setLightbox(null)}
            >
              <X />
            </Button>
            <motion.img
              src={lightbox}
              alt="Expanded gallery view"
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
