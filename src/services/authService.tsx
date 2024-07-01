// src/services/authService.ts
import api from '../utils/api';

// Interface for the current user
interface CurrentUser {
  uid: string;
  email: string;
  displayName: string;
  token: string;
}

// Store the current user in local storage or retrieve from API response
let currentUser: CurrentUser | null = JSON.parse(localStorage.getItem('currentUser') || 'null');

export const login = async (email: string, password: string): Promise<void> => {
  const response = await api.post('/login', { email, password });
  currentUser = response.data;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

export const signup = async (email: string, password: string): Promise<void> => {
  const response = await api.post('/signup', { email, password });
  currentUser = response.data;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

export const logout = (): void => {
  currentUser = null;
  localStorage.removeItem('currentUser');
};

export const useAuth = (): { currentUser: CurrentUser | null } => {
  return { currentUser };
};

// Update user profile
export const updateProfile = async (profileData: Partial<CurrentUser>): Promise<void> => {
  if (!currentUser) throw new Error('No current user');
  const response = await api.put(`/users/${currentUser.uid}`, profileData);
  currentUser = { ...currentUser, ...response.data };
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};
