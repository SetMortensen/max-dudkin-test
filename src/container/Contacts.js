import React, {Component} from 'react';
import { connect } from "react-redux";
import loading from '../images/loading.gif';

class Contacts extends Component{
    componentWillMount() {
        this._fetchData();
    }

    componentDidMount() {
        document.querySelector('h1').innerText = 'Artyom Timchenko contacts page';
    }

    _fetchData() {
        this.props.loadContent('contacts');
    }

    formatLink(key,value){
        switch (key){
            case 'vk':
            case 'linkedIn':
                value = `<a href="${value}">${value}</a>`;
                break;
            case 'skype':
                value = `<a href="skype:${value}">${value}</a>`;
                break;
            case 'mail':
                value = `<a href="mailto:${value}">${value}</a>`;
                break;
            case 'tel':
                value = `<a href="tel:${value}">${value}</a>`;
                break;
            default:
                break;
        }

        return value;
    }

    render(){
        let isLoading = this.props.state.isFetching;
        let content = isLoading?'':(!!this.props.state.content_contacts?this.props.state.content_contacts:'');
        return (
            <div className="contacts">
                {isLoading && <img src={loading} alt="loading" className="loading"/>}
                {!isLoading && !!content &&  (
                    <div className="contacts__content">
                        <h2>Contacts</h2>
                        <ul>
                            {
                                Object.keys(content)
                                    .map((key)=>(
                                        <li key={key}>
                                            <span className="name">{key}</span>
                                            <span className="value"
                                                  dangerouslySetInnerHTML={{__html: this.formatLink(key,content[key])}}>
                                            </span>
                                        </li>
                                    ))
                            }
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadContent: (fileName) => dispatch({type:"LOAD_CONTENT", payload:fileName})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);