/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

function Page() {
    return(
        <div>
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
            <footer><small>© 2022 SPD development. All rights reserved.</small></footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))