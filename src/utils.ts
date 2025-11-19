import { SessionData } from './types';

const API_KEY_STORAGE = 'velaxis-api-key';
const SESSION_STORAGE = 'velaxis-session';

export const loadApiKey = (): string => {
  return localStorage.getItem(API_KEY_STORAGE) || '';
};

export const saveApiKey = (key: string): void => {
  localStorage.setItem(API_KEY_STORAGE, key);
};

export const loadSession = (): SessionData => {
  const stored = localStorage.getItem(SESSION_STORAGE);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return { insights: [], posts: [] };
    }
  }
  return { insights: [], posts: [] };
};

export const saveSession = (session: SessionData): void => {
  localStorage.setItem(SESSION_STORAGE, JSON.stringify(session));
};

export const getCharCountColor = (count: number): string => {
  if (count > 280) return 'text-red-600';
  if (count >= 200) return 'text-green-600';
  return 'text-yellow-600';
};
