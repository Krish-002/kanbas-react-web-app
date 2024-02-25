import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

function CourseStatus() {
    return (
      <div>
        <h3>Course Status</h3>
        <div className="button-group">
          <button>UnPublish</button>
          <button>Published</button>
        </div>
        <button>Import Existing Content</button>
        <button>Import From Commons</button>
        <ul>
          <li><Link to="/choose-home-page">Choose Home Page</Link></li>
          <li><Link to="/course-stream">View Course Stream</Link></li>
          <li><Link to="/new-announcement">New Announcement</Link></li>
          <li><Link to="/new-analytics">New Analytics</Link></li>
          <li><Link to="/course-notifications">View Course Notifications</Link></li>
        </ul>
        </div>
    );
    }

export default CourseStatus;

  