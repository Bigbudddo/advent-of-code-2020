import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Day1 from './views/days/Day1';
import Day2 from './views/days/Day2';

const App = () => {
    return (
        <Router>
            <div className="site-layout">
                <Navbar />
                <main>
                    <Switch>
                        <Route path='/' exact={true}>
                            <Home />
                        </Route>
                        <Route path='/day1' exact={true}>
                            <Day1 />
                        </Route>
                        <Route path='/day2' exact={true}>
                            <Day2 />
                        </Route>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    )
};

export default App;