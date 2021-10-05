import "./menu-mobile.scss";

export default function MenuMobile({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu-mobile " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about-me">About Me</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>

            </ul>
        </div>
    )
}