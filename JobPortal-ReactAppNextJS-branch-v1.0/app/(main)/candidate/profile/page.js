"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
export default function CandidatePage() {
	const [loggedInUser, setLoggedInUser]= useState("");
	useEffect(() => {
			// Check if the authToken exists in the cookies
			const token = Cookies.get('authdata');
			
			if (token) {
				const tokenJson=JSON.parse(token);
			  setLoggedInUser(tokenJson["name"]);
			}
		  }, []);  


    return (
        <div className="page-content bg-white">
		{/*-- contact area */}
        <div className="content-block">
			{/*-- Browse Jobs */}
			<div className="section-full bg-white browse-job p-t50 p-b20">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 m-b30">
							<div className="sticky-top">
								<div className="candidate-info">
									<div className="candidate-detail text-center">
										<div className="canditate-des">
											<a href="javascript:void(0);">
												<img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"/>
											</a>
											<div className="upload-link" title="update" data-bs-toggle="tooltip" data-placement="right">
												<input type="file" className="update-flie"/>
												<i className="fa fa-camera"></i>
											</div>
										</div>
										<div className="candidate-title">
											<div className="">
												<h4 className="m-b5"><a href="javascript:void(0);">{loggedInUser}</a></h4>
											</div>
										</div>
									</div>
									<ul>
										<li><a href="jobs-profile.html" className="active">
											<i className="far fa-user" aria-hidden="true"></i> 
											<span>Profile</span></a></li>
										<li><a href="jobs-my-resume.html">
											<i className="far fa-file-alt" aria-hidden="true"></i> 
											<span>My Resume</span></a></li>
										<li><a href="jobs-saved-jobs.html">
											<i className="far fa-heart" aria-hidden="true"></i> 
											<span>Saved Jobs</span></a></li>
										<li><a href="jobs-applied-job.html">
											<i className="fa fa-briefcase" aria-hidden="true"></i> 
											<span>Applied Jobs</span></a></li>
										<li><a href="jobs-alerts.html">
											<i className="far fa-bell" aria-hidden="true"></i> 
											<span>Job Alerts</span></a></li>
										<li><a href="jobs-cv-manager.html">
											<i className="far fa-id-card" aria-hidden="true"></i> 
											<span>CV Manager</span></a></li>
										<li><a href="jobs-change-password.html">
											<i className="fa fa-key" aria-hidden="true"></i> 
											<span>Change Password</span></a></li>
										<li><a href="index.html">
											<i className="fas fa-sign-out-alt" aria-hidden="true"></i> 
											<span>Log Out</span></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-9 col-lg-8 m-b30">
							<div className="job-bx job-profile">
								<div className="job-bx-title clearfix">
									<h5 className="font-weight-700 float-start text-uppercase">Basic Information</h5>
									<a href="index.html" className="site-button right-arrow button-sm float-end">Back</a>
								</div>
								<form>
									<div className="row m-b30">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Your Name:</label>
												<input type="text" className="form-control" defaultValue={loggedInUser}/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Professional title:</label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Languages:</label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Age:</label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Current Salary($):</label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Expected Salary:</label>
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<label>Description:</label>
												<textarea className="form-control" defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."}></textarea>
											</div>
										</div>
									</div>
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 float-start text-uppercase">Contact Information</h5>
									</div>
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Phone:</label>
												<input type="text" className="form-control" placeholder="+1 123 456 7890"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Email Address:</label>
												<input type="text" className="form-control" placeholder="info@example.com"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Country:</label>
												<input type="text" className="form-control" placeholder="Country Name"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Postcode:</label>
												<input type="text" className="form-control" placeholder="112233"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>City:</label>
												<input type="text" className="form-control" placeholder="London"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Full Address:</label>
												<input type="text" className="form-control" placeholder="New york City"/>
											</div>
										</div>
									</div>
									<button className="site-button m-b30">Save Setting</button>
								</form>
							</div>    
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
    );
  }
  