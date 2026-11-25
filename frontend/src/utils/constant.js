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
