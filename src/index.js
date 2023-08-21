import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Welcome to my chanel (dtk-dev18)</h1>
            <h2>Welcome to my chanel (dtk-dev18)</h2>
        </div>
    )
}

// Render component App vào #root element @React17
// ReactDOM.render(<App />, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

