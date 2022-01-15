/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const element = (
    <nav>
        <h1>Swaraj Dash</h1>
        <ol>
            <li>Developer</li>
            <li>Engineer</li>
            <li>Football fan</li>
        </ol>
    </nav>
)

document.getElementById("root").append(element)

/*
You will see [object Object] in the browser
The purpose of this exercise is to remind that JSX returns plain JS objects
It is only when we render it using ReactDOM.render() are the objects rendered as real DOM objects
*/