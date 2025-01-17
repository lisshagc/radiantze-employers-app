export default function ResumePage() {
  return (
    <div className="page-content">
      {/*-- inner page banner */}
      <div
        className="overlay-black-dark profile-edit p-t50 p-b20"
        style={{ backgroundImage: "url(/images/banner/bnr1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 candidate-info">
              <div className="candidate-detail">
                <div className="canditate-des text-center">
                  <a href="javascript:void(0);">
                    <img alt="" src="/images/team/pic1.jpg" />
                  </a>
                  <div
                    className="upload-link"
                    title="update"
                    data-bs-toggle="tooltip"
                    data-placement="right"
                  >
                    <input type="file" className="update-flie" />
                    <i className="fa fa-camera"></i>
                  </div>
                </div>
                <div className="text-white browse-job text-left">
                  <h4 className="m-b0">
                    John Doe
                    <a
                      className="m-l15 font-16 text-white"
                      data-bs-toggle="modal"
                      data-bs-target="#profilename"
                      href="#"
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                  </h4>
                  <p className="m-b15">
                    Freelance Senior PHP Developer at various agencies
                  </p>
                  <ul className="clearfix">
                    <li>
                      <i className="ti-location-pin"></i> Sacramento, California
                    </li>
                    <li>
                      <i className="ti-mobile"></i> +1 123 456 7890
                    </li>
                    <li>
                      <i className="ti-briefcase"></i> Fresher
                    </li>
                    <li>
                      <i className="ti-email"></i> info@example.com
                    </li>
                  </ul>
                  <div className="progress-box m-t10">
                    <div className="progress-info">
                      Profile Strength (Average)<span>70%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: "80%" }}
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <a href="javascript:void(0);">
                <div className="pending-info text-white p-a25">
                  <h5>Pending Action</h5>
                  <ul className="list-check secondry">
                    <li>Verify Mobile Number</li>
                    <li>Add Preferred Location</li>
                    <li>Add Resume</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/*-- Modal */}
        <div
          className="modal fade browse-job modal-bx-info editor"
          id="profilename"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="ProfilenameModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ProfilenameModalLongTitle">
                  Basic Details
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                              >
                                Fresher
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultValue={1}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault2"
                              >
                                Experienced
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Select Your Country</label>
                        <select>
                          <option>India</option>
                          <option>Australia</option>
                          <option>Bahrain</option>
                          <option>China</option>
                          <option>Dubai</option>
                          <option>France</option>
                          <option>Germany</option>
                          <option>Hong Kong</option>
                          <option>Kuwait</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Select Your Country</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Select Your Country"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Select Your City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Select Your City"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Telephone Number</label>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Country Code"
                            />
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Area Code"
                            />
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Email Address</label>
                        <h6 className="m-a0 font-14">info@example.com</h6>
                        <a href="#">Change Email Address</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="site-button">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*-- Modal End */}
      </div>
      {/*-- inner page banner END */}
      {/*-- contact area */}
      <div className="content-block">
        {/*-- Browse Jobs */}
        <div className="section-full browse-job content-inner-2 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 m-b30">
                <div className="sticky-top bg-white">
                  <div className="candidate-info onepage">
                    <ul>
                      <li>
                        <a
                          className="scroll-bar nav-link"
                          href="#resume_headline_bx"
                        >
                          <span>Resume Headline</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="scroll-bar nav-link"
                          href="#key_skills_bx"
                        >
                          <span>Key Skills</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="scroll-bar nav-link"
                          href="#employment_bx"
                        >
                          <span>Employment</span>
                        </a>
                      </li>
                      <li>
                        <a className="scroll-bar nav-link" href="#education_bx">
                          <span>Education</span>
                        </a>
                      </li>
                      <li>
                        <a className="scroll-bar nav-link" href="#it_skills_bx">
                          <span>IT Skills</span>
                        </a>
                      </li>
                      <li>
                        <a className="scroll-bar nav-link" href="#projects_bx">
                          <span>Projects</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="scroll-bar nav-link"
                          href="#profile_summary_bx"
                        >
                          <span>Profile Summary</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="scroll-bar nav-link"
                          href="#accomplishments_bx"
                        >
                          <span>Accomplishments</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="scroll-bar nav-link"
                          href="#desired_career_profile_bx"
                        >
                          <span>Desired Career Profile</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="scroll-bar nav-link"
                          href="#personal_details_bx"
                        >
                          <span>Personal Details</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="scroll-bar nav-link"
                          href="#attach_resume_bx"
                        >
                          <span>Attach Resume</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
                <div id="resume_headline_bx" className="job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b15">Resume Headline</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#resumeheadline"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  <p className="m-b0">Job board currently living in USA</p>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="resumeheadline"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="ResumeheadlineModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="ResumeheadlineModalLongTitle"
                          >
                            Resume Headline
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            It is the first thing recruiters notice in your
                            profile. Write concisely what makes you unique and
                            right person for the job you are looking for.
                          </p>
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    placeholder="Type Description"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                </div>
                <div id="key_skills_bx" className="job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b15">Key Skills</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#keyskills"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  <div className="job-time me-auto">
                    <a href="javascript:void(0);">
                      <span>Javascript</span>
                    </a>
                    <a href="javascript:void(0);">
                      <span>CSS</span>
                    </a>
                    <a href="javascript:void(0);">
                      <span>HTML</span>
                    </a>
                    <a href="javascript:void(0);">
                      <span>Bootstrap</span>
                    </a>
                    <a href="javascript:void(0);">
                      <span>Web Designing</span>
                    </a>
                    <a href="javascript:void(0);">
                      <span>Photoshop</span>
                    </a>
                  </div>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="keyskills"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="KeyskillsModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="KeyskillsModalLongTitle"
                          >
                            Key Skills
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            It is the first thing recruiters notice in your
                            profile. Write concisely what makes you unique and
                            right person for the job you are looking for.
                          </p>
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control tags_input"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                </div>
                <div id="employment_bx" className="job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b15">Employment</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#employment"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  <h6 className="font-14 m-b0">
                    Junior Software DeveloperEdit
                  </h6>
                  <p className="m-b0">W3itexperts</p>
                  <p className="m-b0">Oct 2021 to Present (3 years 4 months)</p>
                  <p className="m-b0">Available to join in 1 Months</p>
                  <p className="m-b0">Junior Software Developer</p>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="employment"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="EmploymentModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="EmploymentModalLongTitle"
                          >
                            Add Employment
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Your Designation</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Designation"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Your Organization</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Organization"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Is this your current company?</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="employ_yes"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="employ_yes"
                                        >
                                          Yes
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="employ_no"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="employ_no"
                                        >
                                          No
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Started Working From</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>january</option>
                                        <option>february</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Worked Till</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>january</option>
                                        <option>february</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Describe your Job Profile</label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Type Description"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                </div>
                <div id="education_bx" className="job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b15">Education</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#education"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  <p>
                    Mention your employment details including your current and
                    previous company work experience
                  </p>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="education"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="EducationModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="EducationModalLongTitle"
                          >
                            Education
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Education</label>
                                  <select>
                                    <option>Doctorate/PhD</option>
                                    <option>Masters/Post-Graduation</option>
                                    <option>Graduation/Diploma</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Course</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Select Course"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>University/Institute</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Select University/Institute"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="clearfix m-b20">
                        <label className="m-b0">London - 12th</label>
                        <span className="clearfix font-13">2019</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">London - 10th</label>
                        <span className="clearfix font-13">2021</span>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="clearfix">
                    Add Doctorate/PhD
                  </a>
                  <a href="javascript:void(0);" className="clearfix">
                    Add Masters/Post-Graduation
                  </a>
                  <a href="javascript:void(0);" className="clearfix">
                    Add Graduation/Diploma
                  </a>
                </div>
                <div id="it_skills_bx" className="job-bx table-job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b15">IT Skills</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#itskills"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  <p>
                    Mention your employment details including your current and
                    previous company work experience
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>Skills</th>
                        <th>Version</th>
                        <th>Last Used</th>
                        <th>Experience</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bootstrap</td>
                        <td>3</td>
                        <td>2018</td>
                        <td>1 Year 5 Months</td>
                        <td>
                          <a
                            className="m-l15 font-14"
                            data-bs-toggle="modal"
                            data-bs-target="#itskills"
                            href="#"
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Bootstrap</td>
                        <td>4</td>
                        <td>2019</td>
                        <td>5 Year 5 Months</td>
                        <td>
                          <a
                            className="m-l15 font-14"
                            data-bs-toggle="modal"
                            data-bs-target="#itskills"
                            href="#"
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>html</td>
                        <td>5</td>
                        <td>2017</td>
                        <td>2 Year 7 Months</td>
                        <td>
                          <a
                            className="m-l15 font-14"
                            data-bs-toggle="modal"
                            data-bs-target="#itskills"
                            href="#"
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>css</td>
                        <td>3</td>
                        <td>2020</td>
                        <td>0 Year 5 Months</td>
                        <td>
                          <a
                            className="m-l15 font-14"
                            data-bs-toggle="modal"
                            data-bs-target="#itskills"
                            href="#"
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>photoshop</td>
                        <td>64bit</td>
                        <td>2019</td>
                        <td>1 Year 0 Months</td>
                        <td>
                          <a
                            className="m-l15 font-14"
                            data-bs-toggle="modal"
                            data-bs-target="#itskills"
                            href="#"
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="itskills"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="ItskillsModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="ItskillsModalLongTitle"
                          >
                            IT Skills
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>IT Skills</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter IT Skills"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label>Version</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Version"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                  <label>Last Used</label>
                                  <select>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                    <option>2013</option>
                                    <option>2012</option>
                                    <option>2011</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-6">
                                <div className="form-group">
                                  <label>Experience</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>january</option>
                                        <option>february</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                </div>
                <div id="projects_bx" className="job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b15">Projects</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#projects"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  <h6 className="font-14 m-b0">Job BoardEdit</h6>
                  <p className="m-b0">w3itexpert (Offsite)</p>
                  <p className="m-b0">Dec 2021 to Present (Full Time)</p>
                  <p className="m-b0">Job Board Template</p>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="projects"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="ProjectsModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="ProjectsModalLongTitle"
                          >
                            Add Projects
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Project Title</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Project Title"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>
                                    Tag this project with your
                                    Employment/Education
                                  </label>
                                  <select>
                                    <option>className 12th</option>
                                    <option>className 10th</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Client</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Client Name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Project Status</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="inprogress"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="inprogress"
                                        >
                                          In Progress
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="finished"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="finished"
                                        >
                                          Finished
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-6">
                                <div className="form-group">
                                  <label>Started Working From</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>january</option>
                                        <option>february</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-6">
                                <div className="form-group">
                                  <label>Worked Till</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>january</option>
                                        <option>february</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Details of Project</label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Type Description"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                </div>
                <div id="profile_summary_bx" className="job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b15">Profile Summary</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#profilesummary"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  <p className="m-b0">
                    Your Profile Summary should mention the highlights of your
                    career and education, what your professional interests are,
                    and what kind of a career you are looking for. Write a
                    meaningful summary of more than 50 characters.
                  </p>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="profilesummary"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="ProfilesummaryModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="ProfilesummaryModalLongTitle"
                          >
                            Profile Summary
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Your Profile Summary should mention the highlights
                            of your career and education, what your professional
                            interests are, and what kind of a career you are
                            looking for. Write a meaningful summary of more than
                            50 characters.
                          </p>
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Details of Project</label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Type Description"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                </div>
                <div id="accomplishments_bx" className="job-bx m-b30">
                  <h5 className="m-b10">Accomplishments</h5>
                  <div className="list-row">
                    <div className="list-line">
                      <div className="d-flex">
                        <h6 className="font-14 m-b5">Online Profile</h6>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#accomplishments"
                          className="site-button add-btn button-sm"
                        >
                          <i className="fas fa-pencil-alt m-r5"></i> Edit
                        </a>
                      </div>
                      <p className="m-b0">
                        Add link to Online profiles (e.g. Linkedin, Facebook
                        etc.).
                      </p>
                      {/*-- Modal */}
                      <div
                        className="modal fade modal-bx-info editor"
                        id="accomplishments"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="AccomplishmentsModalLongTitle"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="AccomplishmentsModalLongTitle"
                              >
                                Online Profiles
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Social Profile</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Social Profile Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>URL</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="www.google.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Description</label>
                                      <textarea
                                        className="form-control"
                                        placeholder="Type Description"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button type="button" className="site-button">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*-- Modal End */}
                    </div>
                    <div className="list-line">
                      <div className="d-flex">
                        <h6 className="font-14 m-b5">Work Sample</h6>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#worksample"
                          className="site-button add-btn button-sm"
                        >
                          <i className="fas fa-pencil-alt m-r5"></i> Edit
                        </a>
                      </div>
                      <p className="m-b0">
                        Add link to your Projects (e.g. Github links etc.).
                      </p>
                      {/*-- Modal */}
                      <div
                        className="modal fade modal-bx-info editor"
                        id="worksample"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="WorksampleModalLongTitle"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="WorksampleModalLongTitle"
                              >
                                Work Sample
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Work Title</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Title"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>URL</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="www.google.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>Duration From</label>
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <select>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <select>
                                            <option>january</option>
                                            <option>february</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>Duration To</label>
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <select>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <select>
                                            <option>january</option>
                                            <option>february</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <div className="form-check">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="check1"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="check1"
                                        >
                                          I am currently working on this
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Description</label>
                                      <textarea
                                        className="form-control"
                                        placeholder="Type Description"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button type="button" className="site-button">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*-- Modal End */}
                    </div>
                    <div className="list-line">
                      <div className="d-flex">
                        <h6 className="font-14 m-b5">
                          White Paper / Research Publication / Journal Entry
                        </h6>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#journalentry"
                          className="site-button add-btn button-sm"
                        >
                          <i className="fas fa-pencil-alt m-r5"></i> Edit
                        </a>
                      </div>
                      <p className="m-b0">
                        Add links to your Online publications.
                      </p>
                      {/*-- Modal */}
                      <div
                        className="modal fade modal-bx-info editor"
                        id="journalentry"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="JournalentryModalLongTitle"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="JournalentryModalLongTitle"
                              >
                                White Paper / Research Publication / Journal
                                Entry
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Title</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Title"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>URL</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="www.google.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Published On</label>
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <select>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <select>
                                            <option>january</option>
                                            <option>february</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Description</label>
                                      <textarea
                                        className="form-control"
                                        placeholder="Type Description"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button type="button" className="site-button">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*-- Modal End */}
                    </div>
                    <div className="list-line">
                      <div className="d-flex">
                        <h6 className="font-14 m-b5">Presentation</h6>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#presentation"
                          className="site-button add-btn button-sm"
                        >
                          <i className="fas fa-pencil-alt m-r5"></i> Edit
                        </a>
                      </div>
                      <p className="m-b0">
                        Add links to your Online presentations (e.g. Slideshare
                        presentation links etc.).
                      </p>
                      {/*-- Modal */}
                      <div
                        className="modal fade modal-bx-info editor"
                        id="presentation"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="PresentationModalLongTitle"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="PresentationModalLongTitle"
                              >
                                Presentation
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Title</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Title"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>URL</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="www.google.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Description</label>
                                      <textarea
                                        className="form-control"
                                        placeholder="Type Description"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button type="button" className="site-button">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*-- Modal End */}
                    </div>
                    <div className="list-line">
                      <div className="d-flex">
                        <h6 className="font-14 m-b5">Patent</h6>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#patent"
                          className="site-button add-btn button-sm"
                        >
                          <i className="fas fa-pencil-alt m-r5"></i> Edit
                        </a>
                      </div>
                      <p className="m-b0">
                        Add details of Patents you have filed.
                      </p>
                      {/*-- Modal */}
                      <div
                        className="modal fade modal-bx-info editor"
                        id="patent"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="PatentModalLongTitle"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="PatentModalLongTitle"
                              >
                                Patent
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Title</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Title"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>URL</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="www.google.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Patent Office</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Patent Office"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Status</label>
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                          <div className="form-check">
                                            <input
                                              type="radio"
                                              className="form-check-input"
                                              id="check2"
                                              name="example1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="check2"
                                            >
                                              Patent Issued
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                          <div className="form-check">
                                            <input
                                              type="radio"
                                              className="form-check-input"
                                              id="check3"
                                              name="example1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="check3"
                                            >
                                              Patent pending
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Application Number</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Application Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Published On</label>
                                      <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <select>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                          </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                          <select>
                                            <option>january</option>
                                            <option>february</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Description</label>
                                      <textarea
                                        className="form-control"
                                        placeholder="Type Description"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button type="button" className="site-button">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*-- Modal End */}
                    </div>
                    <div className="list-line">
                      <div className="d-flex">
                        <h6 className="font-14 m-b5">Certification</h6>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#certification"
                          className="site-button add-btn button-sm"
                        >
                          <i className="fas fa-pencil-alt m-r5"></i> Edit
                        </a>
                      </div>
                      <p className="m-b0">
                        Add details of Certification you have filed.
                      </p>
                      {/*-- Modal */}
                      <div
                        className="modal fade modal-bx-info editor"
                        id="certification"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="CertificationModalLongTitle"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="CertificationModalLongTitle"
                              >
                                Certification
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row">
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Certification Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Certification Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <label>Certification Body</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Certification Body"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>Year Onlabel</label>
                                      <select>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="site-button"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button type="button" className="site-button">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*-- Modal End */}
                    </div>
                  </div>
                </div>
                <div id="desired_career_profile_bx" className="job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b30">Desired Career Profile</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#desiredprofile"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="desiredprofile"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="DesiredprofileModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="DesiredprofileModalLongTitle"
                          >
                            Desired Career Profile{" "}
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Industry</label>
                                  <select>
                                    <option>Accounting / Finance</option>
                                    <option>
                                      Banking / Financial Services / Broking
                                    </option>
                                    <option>
                                      Education / Teaching / Training
                                    </option>
                                    <option>
                                      IT-Hardware &amp; Networking
                                    </option>
                                    <option>Other</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Functional Area / Department</label>
                                  <select>
                                    <option>Agent</option>
                                    <option>
                                      Architecture / Interior Design
                                    </option>
                                    <option>
                                      Beauty / Fitness / Spa Services
                                    </option>
                                    <option>
                                      IT Hardware / Technical Support
                                    </option>
                                    <option>
                                      IT Software - System Programming
                                    </option>
                                    <option>Other</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Role</label>
                                  <select>
                                    <option>Creative</option>
                                    <option>Web Designer</option>
                                    <option>Graphic Designer</option>
                                    <option>National Creative Director</option>
                                    <option>Fresher</option>
                                    <option>Other</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Job Type</label>
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="permanent"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="permanent"
                                        >
                                          Permanent
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="contractual"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="contractual"
                                        >
                                          Contractual
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Employment Type</label>
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="fulltime"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="fulltime"
                                        >
                                          Full Time
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id="parttime"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="parttime"
                                        >
                                          Part Time
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Preferred Shift</label>
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="day"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="day"
                                        >
                                          Day
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="night"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="night"
                                        >
                                          Night
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="flexible"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="flexible"
                                        >
                                          Part Time
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-6">
                                <div className="form-group">
                                  <label>Availability to Join</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>january</option>
                                        <option>february</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Expected Salary</label>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="usdollars"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="usdollars"
                                        >
                                          US Dollars
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="rupees"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="rupees"
                                        >
                                          Indian Rupees
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-6">
                                <div className="form-group">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option>0 lakh</option>
                                        <option>1 lakh</option>
                                        <option>2 lakh</option>
                                        <option>5 lakh</option>
                                        <option>4 lakh</option>
                                        <option>5 lakh</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                      <select>
                                        <option> 05 Thousand </option>
                                        <option> 10 Thousand </option>
                                        <option> 15 Thousand </option>
                                        <option> 20 Thousand </option>
                                        <option> 25 Thousand </option>
                                        <option> 30 Thousand </option>
                                        <option> 35 Thousand </option>
                                        <option> 40 Thousand </option>
                                        <option> 45 Thousand </option>
                                        <option> 50 Thousand </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Desired Location</label>
                                  <select>
                                    <option>India</option>
                                    <option>Australia</option>
                                    <option>Bahrain</option>
                                    <option>China</option>
                                    <option>Dubai</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>Hong Kong</option>
                                    <option>Kuwait</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Desired Industry</label>
                                  <select>
                                    <option>Software</option>
                                    <option>Factory</option>
                                    <option>Ngo</option>
                                    <option>Other</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                  {/*-- Details */}
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="clearfix m-b20">
                        <label className="m-b0">Industry</label>
                        <span className="clearfix font-13">
                          IT-Software/Software Services
                        </span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Role</label>
                        <span className="clearfix font-13">Web Designer</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Employment Type</label>
                        <span className="clearfix font-13">Full Time</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Availability to Join</label>
                        <span className="clearfix font-13">12 july</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Desired Location</label>
                        <span className="clearfix font-13">
                          Add Desired Location
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="clearfix m-b20">
                        <label className="m-b0">Functional Area</label>
                        <span className="clearfix font-13">
                          Design / Creative / User Experience
                        </span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Job Type</label>
                        <span className="clearfix font-13">permanent</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Desired Shift</label>
                        <span className="clearfix font-13">
                          Add Desired Shift
                        </span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Expected Salary</label>
                        <span className="clearfix font-13">1 Lakhs</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Desired Industry</label>
                        <span className="clearfix font-13">
                          Add Desired Industry
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*-- Details End */}
                </div>
                <div id="personal_details_bx" className="job-bx m-b30">
                  <div className="d-flex">
                    <h5 className="m-b30">Personal Details</h5>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#personaldetails"
                      className="site-button add-btn button-sm"
                    >
                      <i className="fas fa-pencil-alt m-r5"></i> Edit
                    </a>
                  </div>
                  {/*-- Modal */}
                  <div
                    className="modal fade modal-bx-info editor"
                    id="personaldetails"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="PersonaldetailsModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="PersonaldetailsModalLongTitle"
                          >
                            Personal Details
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Date of Birth</label>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                        <option>28</option>
                                        <option>29</option>
                                        <option>30</option>
                                        <option>31</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <select>
                                        <option>january</option>
                                        <option>february</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>Jun</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                      </select>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                      <select>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Gender</label>
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="male"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="male"
                                        >
                                          Male
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                      <div className="form-check">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          id="female"
                                          name="example1"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="female"
                                        >
                                          Female
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Permanent Address</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Permanent Address"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Hometown</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Hometown"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Pincode</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Pincode"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Marital Status</label>
                                  <select>
                                    <option>Married</option>
                                    <option>Single / Unmarried</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Passport Number</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Passport Number"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>What assistance do you need</label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Type Description"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                  <label>Work Permit for Other Countries</label>
                                  <select>
                                    <option>India</option>
                                    <option>Australia</option>
                                    <option>Bahrain</option>
                                    <option>China</option>
                                    <option>Dubai</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                    <option>Hong Kong</option>
                                    <option>Kuwait</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="site-button"
                            data-bs-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button type="button" className="site-button">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*-- Modal End */}
                  {/*-- Details */}
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="clearfix m-b20">
                        <label className="m-b0">Date of Birth</label>
                        <span className="clearfix font-13">31 July 1998</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Gender</label>
                        <span className="clearfix font-13">male</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Marital Status</label>
                        <span className="clearfix font-13">
                          Single / unmarried
                        </span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Passport Number</label>
                        <span className="clearfix font-13">+ 123 456 7890</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Differently Abled</label>
                        <span className="clearfix font-13">None</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Languages</label>
                        <span className="clearfix font-13">English</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="clearfix m-b20">
                        <label className="m-b0">Permanent Address</label>
                        <span className="clearfix font-13">
                          Add Permanent Address
                        </span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Area Pin Code</label>
                        <span className="clearfix font-13">302021</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">Hometown</label>
                        <span className="clearfix font-13">Delhi</span>
                      </div>
                      <div className="clearfix m-b20">
                        <label className="m-b0">
                          Work permit of other country
                        </label>
                        <span className="clearfix font-13">USA</span>
                      </div>
                    </div>
                  </div>
                  {/*-- Details End */}
                </div>
                <div id="attach_resume_bx" className="job-bx m-b30">
                  <h5 className="m-b10">Attach Resume</h5>
                  <p>
                    Resume is the most important document recruiters look for.
                    Recruiters generally do not look at profiles without
                    resumes.
                  </p>
                  <form className="attach-resume">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="custom-file">
                            <p className="m-auto align-self-center">
                              <i className="fa fa-upload"></i>
                              Upload Resume File size is 3 MB
                            </p>
                            <input
                              type="file"
                              className="site-button form-control"
                              id="customFile"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <p className="text-center">
                    If you do not have a resume document, you may write your
                    brief professional profile{" "}
                    <a className="site-button-link" href="javascript:void(0);">
                      here
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-- Browse Jobs END */}
      </div>
    </div>
  );
}
