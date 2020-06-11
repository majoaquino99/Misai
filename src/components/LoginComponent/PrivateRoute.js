import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { UserContext } from '../../controller/;

/*  ProtectedRoute takes in all the same props
that we had previously passed into our Route component
and returns the very same Route component using the render prop. */

const PrivateRoute = ({ component: Component, ...rest }) => {
	// useContext for authentication API
	/* const {currentUser} = useContext(UserContext); */
    return (
        {/* <Route
            {...rest}
            render={props =>
                // currentUser
				? (
                    <Component {...props} />
                ) : (
                    <Redirect to={'/'} />
                )
            }
        /> */}
    );
};


export default PrivateRoute;
