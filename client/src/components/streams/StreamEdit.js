import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues)
    }
    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return (
                <div>
                    hello
                </div>
            )
        }
        return (
            <div>
                <h3>Edit this Stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit} /> {/*adding callback*/}  {/* this pick is used to only send specific values to the component otherwise id, userId get also passed */}
            </div>
        );
    }
};

const mapStatToProps = (state, ownProps) => { //ownProps is the props recieved in the component
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(
    mapStatToProps,
    { editStream, fetchStream }
)(StreamEdit);