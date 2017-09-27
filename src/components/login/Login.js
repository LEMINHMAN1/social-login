import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/z/styles/styles.scss';

class Login extends React.Component {

    constructor(props) {
        super(props);

    }

    renderPage(){
        return (
            <div style={{width:500, margin:'auto', marginTop:20}}>
                    <div style={{textAlign:'center', marginBottom:10, fontWeight:'bold'}}>
                        Login By
                    </div>
                    <div style={{textAlign:'center'}}>
                        <a href='http://localhost:3000/auth/facebook?re=http://localhost:4000' style={{marginRight:5}} className='btn btn-primary'>Facebook</a>
                        <a href='http://localhost:3000/auth/google?re=http://localhost:4000' style={{marginRight:5}} className='btn btn-primary'>Google Plus</a>
                        <a disabled='disabled' href='#' style={{marginRight:5}} className='btn btn-primary'>LinkedIn</a>
                        <a disabled='disabled' href='#' style={{marginRight:5}} className='btn btn-primary'>Twitter</a>
                    </div>

                    <div style={{textAlign:'center', fontSize:11, marginTop:10}}>
                        This example project demo Login Facebook and Google, do the same with Linkedin and Twitter
                    </div>
                    <div style={{textAlign:'center', fontSize:11, marginTop:10}}>
                        I used <a href='http://passportjs.org'>Passport</a> to apply the Social Login
                    </div>
            </div>
        )
    }
    render(){
        return <div>
                    {this.renderPage()}
                </div>
    }
}

const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    };
};

export default connect(
    mapStateToProps
)(Login);
