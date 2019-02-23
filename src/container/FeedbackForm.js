import React, { Component } from 'react';
import './FeedbackForm.scss';
import { connect } from 'react-redux'

class FeedbackForm extends Component{
    constructor(props){
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

        this.state = {
            name:'',
            mail:'',
            tel:''
        }
    }

    onInputChange(e){
        this.setState({[e.target.name] : e.target.value});
        if (e.target.value === '') {
            e.target.nextElementSibling.style.opacity = '1';
        }
    }

    onInputBlur(e){
        if (e.target.value !== '') {
            e.target.nextElementSibling.style.opacity = '0';
        }
    }

    onFormSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
        this.props.submitFeedbackForm(data);
    }

    render(){
        return (
            <form className="feedback-form" onSubmit={this.onFormSubmit}>
                <div className="name">
                    <input onBlur={this.onInputBlur} value={this.state.name}
                           onChange={this.onInputChange}  id="name"
                           required type="text" name="name"/>
                    <label htmlFor="name">Enter your name</label>
                </div>
                <div className="mail">
                    <input onBlur={this.onInputBlur} value={this.state.mail}
                           onChange={this.onInputChange}  id="mail"
                           required type="email" name="mail"/>
                    <label htmlFor="mail">Enter your mail for feedback</label>
                </div>
                <div className="tel">
                    <input onBlur={this.onInputBlur} value={this.state.tel}
                           onChange={this.onInputChange}  id="tel"
                           required type="text" name="tel"/>
                    <label htmlFor="tel">Enter your telephone for feedback</label>
                </div>
                <div className="submit">
                    <button>Ask me for feedback</button>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitFeedbackForm: (data) => dispatch({type:'SUBMIT_FEEDBACK_FORM', payload:data})
    }
};

export default connect(null,mapDispatchToProps)(FeedbackForm);