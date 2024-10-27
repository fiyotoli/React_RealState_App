// properties.js

import luxuryApartment from './assets/apartment.jpg';
import luxuryApartment1 from './assets/apartment1.jpg';
import cozyCottage from './assets/cottage.jpg';
import cozyCottage1 from './assets/cottage1.jpg';
import modernCondo from './assets/condo.jpg';
import modernCondo1 from './assets/condo1.jpg';

import beachfrontVilla from './assets/villa.jpg';
import beachfrontVilla1 from './assets/villa1.jpg';
import penthouseSuite from './assets/penthouse.jpg';

import penthouseLuxury from './assets/penthose.jpg';
import penthouseLuxury1 from './assets/penthose2.jpg';
import penthouseLuxury2 from './assets/penthose2.jpg';

const properties = [
  {
    id: 1,
    title: "Luxury Apartment in City Center",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: luxuryApartment, // Use the imported image
    price: "$1,200,000",
    location: "Downtown",
    category: "Apartment",
    related: [2, 3, 4, 5]
  },
  {
    id: 2,
    title: "Modern Cottage",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: cozyCottage,
    price: "$1,000,000",
    location: "City Center",
    category: "Cottage",
    related: [1, 3, 4, 5]
  },
  {
    id: 3,
    title: "Luxury Condo",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: modernCondo,
    price: "$450,000",
    location: "Uptown",
    category: "Condo",
    related: [1, 2, 4, 5]
  },
  {
    id: 4,
    title: "Modern Villa",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: beachfrontVilla,
    price: "$1,200,000",
    location: "Center",
    category: "Villa",
    related: [1, 2, 3, 5]
  },
  {
    id: 5,
    title: "Modern Penthouse ",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: penthouseSuite,
    price: "$2,000,000",
    location: "City Center",
    category: "Penthouse",
    related: [1, 2, 3, 4]
  },
  {
    id: 6,
    title: "Penthouse Luxury",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: penthouseLuxury,
    price: "$1,000,000",
    location: "Suburb",
    category: "Penthouse",
    related: [1, 2, 3, 4]
  },
  {
    id: 7,
    title: "Modern Apartment in City Center",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living...",
    image: luxuryApartment1,
    price: "$500,000",
    location: "Center",
    category: "Apartment",
    related: [2, 3, 4, 5]
  },
  {
    id: 8,
    title: "Cozy Cottage",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: cozyCottage1,
    price: "$300,000",
    location: "Suburb",
    category: "Cottage",
    related: [1, 3, 4, 5]
  },
  {
    id: 9,
    title: "Modern Condo",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: modernCondo1,
    price: "$110,000",
    location: "Coastal Area",
    category: "Condo",
    related: [1, 2, 4, 5]
  },
  {
    id: 10,
    title: "Beachfront Villa",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: beachfrontVilla1,
    price: "$820,000",
    location: "Coastal Area",
    category: "Villa",
    related: [1, 2, 3, 5]
  },
  {
    id: 11,
    title: "Penthouse Suite",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: penthouseLuxury1,
    price: "$20,000,000",
    location: "City Center",
    category: "Penthouse",
    related: [1, 2, 3, 4]
  },
  {
    id: 12,
    title: "Exquisite Penthouse ",
    description: "Step into a world of sophistication with our Modern Condo, a stylish retreat designed for contemporary living. Nestled in a vibrant neighborhood, this condo offers the perfect blend of comfort and convenience. With its open floor plan, the spacious living area is flooded with natural light, creating an inviting atmosphere for relaxation and entertainment.",
    image: penthouseLuxury2,
    price: "$1,000,000",
    location: "Center",
    category: "Penthouse",
    related: [1, 2, 3, 4]
  },
];

export default properties;
