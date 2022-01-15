/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reaons I'm excited to learn React</h1>
            <ol>
                <li>Because I want to develop front-end apps</li>
                <li>Without spending too much time</li>
                <li>React has a huge community</li>
                <li>Make good use of react libraries to develop complex features</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer><small>© 2022 SPD development. All rights reserved.</small></footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))