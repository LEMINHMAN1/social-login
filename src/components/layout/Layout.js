import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/z/styles/styles.scss';

class Layout extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }
    

    renderPage(){
        const {children} = this.props;
        return (
            <div style={{width:400, margin:'auto', marginTop:20}}>
                    <div style={{textAlign:'center', marginBottom:10, fontWeight:'bold'}}>
                        Login By
                    </div>
                    <a href='http://localhost:3000/auth/facebook?re=localhost:4000' style={{marginRight:5}} className='btn btn-primary'>Facebook</a>
                    <a href='#' style={{marginRight:5}} className='btn btn-primary'>LinkedIn</a>
                    <a href='#' style={{marginRight:5}} className='btn btn-primary'>Twitter</a>
                    <a href='http://localhost:3000/auth/google?re=localhost:4000' style={{marginRight:5}} className='btn btn-primary'>Google Plus</a>
            </div>
        )
    }
    render(){
        const {children} = this.props;
        return <div>
                   {children}
                </div>
    }
}

Layout.propTypes = {
    children: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer
    };
};

export default connect(
    mapStateToProps
)(Layout);
