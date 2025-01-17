"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function PostJob() {
    const [formData, setFormData] = useState({
		personaldetails:'',
		number: '',
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
										<li><a href="company-post-jobs.html">
											<i className="far fa-file-alt" aria-hidden="true"></i> 
											<span>Post A Job</span></a></li>
										<li><a href="company-transactions.html">
											<i className="fa fa-random" aria-hidden="true"></i>
											<span>Transactions</span></a></li>
										<li><a href="company-manage-job.html" className="active">
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
							<div className="job-bx clearfix">
								<div className="job-bx-title clearfix">
									<h5 className="font-weight-700 float-start text-uppercase">Manage jobs</h5>
									<div className="float-end">
										<span className="select-title">Sort by freshness</span>
										<select>
											<option>All</option>
											<option>None</option>
											<option>Read</option>
											<option>Unread</option>
											<option>Starred</option>
											<option>Unstarred</option>
										</select>
									</div>
								</div>
								<table className="table-job-bx cv-manager company-manage-job">
									<thead>
										<tr>
											<th className="feature">
												<div className="form-check">
													<input type="checkbox" id="check12" className="form-check-input selectAllCheckBox" name="example1" />
													<label className="form-check-label" htmlFor="check12"></label>
												</div>
											</th>
											<th>Job Title</th>
											<th>Applications</th>
											<th>Date</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check1" name="example1" />
													<label className="form-check-label" htmlFor="check1"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Social Media Expert</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(5) Applications</td>
											<td className="expired pending">Pending </td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check2" name="example1" />
													<label className="form-check-label" htmlFor="check2"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Web Designer</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(8) Applications</td>
											<td className="expired text-red">Expired</td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check3" name="example1" />
													<label className="form-check-label" htmlFor="check3"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Finance Accountant</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(9) Applications</td>
											<td className="expired pending">Pending </td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check4" name="example1" />
													<label className="form-check-label" htmlFor="check4"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Social Media Expert</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(7) Applications</td>
											<td className="expired success">Active </td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check5" name="example1" />
													<label className="form-check-label" htmlFor="check5"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Web Designer</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(6) Applications</td>
											<td className="expired pending">Pending </td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check6" name="example1" />
													<label className="form-check-label" htmlFor="check6"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Finance Accountant</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(3) Applications</td>
											<td className="expired text-red">Expired</td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check7" name="example1" />
													<label className="form-check-label" htmlFor="check7"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Social Media Expert</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(2) Applications</td>
											<td className="expired success">Active </td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check8" name="example1" />
													<label className="form-check-label" htmlFor="check8"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Web Designer</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(4) Applications</td>
											<td className="expired success">Active </td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check9" name="example1" />
													<label className="form-check-label" htmlFor="check9"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Finance Accountant</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(1) Applications</td>
											<td className="expired text-red">Expired</td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
										<tr>
											<td className="feature">
												<div className="form-check">
													<input type="checkbox" className="form-check-input" id="check10" name="example1" />
													<label className="form-check-label" htmlFor="check10"></label>
												</div>
											</td>
											<td className="job-name">
												<a href="javascript:void(0);">Web Designer</a>
												<ul className="job-post-info">
													<li><i className="fas fa-map-marker-alt"></i> Sacramento, California</li>
													<li><i className="far fa-bookmark"></i> Full Time</li>
													<li><i className="fa fa-filter"></i> Web Designer</li>
												</ul>
											</td>
											<td className="application text-primary">(1) Applications</td>
											<td className="expired success">Active </td>
											<td className="job-links">
												<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
												<i className="fa fa-eye"></i></a>
												<a href="javascript:void(0);"><i className="ti-trash"></i></a>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="pagination-bx m-t30 float-end">
									<ul className="pagination">
										<li className="previous"><a href="javascript:void(0);"><i className="ti-arrow-left"></i> Prev</a></li>
										<li className="active"><a href="javascript:void(0);">1</a></li>
										<li><a href="javascript:void(0);">2</a></li>
										<li><a href="javascript:void(0);">3</a></li>
										<li className="next"><a href="javascript:void(0);">Next <i className="ti-arrow-right"></i></a></li>
									</ul>
								</div>
								
								<div className="modal fade modal-bx-info" id="exampleModalLong" tabIndex="-1" role="dialog" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<div className="logo-img">
													<img alt="" src="images/logo/icon2.png" />
												</div>
												<h5 className="modal-title">Company Name</h5>
												<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												<ul>
													<li><strong>Job Title :</strong><p> Web Developer – PHP, HTML, CSS </p></li>
													<li><strong>Experience :</strong><p>5 Year 3 Months</p></li>
													<li><strong>Deseription :</strong>
														<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.</p></li>
												</ul>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
											</div>
										</div>
									</div>
								</div>
								
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
					<div className="col-lg-6 col-md-6 d-flex p-a0" style={{ backgroundImage: 'url(images/background/bg3.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
						
					</div>
					<div className="col-lg-6 col-md-6 p-a0">
						<div className="lead-form browse-job text-left">
							<form>
								<h3 className="m-t0">Personal Details</h3>
								<div className="form-group">
									<input  className="form-control" placeholder="Name" name="personaldetails"
              value={formData.personaldetails}
              onChange={handleChange} />
								</div>	
								<div className="form-group">
									<input  className="form-control" placeholder="Mobile Number" name="number"
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