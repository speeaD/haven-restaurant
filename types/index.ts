export interface ScrollReveal {
    reveal: (
      target: string,
      options: {
        distance?: string;
        origin?: string;
        duration?: number;
        delay?: number;
        interval?: number;
      }
    ) => void;
  }
  
  declare global {
    interface Window {
      ScrollReveal: () => ScrollReveal;
    }
  }