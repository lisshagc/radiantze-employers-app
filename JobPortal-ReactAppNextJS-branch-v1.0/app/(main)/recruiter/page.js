
export default function RecuriterPage() {
    return (
<div className="page-content bg-white">
        {/* contact area*/}
        <div className="content-block">
			{/* Browse Jobs*/}
			<div className="section-full bg-white p-t50 p-b20">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4 m-b30">
							<div className="sticky-top">
								<div className="candidate-info company-info">
									<div className="candidate-detail text-center">
										<div className="canditate-des">
											<a href="javascript:void(0);">
												<img alt="" src="images/logo/icon3.jpg"/>
											</a>
											<div className="upload-link" title="update" data-bs-toggle="tooltip" data-placement="right">
												<input type="file" className="update-flie"/>
												<i className="fas fa-pencil-alt"></i>
											</div>
										</div>
										<div className="candidate-title">
											<h4 className="m-b5"><a href="javascript:void(0);">@COMPANY</a></h4>
										</div>
									</div>
									<ul>
										<li><a href="company-profile.html" className="active">
											<i className="far fa-user" aria-hidden="true"></i> 
											<span>Company Profile</span></a></li>
										<li><a href="company-post-jobs.html">
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
									<h5 className="font-weight-700 float-start text-uppercase">Company Profile</h5>
									<a href="company-profile.html" className="site-button right-arrow button-sm float-end">Back</a>
								</div>
								<form>
									<div className="row m-b30">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Company Name</label>
												<input type="text" className="form-control" placeholder="Enter Company Name"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Your Email</label>
												<input type="email" className="form-control" placeholder="info@gmail.com"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Website</label>
												<input type="text" className="form-control" placeholder="Website Link"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Founded Date </label>
												<input type="email" className="form-control" placeholder="17/12/2021"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Category</label>
												<select>
													<option>Web Designer</option>
													<option>Web Developer</option>
												</select>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Country</label>
												<input type="email" className="form-control" placeholder="London"/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<label>Description:</label>
												<textarea className="form-control"></textarea>
											</div>
										</div>
									</div>
									{/* Contact Information*/}
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 float-start text-uppercase">Contact Information</h5>
									</div>
									<div className="row m-b30">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Phone</label>
												<input type="text" className="form-control" placeholder="+1 123 456 7890"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Email</label>
												<input type="email" className="form-control" placeholder="exemple@gmail.com"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Contry</label>
												<input type="text" className="form-control" placeholder="India"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>City</label>
												<input type="email" className="form-control" placeholder="Delhi"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Zip</label>
												<input type="email" className="form-control" placeholder="504030"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Address</label>
												<input type="email" className="form-control" placeholder="New york city"/>
											</div>
										</div>
										<div className="col-lg-12">
											<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57784.32772205062!2d75.85546240000001!3d25.151897599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1545138498580" style={{border:0, width: '100%', height:'300px'}} allowFullScreen></iframe>
										</div>
									</div>
									{/* Social Link*/}
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 float-start text-uppercase">Social link</h5>
									</div>
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Facebook</label>
												<input type="text" className="form-control" placeholder="https://www.facebook.com/"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Twitter</label>
												<input type="email" className="form-control" placeholder="https://www.twitter.com/"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Google</label>
												<input type="text" className="form-control" placeholder="https://www.google.com/"/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="form-group">
												<label>Linkedin</label>
												<input type="email" className="form-control" placeholder="https://www.linkedin.com/"/>
											</div>
										</div>
									</div>
									<button type="submit" className="site-button m-b30">Update Setting</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
            {/* Browse Jobs END*/}
		</div>
    </div>);
    }