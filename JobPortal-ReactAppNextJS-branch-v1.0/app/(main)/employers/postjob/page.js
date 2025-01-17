"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function PostJob() {
    const [formData, setFormData] = useState({
		
		title:'',
		minsalary: '',
		maxsalary: '',
		jobtag: '',
		email: '',
		location: '',
        personaldetail:'',
        number:'',
		
	  });

	   // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   // Handle form submission
   const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form data (e.g., send to an API or store it)
    console.log('Form Data:', formData);
    // You can reset the form or provide feedback here
  };
	
	const [loggedInUser, setLoggedInUser]= useState("");
	useEffect(() => {
			// Check if the authToken exists in the cookies
			const token = Cookies.get('authdata');
			
			if (token) {
				const tokenJson=JSON.parse(token);
			  setLoggedInUser(tokenJson["name"]);
			}
		  }, []);  
    return(
<div>
<div className="page-content bg-white">
        
        <div className="content-block">
			
			<div className="section-full bg-white p-t50 p-b20">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 m-b30">
							<div className="sticky-top">
								<div className="candidate-info company-info">
									<div className="candidate-detail text-center">
										<div className="canditate-des">
											<a href="javascript:void(0);">
												<img alt="" src="images/logo/icon3.jpg" />
											</a>
											<div className="upload-link" title="update" data-bs-toggle="tooltip" data-placement="right">
												<input type="file" className="update-flie" />
												<i className="fas fa-pencil-alt"></i>
											</div>
										</div>
										<div className="candidate-title">
											<h4 className="m-b5"><a href="javascript:void(0);">@COMPANY</a></h4>
										</div>
									</div>
									<ul>
										<li><a href="company-profile.html">
											<i className="far fa-user" aria-hidden="true"></i> 
											<span>Company Profile</span></a></li>
										<li><a href="company-post-jobs.html" className="active">
											<i className="far fa-file-alt" aria-hidden="true"></i> 
											<span>Post A Job</span></a></li>
										<li><a href="company-transactions.html">
											<i className="fa fa-random" aria-hidden="true"></i>
											<span>Transactions</span></a></li>
										<li><a href="company-manage-job.html">
											<i className="fa fa-briefcase" aria-hidden="true"></i> 
											<span>Manage jobs</span></a></li>
										<li><a href="company-resume.html">
											<i className="far fa-id-card" aria-hidden="true"></i>
											<span>Resume</span></a></li>
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
							<div className="job-bx submit-resume">
								<div className="job-bx-title clearfix">
									<h5 className="font-weight-700 float-start text-uppercase">Post A Job</h5>
									<a href="company-profile.html" className="site-button right-arrow button-sm float-end">Back</a>
								</div>
								<form>
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Job Title</label>
												<input type="text" className="form-control"   name="title"
              value={formData.title}
              onChange={handleChange} 
              />
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Your email</label>
												<input type="email" className="form-control" placeholder="info@gmail.com" 
                                                 name="email"
                                                 value={formData.email}
                                                 onChange={handleChange}/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<label>Job Tags</label>
												<input type="text" className="form-control tags_input" 
                                                 name="jobtag"
                                                 value={formData.jobtag}
                                                 onChange={handleChange}/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Job Type</label>
												<select>
													<option>Full Time</option>
													<option>Part Time</option>
													<option>Internship</option>
													<option>Freelance</option>
												</select>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Experience</label>
												<select>
													<option>1 Years</option>
													<option>2 Years</option>
													<option>3 Years</option>
													<option>4 Years</option>
													<option>5 Years</option>
												</select>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Minimum Salary ($):</label>
												<input type="email" className="form-control" placeholder="e.g. 10000"
                                                 name="minsalary"
                                                 value={formData.minsalary}
                                                 onChange={handleChange} />
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Maximum Salary ($):</label>
												<input type="text" className="form-control" placeholder="e.g. 20000" 
                                                 name="maxsalary"
                                                 value={formData.maxsalary}
                                                 onChange={handleChange}/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Region</label>
												<select>
													<option>New York</option>
													<option>London</option>
													<option>Los Angeles</option>
												</select>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Location</label>
												<input type="text" className="form-control" placeholder="London" 
                                                 name="location"
                                                 value={formData.location}
                                                 onChange={handleChange}/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<label>Upload File</label>
												<div className="custom-file">
													<p className="m-a0">
														<i className="fa fa-upload"></i>
														Upload File
													</p>
													<input type="file" className="site-button form-control" id="customFile" />
												</div>
											</div>
										</div>
									</div>
									<button type="button" className="site-button m-b30">Upload</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
           
		</div>
    </div>
    
	<div className="modal fade lead-form-modal" id="car-details" tabIndex="-1" role="dialog" >
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<div className="modal-body row m-a0 clearfix">
					<div className="col-lg-6 col-md-6 d-flex p-a0"  style={{
    backgroundImage: 'url(images/background/bg3.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}>
						
					</div>
					<div className="col-lg-6 col-md-6 p-a0">
						<div className="lead-form browse-job text-left">
							<form>
								<h3 className="m-t0">Personal Details</h3>
								<div className="form-group">
									<input  className="form-control" placeholder="Name"  name="personaldetail"
                                                 value={formData.personaldetail}
                                                 onChange={handleChange}/>
								</div>	
								<div className="form-group">
									<input  className="form-control" placeholder="Mobile Number"  name="number"
                                                 value={formData.number}
                                                 onChange={handleChange}/>
								</div>
								<div className="clearfix">
									<button type="button" className="btn-primary site-button btn-block">Submit </button>
								</div>
							</form>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
    </div>
    )
    }