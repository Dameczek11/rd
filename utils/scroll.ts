export const scrollToId = (id: string, offset = -82) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition + offset,
      behavior: "smooth",
    });
  }
};
