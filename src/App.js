import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Modal } from 'ui/Modal';
import routes from './routes';
import style from './style.scss';
import { Description } from 'ui/Description';

class App extends Component {
    state = { modal: null };

    handleModal = (type, modalProps) => {
        this.setState({ modal: type, modalProps });
    };

    handleModalClose = () => {
        this.setState({ modal: null });
    };

    render() {
        const { modal, modalProps } = this.state;
        return (
            <Router>
                <div className="app">
                    {routes.map(route => {
                        const { path, exact, Component } = route;
                        return (
                            <Route
                                key={path}
                                path={path}
                                exact={exact}
                                component={() => <Component handleModal={this.handleModal} />}
                            />
                        );
                    })}
                </div>
                {/*<div className="footer">*/}
                {/*    <Description>© SEAGATE & Team Empire</Description>*/}
                {/*    <Link to="/policy">Политика конфиденциальности</Link>*/}
                {/*</div>*/}
                <Modal
                    modal={modal}
                    handleModal={this.handleModal}
                    onClose={this.handleModalClose}
                    modalProps={modalProps}
                />
            </Router>
        );
    }
}

export default App;
