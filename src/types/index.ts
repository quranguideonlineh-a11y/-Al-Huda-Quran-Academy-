export interface Course {
  id: string;
  title: string;
  arabicTitle: string;
  tagline: string;
  description: string;
  duration: string;
  suitableFor: string;
  highlights: string[];
  badge?: string;
  iconName: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  daysPerWeek: number;
  classesPerMonth: number;
  durationPerClass: string;
  isPopular?: boolean;
  prices: {
    GBP: number;
    USD: number;
    CAD: number;
    AUD: number;
    EUR: number;
  };
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  countryCode: string;
  rating: number;
  quote: string;
  studentName?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TrialBookingFormData {
  studentName: string;
  parentName?: string;
  email: string;
  phone: string;
  country: string;
  course: string;
  tutorGender: 'any' | 'male' | 'female';
  preferredDays: string;
  preferredTimezone: string;
  skypeOrWhatsapp?: string;
  comments?: string;
}
