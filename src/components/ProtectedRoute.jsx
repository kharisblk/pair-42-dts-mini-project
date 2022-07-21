import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../authentication/firebase';

const ProtectedRoute = ({ children, loginOnly = true }) => {
    const [user, isLoading] = useAuthState(auth);

    if (isLoading) {
        return;
    }

    if (!user && loginOnly) {
        return <Navigate to="/login" />;
    }

    if (user && !loginOnly) {
        return <Navigate to="/home" />;
    }

    return children;
};

export default ProtectedRoute;