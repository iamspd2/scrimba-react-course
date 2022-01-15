/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" width="70px" />
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