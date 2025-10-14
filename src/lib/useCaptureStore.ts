import { create } from 'zustand';

type CaptureState = {
  capture: string | null;
  setCapture: (src: string | null) => void;
  clearCapture: () => void;
};

export const useCaptureStore = create<CaptureState>((set) => ({
  capture: null,
  setCapture: (src: string | null) => set({ capture: src }),
  clearCapture: () => set({ capture: null }),
}));

export default useCaptureStore;
