import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/z/styles/styles.scss';

class UserInfo extends React.Component {

    constructor(props) {
        super(props);
        this.renderPage = this.renderPage.bind(this);
    }

    renderPage(){
        const {loginReducer} = this.props;
        return <div>
                {
                    loginReducer.userInfo
                    ?<div style={{width:300, height:300, border:'solid 1px #ccc', borderRadius:10, margin:'auto', marginTop:10, textAlign:'center'}}>
                        <div  style={{margin:'20px 0 10px 0'}}>You have loged by <span style={{fontWeight:'bold'}}>{loginReducer.userInfo.usertype}</span></div>
                        <div>
                            <img src={loginReducer.userInfo.avatar}/>
                        </div>
                        <div style={{fontWeight:'bold'}}>
                            {loginReducer.userInfo.fullname}
                        </div>
                        <div style={{marginTop:20}}>
                            <a href ='http://localhost:3000/logout' className='btn btn-primary'>Logout</a>
                        </div>
                    </div>
                    :<div className='z_loading'></div>
                }
                </div>
                
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
)(UserInfo);
