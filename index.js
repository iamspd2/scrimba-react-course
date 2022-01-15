/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function Learn() {
    return(
        <ol>
            <li>Because I want to develop front-end apps</li>
            <li>Without spending too much time</li>
            <li>React has a huge community</li>
            <li>Make good use of react libraries to develop complex features</li>
        </ol>
    )
}

ReactDOM.render(<Learn />, document.getElementById("root"))