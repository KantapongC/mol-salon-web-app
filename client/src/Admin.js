import React from 'react';
import Login from './views/Admin/Login/Login';
import AdminMain from './views/Admin/Main/Admin';
import { connect } from 'react-redux';

const Admin = ({ auth }) => {
	return <>{auth.uid ? <AdminMain /> : <Login />}</>;
};

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps)(React.memo(Admin));