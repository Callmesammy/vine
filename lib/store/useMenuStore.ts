import { create } from 'zustand';

interface MenuState {
  isOpen: boolean;
  activePreviewSlug: string;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  setActivePreviewSlug: (slug: string) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  activePreviewSlug: 'the-orchard-villa',
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  setActivePreviewSlug: (slug: string) => set({ activePreviewSlug: slug }),
}));
