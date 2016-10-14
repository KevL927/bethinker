import React from 'react';
import ReactDOM from 'react-dom';
import { fetchStickies } from '../actions/actions'
import { deleteSticky } from '../actions/actions'
import { connect } from 'react-redux';
// import StickyList from './StickyList';
import NewSticky from './NewSticky';
import Sticky from './Sticky';
// var FontAwesome = require('react-fontawesome');

var clickToDisplay = false;

var StickyList = React.createClass({
    componentWillMount: function() {
        this.props.fetchStickies(this.props.currentUser);
    },
    componentDidMount: function() {
        this.props.fetchStickies(this.props.currentUser);
    },
    //components
    componentWillReceiveProps: function(newProps) {
    },
    shouldComponentUpdate: function(newProps, newState) {
        return true;
    },
    componentWillUpdate: function(nextProps, nextState) {
    },
    componentDidUpdate: function(prevProps, prevState) {
    },
    componentWillUnmount: function() {
    },


    render: function(props) {

        //bind allows us to bind the function to this(StickyList) component specifically, so child(Sticky) can easily grab this prop
        var deleteSticky = this.props.deleteSticky.bind(this);

         var stickyList = this.props.stickies.reverse().map(function(sticky, index) {
                return ( 
                	<div>
	                    <Sticky title = {sticky.title}
	                    content = {sticky.content}
	                    key={index}
	                    stickyId={sticky._id}
                        deleteSticky={deleteSticky}
	                    /> 
                    </div>
                )
        });


        return (
        	<div>
	        	<div>
	        		<NewSticky />
	        	</div>
	            <div className="sticky_list"> 

	            	{ stickyList } 
	            </div>
	        </div>
        );
    },

});

var mapStateToProps = function(state) {
    return {
        currentUser: state.currentUser,
        stickies: state.stickies

    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        fetchStickies: function(currentUser) {
            dispatch(fetchStickies(currentUser));
        },

        deleteSticky: function(stickyId) {
            dispatch(deleteSticky(stickyId));
        }
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(StickyList);
