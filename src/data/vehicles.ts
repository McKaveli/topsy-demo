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

export function getDemoPaymentSummary(
  price: number,
  deposit = 0,
  term = 36,
  annualRate = 12
) {
  const validDeposit = Math.max(0, deposit)
  const amountFinanced = Math.max(0, price - validDeposit)
  const monthlyRate = annualRate / 100 / 12

  const monthlyPayment = monthlyRate === 0 || term <= 0
    ? amountFinanced / (term || 1)
    : (amountFinanced * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term))

  return {
    deposit: validDeposit,
    amountFinanced,
    monthlyPayment,
    totalRepayment: monthlyPayment * term + validDeposit,
  }
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
    description: 'Well-maintained Toyota Corolla with a clean service history, efficient daily usability, and a comfortable cabin for city and highway driving.',
    features: ['Air Conditioning', 'Bluetooth', 'Reverse Camera', 'Cruise Control'],
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80',
    ],
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
    description: 'A premium and reliable executive sedan offering smooth comfort, strong value, and a refined driving experience.',
    features: ['Leather Seats', 'Sunroof', 'Navigation', 'Keyless Entry'],
    images: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    ],
    drive2OwnAvailable: true,
    status: 'available',
  },
  {
    id: 'toyota-rav4-2022',
    make: 'Toyota',
    model: 'RAV4',
    year: 2022,
    price: 190000,
    mileage: 22000,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'SUV',
    condition: 'Used',
    description: 'Practical SUV with elevated seating, smart storage, and a versatile cabin suited to family and everyday driving.',
    features: ['Alloy Wheels', 'Bluetooth', 'Rear Camera', 'Parking Sensors'],
    images: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    ],
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
    description: 'A versatile SUV with spacious interiors, a strong feature list, and a commanding road presence.',
    features: ['Alloy Wheels', 'Bluetooth', 'Parking Sensors', 'Lane Assist'],
    images: [
      'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    ],
    drive2OwnAvailable: true,
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
    description: 'Modern SUV styling, smart driver aids, and everyday practicality in a clean, efficient package.',
    features: ['Lane Assist', 'Apple CarPlay', 'Android Auto', 'Smart Key'],
    images: [
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    ],
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
    description: 'Reliable crossover with generous cargo space, clean road manners, and comfortable family-oriented features.',
    features: ['Safety Suite', 'Rear Climate Control', 'Adaptive Cruise'],
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    ],
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
    description: 'A capable SUV with generous cabin space and an efficient diesel powertrain suited for road trips and daily driving.',
    features: ['4x4', 'Tow Hitch', 'Rear Parking Sensors'],
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=1200&q=80',
    ],
    drive2OwnAvailable: false,
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
    description: 'Luxury sedan with refined comfort, premium cabin finishing, and a composed, executive drivetrain.',
    features: ['Leather Interior', 'Adaptive Cruise', 'Premium Audio'],
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    ],
    drive2OwnAvailable: false,
    status: 'available',
  },
]
