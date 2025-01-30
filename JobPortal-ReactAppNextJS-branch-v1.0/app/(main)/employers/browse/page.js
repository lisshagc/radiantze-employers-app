"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function Browse() {
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
        
        <div className="dez-bnr-inr overlay-black-middle" style={{
    backgroundImage: 'url(images/banner/bnr1.jpg)',
  }}>
            <div className="container">
                <div className="dez-bnr-inr-entry">
                    <h1 className="text-white">Browse Candidates</h1>
					
					<div className="breadcrumb-row">
						<ul className="list-inline">
							<li><a href="index.html">Home</a></li>
							<li>Browse Candidates</li>
						</ul>
					</div>
					
                </div>
            </div>
        </div>
        
		<div className="section-full browse-job-find">
			<div className="container">
				<div className="find-job-bx">
					<form className="dezPlaceAni">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="form-group">
									<label>Job Title, Keywords, or Phrase</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder=""/>
										<div className="input-group-append">
										  <span className="input-group-text"><i className="fa fa-search"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="form-group">
									<label>City, State or ZIP</label>
									<div className="input-group">
										<input type="text" className="form-control" placeholder=""/>
										<div className="input-group-append">
										  <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="form-group">
									<select>
										<option>Select Sector</option>
										<option>Construction</option>
										<option>Corodinator</option>
										<option>Employer</option>
										<option>Financial Career</option>
										<option>Information Technology</option>
										<option>Marketing</option>
										<option>Quality check</option>
										<option>Real Estate</option>
										<option>Sales</option>
										<option>Supporting</option>
										<option>Teaching</option> 
									</select>
								</div>
							</div>
							<div className="col-lg-2 col-md-6">
								<button type="submit" className="site-button btn-block">Find Job</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		
		<div className="content-block">
            <div className="section-full bg-white browse-job p-b50">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-8">
							<div className="m-b30">
								<input type="text" className="form-control" placeholder="Search freelancer services"/>
							</div>
							<ul className="post-job-bx">
								<li>
									<div className="post-bx">
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<a href="javascript:void(0);"><span>
													<img alt="" src="images/testimonials/pic1.jpg"/>
												</span></a>
											</div>
											<div className="job-post-info">
												<h4><a href="job-detail.html">Digital Marketing Executive</a></h4>
												<ul>
													<li><i className="fas fa-map-marker-alt"></i> New York</li>
													<li><i className="fas fa-dollar-sign"></i> Full Time</li>
													<li><i className="far fa-clock"></i> Published 11 months ago</li>
												</ul>
											</div>
										</div>
										<div className="d-flex">
											<div className="job-time me-auto">
												<a href="javascript:void(0);"><span>Javascript</span></a>
												<a href="javascript:void(0);"><span>CSS</span></a>
												<a href="javascript:void(0);"><span>HTML</span></a>
												<a href="javascript:void(0);"><span>Bootstrap</span></a>
											</div>
											<div className="salary-bx">
												<span>$45 Per Hour</span>
											</div>
										</div>
										<label className="like-btn">
											  <input type="checkbox"/>
											  <span className="checkmark"></span>
										</label>
									</div>
								</li>
								<li>
									<div className="post-bx">
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<a href="javascript:void(0);"><span>
													<img alt="" src="images/testimonials/pic2.jpg"/>
												</span></a>
											</div>
											<div className="job-post-info">
												<h4><a href="job-detail.html">Digital Marketing Executive</a></h4>
												<ul>
													<li><i className="fas fa-map-marker-alt"></i> New York</li>
													<li><i className="fas fa-dollar-sign"></i> Full Time</li>
													<li><i className="far fa-clock"></i> Published 11 months ago</li>
												</ul>
											</div>
										</div>
										<div className="d-flex">
											<div className="job-time me-auto">
												<a href="javascript:void(0);"><span>Javascript</span></a>
												<a href="javascript:void(0);"><span>CSS</span></a>
												<a href="javascript:void(0);"><span>HTML</span></a>
												<a href="javascript:void(0);"><span>Bootstrap</span></a>
											</div>
											<div className="salary-bx">
												<span>$45 Per Hour</span>
											</div>
										</div>
										<label className="like-btn">
											  <input type="checkbox"/>
											  <span className="checkmark"></span>
										</label>
									</div>
								</li>
								<li>
									<div className="post-bx">
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<a href="javascript:void(0);"><span>
													<img alt="" src="images/testimonials/pic3.jpg"/>
												</span></a>
											</div>
											<div className="job-post-info">
												<h4><a href="job-detail.html">Digital Marketing Executive</a></h4>
												<ul>
													<li><i className="fas fa-map-marker-alt"></i> New York</li>
													<li><i className="fas fa-dollar-sign"></i> Full Time</li>
													<li><i className="far fa-clock"></i> Published 11 months ago</li>
												</ul>
											</div>
										</div>
										<div className="d-flex">
											<div className="job-time me-auto">
												<a href="javascript:void(0);"><span>Javascript</span></a>
												<a href="javascript:void(0);"><span>CSS</span></a>
												<a href="javascript:void(0);"><span>HTML</span></a>
												<a href="javascript:void(0);"><span>Bootstrap</span></a>
											</div>
											<div className="salary-bx">
												<span>$45 Per Hour</span>
											</div>
										</div>
										<label className="like-btn">
											  <input type="checkbox"/>
											  <span className="checkmark"></span>
										</label>
									</div>
								</li>
								<li>
									<div className="post-bx">
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<a href="javascript:void(0);"><span>
													<img alt="" src="images/testimonials/pic1.jpg"/>
												</span></a>
											</div>
											<div className="job-post-info">
												<h4><a href="job-detail.html">Digital Marketing Executive</a></h4>
												<ul>
													<li><i className="fas fa-map-marker-alt"></i> New York</li>
													<li><i className="fas fa-dollar-sign"></i> Full Time</li>
													<li><i className="far fa-clock"></i> Published 11 months ago</li>
												</ul>
											</div>
										</div>
										<div className="d-flex">
											<div className="job-time me-auto">
												<a href="javascript:void(0);"><span>Javascript</span></a>
												<a href="javascript:void(0);"><span>CSS</span></a>
												<a href="javascript:void(0);"><span>HTML</span></a>
												<a href="javascript:void(0);"><span>Bootstrap</span></a>
											</div>
											<div className="salary-bx">
												<span>$45 Per Hour</span>
											</div>
										</div>
										<label className="like-btn">
											  <input type="checkbox"/>
											  <span className="checkmark"></span>
										</label>
									</div>
								</li>
								<li>
									<div className="post-bx">
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<a href="javascript:void(0);"><span>
													<img alt="" src="images/testimonials/pic2.jpg"/>
												</span></a>
											</div>
											<div className="job-post-info">
												<h4><a href="job-detail.html">Digital Marketing Executive</a></h4>
												<ul>
													<li><i className="fas fa-map-marker-alt"></i> New York</li>
													<li><i className="fas fa-dollar-sign"></i> Full Time</li>
													<li><i className="far fa-clock"></i> Published 11 months ago</li>
												</ul>
											</div>
										</div>
										<div className="d-flex">
											<div className="job-time me-auto">
												<a href="javascript:void(0);"><span>Javascript</span></a>
												<a href="javascript:void(0);"><span>CSS</span></a>
												<a href="javascript:void(0);"><span>HTML</span></a>
												<a href="javascript:void(0);"><span>Bootstrap</span></a>
											</div>
											<div className="salary-bx">
												<span>$45 Per Hour</span>
											</div>
										</div>
										<label className="like-btn">
											  <input type="checkbox"/>
											  <span className="checkmark"></span>
										</label>
									</div>
								</li>
								<li>
									<div className="post-bx">
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<a href="javascript:void(0);"><span>
													<img alt="" src="images/testimonials/pic3.jpg"/>
												</span></a>
											</div>
											<div className="job-post-info">
												<h4><a href="job-detail.html">Digital Marketing Executive</a></h4>
												<ul>
													<li><i className="fas fa-map-marker-alt"></i> New York</li>
													<li><i className="fas fa-dollar-sign"></i> Full Time</li>
													<li><i className="far fa-clock"></i> Published 11 months ago</li>
												</ul>
											</div>
										</div>
										<div className="d-flex">
											<div className="job-time me-auto">
												<a href="javascript:void(0);"><span>Javascript</span></a>
												<a href="javascript:void(0);"><span>CSS</span></a>
												<a href="javascript:void(0);"><span>HTML</span></a>
												<a href="javascript:void(0);"><span>Bootstrap</span></a>
											</div>
											<div className="salary-bx">
												<span>$45 Per Hour</span>
											</div>
										</div>
										<label className="like-btn">
											<input type="checkbox"/>
											<span className="checkmark"></span>
										</label>	
									</div>
								</li>
							</ul>
							<div className="pagination-bx m-t30">
								<ul className="pagination">
									<li className="previous"><a href="javascript:void(0);"><i className="ti-arrow-left"></i> Prev</a></li>
									<li className="active"><a href="javascript:void(0);">1</a></li>
									<li><a href="javascript:void(0);">2</a></li>
									<li><a href="javascript:void(0);">3</a></li>
									<li className="next"><a href="javascript:void(0);">Next <i className="ti-arrow-right"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4">
							<div className="sticky-top browse-candidates">
								<div className="clearfix m-b30">
									<h5 className="widget-title font-weight-700 text-uppercase">Keywords</h5>
									<div className="">
										<input type="text" className="form-control" placeholder="Search"/>
									</div>
								</div>
								<div className="clearfix m-b10">
									<h5 className="widget-title font-weight-700 m-t0 text-uppercase">Location</h5>
									<input type="text" className="form-control m-b30" placeholder="Location"/>
									<div className="input-group m-b20">
										<input type="text" className="form-control" placeholder="120"/>
										<select>
											<option>Km</option>
											<option>miles</option>
										</select>
									</div>
								</div>
								<div className="clearfix m-b30">
									<h5 className="widget-title font-weight-700 text-uppercase">Job type</h5>
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6 col-6">
											<div className="product-brand">
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check1" name="example1"/>
													<label className="form-check-label" htmlFor="check1">Freelance</label>
												</div>
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check2" name="example1"/>
													<label className="form-check-label" htmlFor="check2">Full Time</label>
												</div>
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check3" name="example1"/>
													<label className="form-check-label" htmlFor="check3">Internship</label>
												</div>
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check4" name="example1"/>
													<label className="form-check-label" htmlFor="check4">Part Time</label>
												</div>
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check5" name="example1"/>
													<label className="form-check-label" htmlFor="check5">Temporary</label>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 col-6">
											<div className="product-brand">
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check8" name="example1"/>
													<label className="form-check-label" htmlFor="check8">Internship</label>
												</div>
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check9" name="example1" />
													<label className="form-check-label" htmlFor="check9">Part Time</label>
												</div>
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check10" name="example1" />
													<label className="form-check-label" htmlFor="check10">Temporary</label>
												</div>
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check6" name="example1" />
													<label className="form-check-label" htmlFor="check6">Freelance</label>
												</div>
												<div className="form-check m-b5">
													<input type="checkbox" className="form-check-input" id="check7" name="example1" />
													<label className="form-check-label" htmlFor="check7">Full Time</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clearfix">
									<h5 className="widget-title font-weight-700 text-uppercase">Category</h5>
									<select>
										<option>Any Category</option>
										<option>Automotive Jobs</option>
										<option>Construction Facilities</option>
										<option>Design, Art & Multimedia</option>
										<option>Food Services</option>
									</select>
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
					<div className="col-lg-6 col-md-6 d-flex p-a0" style={{
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
									<input  className="form-control" placeholder="Name"
                                    name='personaldetails'
                                    value={formData.personaldetails}
                                    onChange={handleChange}/>
								</div>	
								<div className="form-group">
									<input  className="form-control" placeholder="Mobile Number"
                                    name='number'
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