import React, {PropTypes} from 'react';

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
        alert('this is saved');
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
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

module.exports = CoursePage;