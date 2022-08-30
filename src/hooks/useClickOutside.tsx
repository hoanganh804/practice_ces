import { RefObject, useEffect, useState } from "react";

const useClickOutside = (ref: RefObject<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { isVisible, setIsVisible };
};

export default useClickOutside;
