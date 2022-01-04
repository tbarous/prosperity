import {useEffect, useState} from "react";

/**
 * Handle the appearance of a React Node in the DOM.
 * Mostly useful for a HOC parent to manage the appearance
 * of a child Node in the DOM.
 */
function useOnScroll() {
    const [scrolled, setScrolled] = useState(0);

    const listener = (event: Event) => setScrolled(window.scrollY);

    useEffect(() => {
        setScrolled(window.scrollY);

        window.addEventListener("scroll", listener);

        return () => window.removeEventListener("scroll", listener);
    }, []);

    return scrolled;
}

export default useOnScroll;