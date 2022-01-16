import ReactDOM from 'react-dom'

import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

import "./style.css"

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