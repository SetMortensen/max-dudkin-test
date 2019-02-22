import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Overview from '../container/Overview';
import Projects from '../container/Projects';
import Contacts from '../container/Contacts';
import './router.scss'

const BasicRouter = () => (
    <div className="content">
        <Router>
            <div className="container">
                <aside>
                    <nav>
                        <Link to="/">Overview</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contacts">Contacts</Link>
                    </nav>
                </aside>
                <main>
                    <Route exact path="/" component={Overview} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contacts" component={Contacts} />
                </main>
            </div>
        </Router>
    </div>
);

export default BasicRouter;