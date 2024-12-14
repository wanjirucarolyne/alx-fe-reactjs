import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Dynamic route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected route for profile */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
            {/* Nested routes */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>

        {/* Redirect unhandled routes */}
        <Route path="*" element={<Navigate to="/profile/details" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
