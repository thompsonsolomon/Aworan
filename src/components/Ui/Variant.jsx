export const carouselVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.8,
      },
    },
  };
  