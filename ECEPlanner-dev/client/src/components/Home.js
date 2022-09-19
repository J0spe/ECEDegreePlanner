import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://vtx.vt.edu/content/vtx_vt_edu/en/articles/2022/03/unirel-gradschoolrankings/jcr:content/article-image.transform/xl-medium/image.jpg" },
    { url: "https://ece.vt.edu/content/ece_vt_edu/en/people/faculty/_jcr_content/article-image.img.jpg/1629221751767.jpg" },
    {url: "https://ece.vt.edu/content/dam/ece_vt_edu/people/ECE_Jobs_Header.jpg"},
    {url: "https://ece.vt.edu/content/ece_vt_edu/en/about/locations/jcr:content/content/vtcontainer_copy_cop_1419010055/vtcontainer-content/vtmulticolumn_copy/vt-items_1/adaptiveimage_copy.transform/l-medium/image.jpg"}
  ];

function Home() {
    return(
        <section>
    <div>
    <SimpleImageSlider
        width={'100%'}
        height={350}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      </div>
            <main>
            <div className='IEEEdiv'>
                <h1 style={{color: "#d04424"}}><u>IEEE Event Calendar</u></h1>
                <h2><b>General Body Meeting</b></h2>
                <ul>
                    <li><b>March 22nd from 6:00PM to 7:00PM</b></li>
                    <li><b>Location: Randolph Hall Rm 221</b></li>
                    <p>Come hear some club information and updates</p>
                    <p>Get some free food/merch!</p>
                </ul>

                <h2 ><b>Fun Friday</b></h2>
                <ul>
                    <li><b>April 1st from 8:30AM - 12PM</b></li>
                    <li><b>Location: Whittemore Hall, ECE Lounge</b></li>
                    <p>Come socialize with ECE and CS students and faculty</p>
                    <p>Carol Lee Donuts and Mill Mountain Coffee provided</p>
                    <p>Come and leave as you please, and first come, first serve</p>
                </ul>
            </div>


            <div className='courseRequest'>
                    <h1 style={{color: "#d04424"}}>Course Request Availability</h1>
                    <ul>
                        <li>Spring 2022: October 19 - November 2, 2021</li>
                        <li>Summer 2022: Summer no longer has course request.</li>
                        <li>Fall 2022: March 22 - April 5, 2022</li>
                    </ul>
            </div>

            <div className='PetitionDiv'>
                <h1 style={{color: "#d04424"}}>C- Policy Petition</h1>
                <p>ECE students are required to earn minimum C- or better grades in all prerequisite courses. Students who do not earn a minimum C- in a course have the right to submit a petition for an appeal of the C- policy.

An appeal will be granted for exceptions to the rule in the case of enrollment in ECE or CS courses only in the most unusual and extenuating circumstances and, then, only if the overall and in major grade point averages are satisfactory. The C- Petition form must be submitted to 340 Whittemore no later than 12:00 noon on Tuesday of the first week of classes each semester or summer session.

Appeals for exception to the rule for enrollment in ECE Technical Elective courses are at the discretion of the course instructor. Faculty are urged to make exceptions with caution and, in particular, to consider the performance of the student in related courses.</p>
            <a id='test' href="https://ece.vt.edu/content/dam/ece_vt_edu/undergrad/forms/C-Petition_2019.pdf">File can be downloaded here</a>
            </div>

                <div>
                    <h1 style={{color: "#d04424"}}>Force Add</h1>
                    <p>ECE force-add requests will be accepted ONLY from students who are eligible to take ECE courses but are unable to request certain ECE course(s) during the Course Request period due to a prerequisite or class restriction. If you do not submit a Course Request during the Course Request period, you are not eligible to complete the ECE force-add survey. Incomplete or ineligible surveys will not be reviewed and will be deleted with no notification to the student.

The force-add surveys for undergraduate and graduate courses will open each semester the day before Course Request and close at 5:00 pm on the Friday before the first day of classes. No force-add requests will be accepted after this date. All decisions will be made by the second day of classes. Students with approved force-adds will be notified by the second day of classes.

On the Friday before classes begin, ECE will open up classes to class capacity. This means that if the timetable is showing a course as full, then it is full to capacity and we cannot and will not add additional students. Note that class capacity does not always equal classroom capacity. Just because there may be empty seats, this does not mean that we can add additional students. Many factors go into determining class capacity.

The force-add forms can be found in the Quick List of Forms section on the right side of this page.</p>
                </div>
                <div>
                    <h1 style={{color: "#d04424"}}>Prerequisites</h1>
                    <p>Course prerequisite requirements have been put into place for the benefit of the student. All ECE class rolls, including lecture courses and laboratories, are reviewed at the beginning of each semester. Those students who have not satisfactorily completed prerequisite course requirements with a C- or better grade will be dropped and notified of the drop via e-mail.</p>
                </div>

                <div class="NewsDiv">
                    <h1><u>News</u></h1>

                    <h2>These Virginia Tech graduate programs are some of the best in the country</h2>
                    <p>Graduate programs within the College of Engineering, Pamplin College of Business, the College of Architecture and Urban Studies, and the Virginia Tech Carilion School of Medicine earned high marks in the latest U.S. News & World Report ranking.</p>

                    <h2>Cybersecurity showcase conveys impact and reach of student research</h2>
                    <p>Commonwealth Cyber Initiative student researchers from Virginia Tech and other Southwest Virginia institutions participated in an electronic poster session that showcased the cross-disciplinary impact of student research in cybersecurity. </p>

                    <h2>Virginia Tech students, alumni, and faculty help refugee families find their footing</h2>
                    <p>Virginia Tech students, faculty, and alumni are upholding their commitments to Ut Prosim through refugee resettlement work.</p>

                    <h2>EVP Strategy and Chief Transformation Officer, Raytheon Technologies</h2>
                    <p>With experiences leading big businesses and negotiating multi-billion-dollar mergers and acquisitions, the common thread throughout his career is technology.</p>
                </div>




        {/* <h3>Please make a selection of your intended/enrolled DEGREE</h3>
        <div class="EE">

        </div>

        <div class="CPE">

        </div>
        <button type="submit"> Plan my degree</button>

        <div class="sidebar" >
            <h2>Advisors</h2>
            <ul>
                <p>Mary Brewer</p>
                <p>taylorm@exchange.vt.edu</p>
            </ul>

        </div> */}
    </main>
        </section>
    );
}

export default Home;