import React from 'react'
import Header from './HeaderComponent'
import HomePage from './HomeComponent.js'
import Schedule from './ScheduleComponent'
import SignUp from './SignUpComponent'
import WhyKungFu from "./WhyKungFuComponent"
import Philosophy from './PhilosophyComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Component } from 'react'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        curricula: state.curricula,
        events: state.events
    }
}

class Main extends Component {
    constructor(){
        super()
    }
    render() {

        const WhatWeTeach = ({match}) => {
            return(
                <WhatWeTeach 
                    curricula={this.props.curricula.filter(curricula => curricula.id === +match.params.curriculaId)[0]}
                />
            )
        }
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/schedule' render={() => <Schedule events={this.props.events} /> } />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/WhyKungFu' component={WhyKungFu} />
                    <Route path='/Philosophy' component={Philosophy} />
                    <Route exact path='/WhatWeTeach' render={() => <WhatWeTeach curricula={this.props.curricula} /> } />

                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));