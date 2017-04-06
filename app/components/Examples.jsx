var React = require('react');
var {Link} =  require('react-router');

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples component</h3>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-centered page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Floresti">Floresti, MD</Link>
                </li>
                <li>
                    <Link to="/?location=Buchares">Bucharest, RO</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;