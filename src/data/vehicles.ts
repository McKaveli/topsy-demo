export type Vehicle = {
  id: string
  make: string
  model: string
  year: number
  price: number
  mileage: number
  transmission: 'Automatic' | 'Manual'
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric'
  bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Wagon' | 'Truck'
  condition: 'Used' | 'New'
  description: string
  features: string[]
  images: string[]
  drive2OwnAvailable: boolean
  status: 'available' | 'sold'
}

export const vehicles: Vehicle[] = [
  {
    id: 'toyota-corolla-2020',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 80000,
    mileage: 45000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'Sedan',
    condition: 'Used',
    description: 'Well-maintained Toyota Corolla with a clean service history. Efficient, reliable, and perfect for urban driving in Ghana.',
    features: ['Air Conditioning', 'Bluetooth', 'Reverse Camera', 'Cruise Control'],
    images: ['/images/corolla-1.jpg', '/images/corolla-2.jpg', '/images/corolla-3.jpg'],
    drive2OwnAvailable: true,
    status: 'available',
  },
  {
    id: 'toyota-camry-2019',
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
    price: 120000,
    mileage: 60000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'Sedan',
    condition: 'Used',
    description: 'Premium comfort and reliability. Ideal for corporate use and family travel.',
    features: ['Leather Seats', 'Sunroof', 'Navigation', 'Keyless Entry'],
    images: ['/images/camry-1.jpg', '/images/camry-2.jpg'],
    drive2OwnAvailable: true,
    status: 'available',
  },
  {
    id: 'hyundai-tucson-2021',
    make: 'Hyundai',
    model: 'Tucson',
    year: 2021,
    price: 170000,
    mileage: 30000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'SUV',
    condition: 'Used',
    description: 'Spacious SUV with modern features and excellent handling.',
    features: ['Alloy Wheels', 'Bluetooth', 'Parking Sensors'],
    images: ['/images/tucson-1.jpg', '/images/tucson-2.jpg'],
    drive2OwnAvailable: true,
    status: 'available',
  },
  {
    id: 'mercedes-c-class-2018',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2018,
    price: 250000,
    mileage: 80000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'Sedan',
    condition: 'Used',
    description: 'Luxury sedan with refined ride and premium amenities.',
    features: ['Leather Interior', 'Adaptive Cruise', 'Premium Audio'],
    images: ['/images/mercedes-1.jpg', '/images/mercedes-2.jpg'],
    drive2OwnAvailable: false,
    status: 'available',
  },
  {
    id: 'kia-sportage-2022',
    make: 'Kia',
    model: 'Sportage',
    year: 2022,
    price: 160000,
    mileage: 15000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'SUV',
    condition: 'Used',
    description: 'Modern SUV with excellent fuel economy and safety features.',
    features: ['Lane Assist', 'Apple CarPlay', 'Android Auto'],
    images: ['/images/kia-1.jpg', '/images/kia-2.jpg'],
    drive2OwnAvailable: true,
    status: 'available',
  },
  {
    id: 'honda-crv-2020',
    make: 'Honda',
    model: 'CR-V',
    year: 2020,
    price: 150000,
    mileage: 40000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'SUV',
    condition: 'Used',
    description: 'Reliable crossover with generous cargo space and comfort.',
    features: ['Safety Suite', 'Rear Climate Control'],
    images: ['/images/crv-1.jpg', '/images/crv-2.jpg'],
    drive2OwnAvailable: true,
    status: 'available',
  },
  {
    id: 'nissan-xtrail-2019',
    make: 'Nissan',
    model: 'X-Trail',
    year: 2019,
    price: 130000,
    mileage: 70000,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    bodyType: 'SUV',
    condition: 'Used',
    description: 'Capable SUV with efficient diesel engine and good towing capacity.',
    features: ['4x4', 'Tow Hitch'],
    images: ['/images/xtrail-1.jpg'],
    drive2OwnAvailable: false,
    status: 'available',
  },
]
