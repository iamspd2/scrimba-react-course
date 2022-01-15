/*
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" width="70px" />
            </nav>
            <h1>Reaons I'm excited to learn React</h1>
            <ol>
                <li>Because I want to develop front-end apps</li>
                <li>Without spending too much time</li>
                <li>React has a huge community</li>
                <li>Make good use of react libraries to develop complex features</li>
            </ol>
        </header>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <footer><small>© 2022 SPD development. All rights reserved.</small></footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))