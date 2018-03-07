import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
class CoursePage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ""}
        };
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course : course});
    }

    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render(){
        debugger;
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>
                <input 
                type="text"
                onChange= {this.onTitleChange.bind(this)}
                value = {this.state.course.title}/>
                <input 
                type="submit"
                onClick= {this.onClickSave.bind(this)}
                value = "save"/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CoursePage);