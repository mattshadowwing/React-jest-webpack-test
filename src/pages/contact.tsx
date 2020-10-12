import * as React from 'react';
import {ContactError} from './contactError';
class Contact extends React.Component<any, any> {
    constructor (props: any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            topic: '',
            message: '',
            contactErrors: {name:'', email: '', topic: '', message: ''},
            nameValid: '',
            emailValid: '',
            topicValid: '',
            messageValid: '',
            formValid: false
        }
    }

    public handleUserInput = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    public validateField(fieldName:any, value:any) {
        const fieldValidationErrors = this.state.contactErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let topicValid = this.state.topicValid;
        let messageValid = this.state.messageValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.match(/.*[a-zA-Z].*$/i);
                fieldValidationErrors.name = nameValid ? '' : ' is empty';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid or empty';
                break;
            case 'topic':
                topicValid = value.match(/.*[a-zA-Z0-9].*$/i);
                fieldValidationErrors.topic = topicValid ? '' : ' is empty';
                break;
            case 'message':
                messageValid = value.length >= 1;
                fieldValidationErrors.message = messageValid ? '' : ' is empty';
                break;
            default:
                break;
        }
        this.setState({contactErrors: fieldValidationErrors,
            nameValid,
            emailValid,
            topicValid,
            messageValid
        }, this.validateForm);
    }

    public validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.topicValid && this.state.messageValid});
    }

    public errorClass(error:any) {
        return(
            error === null ? 'has-error' : ''
        );
    }

    public render() {
        return (
            <div className="contact section">
                <div className="wrapper">
                    <div className="sidebar">
                        <h6>Submenu</h6>
                    </div>
                    <div className="main">
                        <h3>Contact Pagina</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis, magna nec efficitur tempor, dui eros fringilla tellus, vitae consequat augue dolor at mauris. Nunc tempor rutrum dolor, sit amet scelerisque lacus feugiat non. Maecenas a tincidunt justo, ac blandit arcu. Sed nec congue ex. Nullam pulvinar libero eu dolor congue commodo. Nam sed pharetra orci. Nunc ultrices sit amet magna non vestibulum. Morbi ut dignissim quam. Etiam eget pellentesque nisi</p>
                        <div className="contact-errors">
                            <ContactError contactErrors={this.state.contactErrors} />
                        </div>
                        <form className="demoForm">
                            <div className="form-group">
                                <label htmlFor="name">Naam<span className="required">*</span></label>
                                <div className="input">
                                    <input type="text" className={`form-control ${this.errorClass(this.state.nameValid)}`} name="name" required={true} value={this.state.name} onChange={this.handleUserInput}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email<span className="required">*</span></label>
                                <div className="input">
                                    <input type="email" className={`form-control ${this.errorClass(this.state.emailValid)}`} name="email" required={true} value={this.state.email} onChange={this.handleUserInput}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="topic">Onderwerp<span className="required">*</span></label>
                                <div className="input">
                                    <input type="text" className={`form-control ${this.errorClass(this.state.topicValid)}`} name="topic" required={true} value={this.state.topic} onChange={this.handleUserInput}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Berlcht<span className="required">*</span></label>
                                <div className="input">
                                    <textarea className={`form-control ${this.errorClass(this.state.messageValid)}`} name="message" required={true} onChange={this.handleUserInput}>
                                        {this.state.message}
                                    </textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn" disabled={!this.state.formValid}>Verstuur</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;