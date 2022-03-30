import { UserRole } from "../utils/auth.roles";

export const defaultMenuType = 'menu-default' // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const adminRoot = '/app';
export const searchPath = `${adminRoot}/pages/miscellaneous/search`
export const apiUrl = 'https://api.coloredstrategies.com';

export const subHiddenBreakpoint = 1440
export const menuHiddenBreakpoint = 768

export const defaultLocale = 'tr'
export const defaultDirection = 'ltr'
export const localeOptions = [
  { id: 'en', name: 'English', direction: 'ltr' },
  { id: 'tr', name: 'Türkçe', direction: 'ltr' }
]

export const firebaseConfig = {
  apiKey: "AIzaSyDu6JUZimszvyqfEYVAYiItqqHhqYgGkFw",
  authDomain: "vue-admin-6f3ba.firebaseapp.com",
  projectId: "vue-admin-6f3ba",
  storageBucket: "vue-admin-6f3ba.appspot.com",
  messagingSenderId: "792126189678",
  appId: "1:792126189678:web:6fe08e61abef113250f67f"
};

export const currentUser = {
  id: 1,
  img: '/assets/img/profiles/l-1.jpg',
  role: UserRole.Admin
}

export const isAuthGuardActive = true;
export const themeRadiusStorageKey = 'theme_radius'
export const themeSelectedColorStorageKey = 'light.orangecarrot'
export const defaultColor = 'light.orangecarrot'
export const colors = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel']
