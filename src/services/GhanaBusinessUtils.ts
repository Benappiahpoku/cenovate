export const ghanaBusinessConfig = {
  workingHours: {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: '9:00 AM - 1:00 PM',
    sunday: 'Closed'
  },
  paymentMethods: [
    'MTN Mobile Money',
    'Vodafone Cash',
    'AirtelTigo Money',
    'Bank Transfer',
    'Cash'
  ],
  popularRegions: [
    'Greater Accra',
    'Ashanti',
    'Western',
    'Central',
    'Eastern',
    'Volta',
    'Northern',
    'Upper East',
    'Upper West',
    'Brong Ahafo'
  ],
  languages: ['English', 'Twi', 'Ga', 'Ewe', 'Dagbani'],
  timezone: 'Africa/Accra'
}

export function formatGhanaianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS'
  }).format(amount)
}

export function formatGhanaianPhone(phone: string): string {
  // Format Ghana phone numbers to +233 XXX XXX XXXX
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('233')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`
  }
  if (cleaned.startsWith('0')) {
    return `+233 ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`
  }
  return phone
}

export function getBusinessHours(): string {
  return ghanaBusinessConfig.workingHours.weekdays
}

export function isBusinessOpen(): boolean {
  const now = new Date()
  const ghanaTime = new Intl.DateTimeFormat('en-US', {
    timeZone: ghanaBusinessConfig.timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now)
  
  const [hours] = ghanaTime.split(':').map(Number)
  const dayOfWeek = now.getDay()
  
  // Business hours: 8 AM - 5 PM (Monday-Friday), 9 AM - 1 PM (Saturday)
  if (dayOfWeek === 0) return false // Sunday closed
  if (dayOfWeek === 6) return hours >= 9 && hours < 13 // Saturday 9-1
  return hours >= 8 && hours < 17 // Weekdays 8-5
}