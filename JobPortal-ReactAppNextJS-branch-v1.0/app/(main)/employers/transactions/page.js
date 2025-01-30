"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export default function Transactions() {
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
										<li><a href="company-transactions.html" className="active">
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
							<div className="job-bx table-job-bx clearfix">
								<div className="job-bx-title clearfix">
									<h5 className="font-weight-700 float-start text-uppercase">Transaction History</h5>
									<a href="company-post-jobs.html" className="site-button right-arrow button-sm float-end">Back</a>
								</div>
								<table>
									<thead>
										<tr>
											<th>Order ID</th>
											<th>Type</th>
											<th>Amount</th>
											<th>Date</th>
											<th>Payment Method</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="order-id text-primary">#123</td>
											<td className="job-name"><a href="javascript:void(0);">Social Media Expert</a></td>
											<td className="amount text-primary">$99.00</td>
											<td className="date">Dec 15,2021</td>
											<td className="transfer">Paypal</td>
											<td className="expired pending">Pending </td>
										</tr>
										<tr>
											<td className="order-id text-primary">#456</td>
											<td className="job-name"><a href="javascript:void(0);">Web Designer</a></td>
											<td className="amount text-primary">$199.00</td>
											<td className="date">Nov 10,2021</td>
											<td className="transfer">Bank Transfer</td>
											<td className="expired pending">Pending</td>
										</tr>
										<tr>
											<td className="order-id text-primary">#789</td>
											<td className="job-name"><a href="javascript:void(0);">Finance Accountant</a></td>
											<td className="amount text-primary">$299.00</td>
											<td className="date">Oct 5,2021</td>
											<td className="transfer">Paypal</td>
											<td className="expired pending">Pending </td>
										</tr>
										<tr>
											<td className="order-id text-primary">#101</td>
											<td className="job-name"><a href="javascript:void(0);">Social Media Expert</a></td>
											<td className="amount text-primary">$399.00</td>
											<td className="date">Dec 15,2021</td>
											<td className="transfer">Bank Transfer</td>
											<td className="expired success">Successfull </td>
										</tr>
										<tr>
											<td className="order-id text-primary">#112</td>
											<td className="job-name"><a href="javascript:void(0);">Web Designer</a></td>
											<td className="amount text-primary">$499.00</td>
											<td className="date">Nov 10,2021</td>
											<td className="transfer">Paypal</td>
											<td className="expired pending">Pending </td>
										</tr>
										<tr>
											<td className="order-id text-primary">#987</td>
											<td className="job-name"><a href="javascript:void(0);">Finance Accountant</a></td>
											<td className="amount text-primary">$599.00</td>
											<td className="date">Oct 5,2021</td>
											<td className="transfer">Bank Transfer</td>
											<td className="expired success">Successfull </td>
										</tr>
										<tr>
											<td className="order-id text-primary">#654</td>
											<td className="job-name"><a href="javascript:void(0);">Social Media Expert</a></td>
											<td className="amount text-primary">$699.00</td>
											<td className="date">Dec 15,2021</td>
											<td className="transfer">Paypal</td>
											<td className="expired success">Successfull </td>
										</tr>
										<tr>
											<td className="order-id text-primary">#321</td>
											<td className="job-name"><a href="javascript:void(0);">Web Designer</a></td>
											<td className="amount text-primary">$799.00</td>
											<td className="date">Nov 10,2021</td>
											<td className="transfer">Bank Transfer</td>
											<td className="expired success">Successfull </td>
										</tr>
										<tr>
											<td className="order-id text-primary">#569</td>
											<td className="job-name"><a href="javascript:void(0);">Finance Accountant</a></td>
											<td className="amount text-primary">$899.00</td>
											<td className="date">Oct 5,2021</td>
											<td className="transfer">Paypal</td>
											<td className="expired pending">Pending </td>
										</tr>
										<tr>
											<td className="order-id text-primary">#563</td>
											<td className="job-name"><a href="javascript:void(0);">Web Designer</a></td>
											<td className="amount text-primary">$999.00</td>
											<td className="date">Nov 10,2021</td>
											<td className="transfer">Bank Transfer</td>
											<td className="expired success">Successfull </td>
										</tr>
									</tbody>
								</table>
								<div className="pagination-bx float-end">
									<ul className="pagination">
										<li className="previous"><a href="javascript:void(0);"><i className="ti-arrow-left"></i> Prev</a></li>
										<li className="active"><a href="javascript:void(0);">1</a></li>
										<li><a href="javascript:void(0);">2</a></li>
										<li><a href="javascript:void(0);">3</a></li>
										<li className="next"><a href="javascript:void(0);">Next <i className="ti-arrow-right"></i></a></li>
									</ul>
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