import React, {Component} from 'react';
import { connect } from "react-redux";
import loading from '../images/loading.gif';

class Projects extends Component{
    componentWillMount() {
        this._fetchData();
    }

    componentDidMount() {
        document.querySelector('h1').innerText = 'Artyom Timchenko projects page';
    }

    _fetchData() {
        this.props.loadContent('projects');
    }

    render(){
        let isLoading = this.props.state.isFetching;
        let content = isLoading?'':(!!this.props.state.content_projects?this.props.state.content_projects.projects:'');
        return (
            <div className="projects">
                {isLoading && <img src={loading} alt="loading" className="loading"/>}
                {!isLoading && !!content && (
                    <div className="projects__content">
                        <h2>Projects</h2>
                        <ul className="projects-list">
                            {
                                content.map((project,i)=>(
                                    <li key={i}>
                                        <p className="project-name">
                                            <a href={project.link}>{project.name}</a>
                                        </p>
                                        <img src={project.image} alt={project.name} className="project-image"/>
                                        <p className="project-description">{project.description}</p>
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
        loadContent: (fileName) => dispatch({type:"LOAD_CONTENT", payload:fileName}),
        unmountComponent: () => dispatch({type:"UNMOUNT_COMPONENT"})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Projects);