var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About component</h3>
//         );
//     }
// });


var About = (props) => {
    return (
        <div>
            <h1 className="text-centered">About</h1>
            <p>
                This is a weather application buil on React. This app is build by watching Udemy course.
            </p>
            <p>Here are some tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - a javascript framework
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map API</a> - used to grab cities weather.
                </li>
            </ul>
        </div>

    );
};

module.exports = About;