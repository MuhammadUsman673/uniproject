import { ref, onMounted, onUnmounted } from "vue";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export function useResponsive() {
  const isMobile = ref(false);
  const isTablet = ref(false);

  const updateSize = () => {
    const width = window.innerWidth;
    isMobile.value = width < MOBILE_BREAKPOINT;
    isTablet.value = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
  };

  onMounted(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
  });

  return { isMobile, isTablet };
}
