
export function useScrollTo() {
  const scrollTo = (selector: string, offset: number = 0 ) => {
    if (!window) return;

    const element = window.document.querySelector(selector);
    if (!element) return;

    window.scrollTo({
      behavior: "smooth",
      top: element.getBoundingClientRect().top + offset,
    });
  };
  return [
    scrollTo
  ];
}
