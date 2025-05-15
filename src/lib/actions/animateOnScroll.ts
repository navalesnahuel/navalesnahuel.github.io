interface AnimateOnScrollOptions {
  threshold?: number;
  delay?: string;
  duration?: string;
  initialOpacity?: number;
  initialTransform?: string;
  once?: boolean;
}

export function animateOnScroll(
  node: HTMLElement,
  options: AnimateOnScrollOptions = {},
) {
  const {
    threshold = 0.1,
    delay = "0ms",
    duration = "600ms",
    initialOpacity = 0,
    initialTransform = "translateY(20px)",
    once = true,
  } = options;

  let observer: IntersectionObserver;

  node.style.opacity = initialOpacity.toString();
  if (initialTransform && initialTransform !== "none") {
    node.style.transform = initialTransform;
  }
  const timingFunction =
    "var(--ease-in-out-cubic, cubic-bezier(0.65, 0, 0.35, 1))";
  node.style.transition = `opacity ${duration} ${timingFunction} ${delay}, transform ${duration} ${timingFunction} ${delay}`;

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        node.style.opacity = "1";
        if (initialTransform && initialTransform !== "none") {
          node.style.transform = "translateY(0)";
        }
        if (once && observer) {
          observer.unobserve(node);
        }
      } else if (!once) {
        node.style.opacity = initialOpacity.toString();
        if (initialTransform && initialTransform !== "none") {
          node.style.transform = initialTransform;
        }
      }
    });
  };

  observer = new IntersectionObserver(handleIntersect, { threshold });
  observer.observe(node);

  return {
    destroy() {
      if (observer) {
        observer.unobserve(node);
      }
    },
  };
}
