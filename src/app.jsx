var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://vivid-inferno-7991.firebaseio.com/';



var App = React.createClass({
  mixins: [ReactFire],
  componentWillMount: function(){
    this.bindAsObject(new Firebase(rootUrl +'items/'), 'items');
  },
  render: function() {
    console.log(this.state);
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
      </div>
    </div>
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
