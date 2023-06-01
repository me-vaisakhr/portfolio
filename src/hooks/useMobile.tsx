import { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setMobileDisplayStatus] = useState(false);

  useEffect(() => {
    if (!window) return;
    setMobileDisplayStatus(window.matchMedia("(max-width: 767px)").matches);
  }, []);

  return [isMobile];
};

export default useMobile;
