import { Product } from "@/contexts/CartContext";
import electricGuitar from "@/assets/electric-guitar.jpg";
import acousticGuitar from "@/assets/acoustic-guitar.jpg";
import keyboard from "@/assets/keyboard.jpg";
import drums from "@/assets/drums.jpg";
import saxophone from "@/assets/saxophone.jpg";
import violin from "@/assets/violin.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Stratosphere Electric Guitar",
    price: 1299.99,
    image: electricGuitar,
    description: "Professional-grade electric guitar with premium pickups and versatile tone. Perfect for rock, blues, and jazz performances. Features a comfortable neck profile and stunning finish.",
    category: "Electric Guitars",
  },
  {
    id: "2",
    name: "Acoustic Harmony Pro",
    price: 899.99,
    image: acousticGuitar,
    description: "Rich, warm tones with solid wood construction. Ideal for singer-songwriters and acoustic performances. Hand-crafted with premium materials for exceptional sound quality.",
    category: "Acoustic Guitars",
  },
  {
    id: "3",
    name: "Symphony 88 Digital Piano",
    price: 1899.99,
    image: keyboard,
    description: "88 weighted keys with authentic piano action. Multiple voices and recording capabilities. Perfect for both beginners and professional pianists.",
    category: "Keyboards & Pianos",
  },
  {
    id: "4",
    name: "Professional Drum Kit",
    price: 2499.99,
    image: drums,
    description: "Complete 5-piece drum set with cymbals and hardware. Studio-quality sound with durable construction. Ideal for live performances and recording sessions.",
    category: "Drums & Percussion",
  },
  {
    id: "5",
    name: "Alto Saxophone Pro",
    price: 1599.99,
    image: saxophone,
    description: "Premium alto saxophone with rich, smooth tone. Gold lacquer finish with professional engraving. Perfect for jazz, classical, and contemporary music.",
    category: "Brass & Woodwind",
  },
  {
    id: "6",
    name: "Concert Violin Masterpiece",
    price: 1199.99,
    image: violin,
    description: "Handcrafted violin with exceptional tone and projection. Includes bow, case, and rosin. Suitable for intermediate to advanced players.",
    category: "Strings",
  },
];
