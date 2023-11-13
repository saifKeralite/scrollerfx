// Set the scroll speed factor (adjust this value to control the scroll speed)
const scrollSpeedFactor = 4; // Adjust as needed
let currentBreakCount = 0;
let currentCount = 0;
/**
 * To handle scroll event
 * @param {*} event - event parameter.
 */

let allowScrolling = false;
let activateScroll = false;
function handleScroll(event, settings) {
  if (!allowScrolling) {
    event.preventDefault(); // Prevent the default scroll behavior
  } else {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    const delta = event.deltaY * settings; // Adjust the scroll speed
    window.scrollTo({
      top: currentScrollTop + delta,
      behavior: "smooth", // Use smooth scrolling for a nicer effect
    });
  }
}

function isClassVisible(className, count, callback) {
  const elements = document.querySelectorAll(className);
  if (elements.length === 0) {
    return false; // Return false if no elements with the class exist
  }

  const options = {
    threshold: 0.85, // Custom threshold for 75% visibility
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        // Perform your action when an element with the class is visible here
      }
    });
  }, options);

  elements.forEach((element) => {
    observer.observe(element);
  });
}

/**
 * Set scroll speed function
 * @param {*} getOption - scroll speed option.
 */

function setSpeed(getOption) {
  switch (getOption) {
    case "slow":
      return 1;
    case "fast":
      return 5;
    case "default":
      return 4;
    default:
      return null;
  }
}

/**
 * Scroller function
 * @param {*} options - event options
 */

function scrollerFx(options) {
  // Default options
  const defaults = {
    scrollSpeed: scrollSpeedFactor, // You can define the default scroll speed
    breaks: [], // An array to store class names for breaks
  };
  let getSpeed = setSpeed(options["scrollSpeed"]);
  // Merge user options with defaults
  const settings = Object.assign({}, defaults, options);
  // Function to initialize the library
  this.init = function () {
    // Add the wheel event listener to the window
    document.body.style.overflow = "hidden";
    window.addEventListener(
      "wheel",
      function (event) {
        handleScroll(event, getSpeed ? getSpeed : options["scrollSpeed"]);
      },
      {
        passive: false,
      }
    );
    // Find all elements with the provided class names in the breaks array
    settings.breaks.forEach((breakClassName, i) => {
      const element = document.querySelector(`${breakClassName}`);
      if (!element) {
        return;
      }
      currentBreakCount += 1;
      element.classList.add("sc-paused");
      isClassVisible(
        breakClassName,
        settings.breaks.length,
        (visibleElement) => {
          activateScroll = false;
          visibleElement.classList.remove("sc-paused");
          element.addEventListener("animationend", () => {
            // Your custom code when an element with the class is clicked
            element.classList.add("sc-finished");
            allowScrolling = true;
          });

          element.addEventListener("animationstart", () => {
            allowScrolling = false;
          });
        }
      );
    });
  };

  // Automatically initialize the library when the DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    this.init();
  });
}

if (window) window.scrollerFx = scrollerFx;
export default scrollerFx;
