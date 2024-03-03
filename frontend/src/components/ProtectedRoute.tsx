// components/ProtectedRoute.js

import { isAuthenticatedUser } from '../utils/authService';
import { useRouter } from 'next/router';

const ProtectedRoute = ({ children }: any) => { // TODO: update the type
    const router = useRouter();

    // Check if the user is authenticated
    if (!isAuthenticatedUser()) {
        // Redirect to the login page if not authenticated
        router.push('/login'); // Adjust the route accordingly
        return null;
    }

    // Render the protected content if authenticated
    return children;
};

export default ProtectedRoute;
