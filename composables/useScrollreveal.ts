export const useScrollReveal = () => {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  const initHeaderAnimation = () => {
    const sr = window.ScrollReveal();
    
    sr.reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    sr.reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 500,
    });
    sr.reveal(".header__content .section__description", {
      ...scrollRevealOption,
      delay: 1000,
    });
    sr.reveal(".header__content .header__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
  };

  const initExploreAnimation = () => {
    const sr = window.ScrollReveal();
    
    sr.reveal(".explore__image img", {
      ...scrollRevealOption,
      origin: "left",
    });
    sr.reveal(".explore__content .section__header", {
      ...scrollRevealOption,
      delay: 500,
    });
    sr.reveal(".explore__content .section__description", {
      ...scrollRevealOption,
      delay: 1000,
    });
    sr.reveal(".explore__content .explore__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });
  };

  const initBannerAnimation = () => {
    const sr = window.ScrollReveal();
    
    sr.reveal(".banner__card", {
      ...scrollRevealOption,
      interval: 500,
    });
  };

  const initChefAnimation = () => {
    const sr = window.ScrollReveal();
    
    sr.reveal(".chef__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    sr.reveal(".chef__content .section__header", {
      ...scrollRevealOption,
      delay: 500,
    });
    sr.reveal(".chef__content .section__description", {
      ...scrollRevealOption,
      delay: 1000,
    });
    sr.reveal(".chef__list li", {
      ...scrollRevealOption,
      delay: 1500,
      interval: 500,
    });
  };

  return {
    initHeaderAnimation,
    initExploreAnimation,
    initBannerAnimation,
    initChefAnimation
  };
};