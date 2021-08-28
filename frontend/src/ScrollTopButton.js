import { useEffect, useRef } from "react";
import "./ScrollTopButton.css"

function ScrollTopButton() {
    const button = useRef(null);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                button.current.classList.add("hidden");
            } else {
                button.current.classList.remove("hidden");
            }
        })
    },  []);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <svg className="go-top-button hidden" fill="currentColor" viewBox="0 0 16 16" onClick={scrollToTop} ref={button}>
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
        </svg>
    );
}

export default ScrollTopButton