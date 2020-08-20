import React from 'react';
import { Field, reduxForm } from 'redux-form'; // Field is a component(name starts with Captal letter) that will be rendered and reduxForm is a function

class StreamForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message" >
                    <div className="header" >
                        {error}
                    </div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            // <input       //for using specific values
            //  onChange={formProps.input.onChange}
            //  value={formProps.input.value} />
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        // event.preventDefault(); reduxForm handle this for us
        this.props.onSubmit(formValues) //passing values to  parent component
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="ui form error"> {/*error in the className tells the semantic css to show error messages*/}
                <Field name="title" component={this.renderInput} label="Enter Title" />
                {/*name is compulsory for the Field and component tells the React how and what to render on this Field. label is passed as the props to renderInput function.*/}
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary" >Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm', // name is the purpose of the form
    validate
})(StreamForm);