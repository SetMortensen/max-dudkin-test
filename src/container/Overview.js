import React, {Component} from 'react';
import { connect } from "react-redux";
import loading from '../images/loading.gif';

class Overview extends Component{
    componentWillMount() {
        this._fetchData();
    }

    componentDidMount() {
        document.querySelector('h1').innerText = 'Artyom Timchenko portflio app';
    }

    _fetchData() {
        this.props.loadContent('overview');
    }

    render(){
        let isLoading = this.props.state.isFetching;
        let content = isLoading?'':(!!this.props.state.content_overview?this.props.state.content_overview:'');
        return (
            <div className="overview">
                {isLoading && <img src={loading} alt="loading" className="loading"/>}
                {!isLoading && !!content &&  (
                    <React.Fragment>
                        <img src={content.photo} alt="Artyom Timchenko" className="overview__photo"/>
                        <div className="overview__content">
                            <h2>Education</h2>
                            {content.education.map((obj,i) => (
                                <ul key={i}>
                                    <li><span className="name">name</span><span className="value">{obj.name}</span></li>
                                    <li><span className="name">address</span><span className="value">{obj.address}</span></li>
                                    <li><span className="name">years</span><span className="value">{obj.years}</span></li>
                                </ul>
                            ))}
                            <h2>Experience</h2>
                            {content.experience.map((obj,i) => (
                                <ul key={i}>
                                    <li><span className="name">name</span><span className="value">{obj.name}</span></li>
                                    <li><span className="name">position</span><span className="value">{obj.position}</span></li>
                                    <li><span className="name">address</span><span className="value">{obj.address}</span></li>
                                    <li><span className="name">period</span><span className="value">{obj.period}</span></li>
                                </ul>
                            ))}
                        </div>
                    </React.Fragment>
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

export default connect(mapStateToProps,mapDispatchToProps)(Overview);