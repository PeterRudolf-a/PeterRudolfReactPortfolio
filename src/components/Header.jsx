import Nav from "./Navigation";

export default function Header() {
    return (
        <header className="main-header">
            <h1>Peter Rudolf</h1>
            <Nav
                about="/about"
                portfolio="/portfolio"
                contact="/contact"
                resume="/resume"
            />
        </header>
    );
}