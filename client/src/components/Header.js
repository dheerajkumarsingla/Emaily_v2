import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{

    renderLeftContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                   <li><a href="/auth/google">Login with Google</a></li>
                )
            default:
                return (
                    <li><a href="/api/logout">Logout</a></li>
                )
        }
    }
    // 
    renderRightContent() {
        return (
            <Link 
                className="left brand-logo" 
                to={this.props.auth? '/surveys': '/'}
            >
                Emaily
            </Link>
        )
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    {this.renderRightContent()}
                    <ul className="right">
                        {this.renderLeftContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return { auth }
}

export default connect(mapStateToProps)(Header);
