export function handleScroll(event, settings, allowScrolling, customDeltaY) {
  if (!allowScrolling) {
    event.preventDefault(); // Prevent the default scroll behavior
  } else {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    const delta = customDeltaY * settings; // Adjust the scroll speed
    window.scrollTo({
      top: currentScrollTop + delta,
      behavior: "smooth", // Use smooth scrolling for a nicer effect
    });
  }
}
