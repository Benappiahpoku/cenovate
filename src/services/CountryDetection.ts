export type SupportedCountry = 'ghana' | 'nigeria'

export interface CountryConfig {
  code: SupportedCountry
  name: string
  currency: string
  timezone: string
  phoneFormat: string
  businessHours: string
  paymentMethods: string[]
}

export const countryConfigs: Record<SupportedCountry, CountryConfig> = {
  ghana: {
    code: 'ghana',
    name: 'Ghana',
    currency: 'GHS',
    timezone: 'Africa/Accra (GMT)',
    phoneFormat: '+233 XXX XXX XXX',
    businessHours: '8:00 AM - 5:00 PM (Mon-Fri)',
    paymentMethods: ['MTN Mobile Money', 'Vodafone Cash', 'AirtelTigo Money', 'Bank Transfer', 'Cash']
  },
  nigeria: {
    code: 'nigeria',
    name: 'Nigeria',
    currency: 'NGN',
    timezone: 'Africa/Lagos (WAT)',
    phoneFormat: '+234 XXX XXX XXXX',
    businessHours: '8:00 AM - 5:00 PM (Mon-Fri)',
    paymentMethods: ['Bank Transfer', 'POS Payment', 'Mobile Banking', 'Cash']
  }
}

export function detectCountryFromUrl(): SupportedCountry {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    if (hostname.includes('.ng') || hostname.includes('nigeria')) {
      return 'nigeria'
    }
  }
  return 'ghana' // Default to Ghana for CENOVATE
}

export function getCountryConfig(country?: SupportedCountry): CountryConfig {
  const detectedCountry = country || detectCountryFromUrl()
  return countryConfigs[detectedCountry]
}

export function formatGhanaianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS'
  }).format(amount)
}