// Centralized environment-based API base URL configuration
// In development: points to VITE_API_BASE_URL or defaults to http://localhost:8080
// In production: points to VITE_API_BASE_URL or defaults to deployed backend
const rawApiUrl = import.meta.env.VITE_API_BASE_URL;

export const BASE_URL = (rawApiUrl && rawApiUrl.trim() !== "")
  ? rawApiUrl.trim().replace(/\/+$/, "")
  : (import.meta.env.PROD ? "https://gopabandhuclubpkp.onrender.com" : "http://localhost:8080");

// Feature Flag: Temporarily disable registration across the website
// When set to true, public registration links and forms will become active again.
export const REGISTRATION_ENABLED = false;

// Single Source of Truth for Member Roles (aligned with backend Member model)
export const DEFAULT_MEMBER_ROLES = [
  'President',
  'Vice-President',
  'Secretary',
  'Treasurer',
  'Puja Secretary',
  'Assistant Secretary',
  'Sport Secretary',
  'Cultural Secretary',
  'Member'
];

// Odia labels for Member Roles
export const ROLE_ODIA_MAP = {
  'President': 'ସଭାପତି',
  'Vice-President': 'ଉପ-ସଭାପତି',
  'Secretary': 'ସମ୍ପାଦକ',
  'Treasurer': 'କୋଷାଧ୍ୟକ୍ଷ',
  'Puja Secretary': 'ପୂଜା ସମ୍ପାଦକ',
  'Assistant Secretary': 'ସହ-ସମ୍ପାଦକ',
  'Sport Secretary': 'କ୍ରୀଡ଼ା ସମ୍ପାଦକ',
  'Cultural Secretary': 'ସାଂସ୍କୃତିକ ସମ୍ପାଦକ',
  'Member': 'ସଦସ୍ୟ'
};

// Member Categories aligned with backend Member model
export const MEMBER_CATEGORIES = [
  { value: 'president', label: 'President (ସଭାପତି)' },
  { value: 'secretary', label: 'Secretary (ସମ୍ପାଦକ)' },
  { value: 'committee', label: 'Committee Member (କମିଟି ସଦସ୍ୟ)' },
  { value: 'member', label: 'General Member (ସାଧାରଣ ସଦସ୍ୟ)' }
];
