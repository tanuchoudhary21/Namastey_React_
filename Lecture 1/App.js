/*
    Create a Nested Structure Using React:
        <div id="parent">
            <div id = "child">
                <h1>I am Heading Tag</h1>
            </div>
        </div>

        React.createElement --> creates Object and not HTML Tag
*/

const heading = React.createElement("div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [
            React.createElement(
                "h1",
                {},
                "I am Heading 1 Tag!"
            ),
            React.createElement(
                "h2",
                {},
                "I am Heading 2 Tag!"
            ),
    ]
    )
 );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);