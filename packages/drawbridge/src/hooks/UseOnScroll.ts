import {useEffect, useState} from "react";

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