"use client"
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

const HeaderComponent = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loggedInUser, setLoggedInUser]= useState("");
	useEffect(() => {
		// Check if the authToken exists in the cookies
		const token = Cookies.get('authdata');
		
		if (token) {
			const tokenJson=JSON.parse(token);
			console.log("cookies", tokenJson);
			console.log(tokenJson["name"]);
		  setIsLoggedIn(true);  // User is logged in if token exists
		  setLoggedInUser(tokenJson["name"]);
		} else {
		  setIsLoggedIn(false);  // User is not logged in if no token exists
		}
	  }, []);  // Only run once on component mount
	
	  const handleLogout = () => {
		// Remove the token from cookies on logout
		
		window.location.href = '/login';
		Cookies.remove('authdata');
		setIsLoggedIn(false);  // Update state to reflect logout
		
	  };


  return (
    <header className="site-header mo-left header fullwidth">
		<div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix">
                <div className="container clearfix">
                    <div className="logo-header mostion logo-dark">
						<a href=""><img src="/images/see.png" alt=""/></a>
					</div>
                    <div className="logo-header mostion logo-white">
						<a href=""><img src="/images/logo-white.png" alt=""/></a>
                    </div>
					
					<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
                    <div className="extra-nav">
                        <div className="extra-cell">
							 {/* Display different buttons based on login status */}
							 {!isLoggedIn ? (
								<>
									<a href="/recruiter/login" className="p-2"><i className="fa fa-user"></i> I'm an Employer</a>
									<a href="/login" className="site-button"><i className="fa fa-lock"></i> Login</a>
								</>
								) : (
								<><span>Welcome, {loggedInUser}!</span><button onClick={handleLogout} className="site-button"><i className="fa fa-lock"></i> Logout</button></>
								)}
                        </div>
                    </div>
                    <div className="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
						<div className="logo-header logo-dark">
							<a href="index.html"><img src="/images/see.png" alt=""/></a>
						</div>
						<div className="logo-header logo-white">
							<a href="index.html"><img src="/images/logo-white.png" alt=""/></a>
                        </div>
						<ul className="nav navbar-nav">
							<li>
								<a href="javascript:void(0);">Home <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="index.html" className="dez-page">Home 1</a></li>
									<li><a href="index-2.html" className="dez-page">Home 2</a></li>
									<li><a href="index-3.html" className="dez-page">Home 3 <span className="new-page">New</span></a></li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);">For Candidates <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="jobs-profile.html" className="dez-page">My Profile</a></li>
									<li><a href="jobs-my-resume.html" className="dez-page">My Resume</a></li>
									<li><a href="jobs-applied-job.html" className="dez-page">Applied Job</a></li>
									<li><a href="jobs-alerts.html" className="dez-page">Jobs Alerts</a></li>
									<li><a href="jobs-saved-jobs.html" className="dez-page">Saved Job</a></li>
									<li><a href="jobs-cv-manager.html" className="dez-page">CV Manager</a></li>
									<li><a href="jobs-change-password.html" className="dez-page">Change Password</a></li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);">For Employers <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="company-profile.html" className="dez-page">Company Profile</a></li>
									<li><a href="company-resume.html" className="dez-page">Employer Resume</a></li>
									<li><a href="company-post-jobs.html" className="dez-page">Post A Jobs</a></li>
									<li><a href="company-manage-job.html" className="dez-page">Manage jobs</a></li>
									<li><a href="company-transactions.html" className="dez-page">Transactions</a></li>
									<li><a href="browse-candidates.html" className="dez-page">Browse Candidates</a></li>
									<li><a href="javascript:void(0);" className="dez-page">Register <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="create-account.html" className="dez-page">Employers Register</a></li>
											<li><a href="account-fresher.html" className="dez-page">Register Fresher</a></li>
											<li><a href="account-professional.html" className="dez-page">Register Professional</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<a href="javascript:void(0);">Pages <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="about-us.html" className="dez-page">About Us</a></li>
									<li><a href="job-detail.html" className="dez-page">Job Detail</a></li>
									<li><a href="companies.html" className="dez-page">companies</a></li>
									<li><a href="free-job-alerts.html" className="dez-page">free job alerts</a></li>
									<li><a href="javascript:void(0);" className="dez-page">Browse Job <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="browse-job-list.html" className="dez-page">browse job list</a></li>
											<li><a href="browse-job-grid.html" className="dez-page">browse job grid </a></li>
											<li><a href="browse-job-filter-list.html" className="dez-page">browse filter list </a></li>
											<li><a href="browse-job-filter-grid.html" className="dez-page">browse filter grid </a></li>
										</ul>
									</li>
									<li><a href="javascript:void(0);" className="dez-page">Jobs<i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="category-all-jobs.html" className="dez-page">all jobs</a></li>
											<li><a href="category-company-jobs.html" className="dez-page">company jobs</a></li>
											<li><a href="category-designations-jobs.html" className="dez-page">designations jobs</a></li>
											<li><a href="category-jobs.html" className="dez-page">category jobs</a></li>
											<li><a href="category-location-jobs.html" className="dez-page">location jobs</a></li>
											<li><a href="category-skill-jobs.html" className="dez-page">skill jobs</a></li>
										</ul>
									</li>									
									<li><a href="javascript:void(0);" className="dez-page">Portfolio <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="portfolio-grid-2.html" className="dez-page">Portfolio Grid 2 </a></li>
											<li><a href="portfolio-grid-3.html" className="dez-page">Portfolio Grid 3 </a></li>
											<li><a href="portfolio-grid-4.html" className="dez-page">Portfolio Grid 4 </a></li>
										</ul>
									</li>
									<li><a href="javascript:void(0);" className="dez-page">Login <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="login.html" className="dez-page">login 1</a></li>
											<li><a href="login-2.html" className="dez-page">login 2 </a></li>
											<li><a href="login-3.html" className="dez-page">login 3 </a></li>
										</ul>
									</li>
									<li><a href="javascript:void(0);" className="dez-page">register <i className="fa fa-angle-right"></i></a>
										<ul className="sub-menu">
											<li><a href="register.html" className="dez-page">register 1</a></li>
											<li><a href="register-2.html" className="dez-page">register 2 </a></li>
										</ul>
									</li>
									<li><a href="error-404.html" className="dez-page">Error 404</a></li>
									<li><a href="coming-soon.html" className="dez-page">Coming Soon</a></li>
									<li><a href="contact.html" className="dez-page">Contact Us</a></li>
								</ul>
							</li>
							{/* <li>
								<a href="javascript:void(0);">Blog <i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a href="blog-classNameic.html" className="dez-page">classNameic</a></li>
									<li><a href="blog-classNameic-sidebar.html" className="dez-page">classNameic Sidebar</a></li>
									<li><a href="blog-detailed-grid.html" className="dez-page">Detailed Grid</a></li>
									<li><a href="blog-detailed-grid-sidebar.html" className="dez-page">Detailed Grid Sidebar</a></li>
									<li><a href="blog-left-img.html" className="dez-page">Left Image Sidebar</a></li>
									<li><a href="blog-details.html" className="dez-page">Blog Details</a></li>
								</ul>
							</li> */}
						</ul>		
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default HeaderComponent;