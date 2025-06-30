import React from "react";
import { Link } from "react-router-dom";
const CoursesPage  = () => {
    return (
        <div className="page-container" style={{overflow:"auto"}}>
            <h1>Our Academic Programs</h1>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h2>Discover Campus Life</h2>
            <div className="video-container">
                <video controls="100%" width="100%" height="auto" class="course-video">
                    <source src="public/Videos/college-tour.mp4" type="video/mp4"/>
                     Your browser does not support the video tag.
                </video>
              <p className="video-caption">
               Get a glimpse of the vibrant academic and social life at Vivekanand College.
              </p>
            </div>
                <h2>Undergraduate Programs (UG)</h2>
                <ul>
                    <li><b>Bachelor of Science ( B.Sc.)</b></li>
                    <ul>
                        <li>Computer Science (3 years)</li>
                        <li>Information Technology (3 years)</li>
                        <li>Biotechnology (3 years)</li>
                    </ul>

        
                </ul>
                <ul>
                    <li><b>Bachelor of Commerce (B.Com)</b></li>
                    <ul>
                        <li>Accounting & Finance (3 years)</li>
                        <li>Banking & Insurance (3 years)</li>
                    </ul>
                </ul>
                <ul>
                    <li><b>Bachelor of Arts (B.A.)</b></li>
                    <ul>
                        <li>English Literature (3 years)</li>
                        <li>Psychology (3 years)</li>
                    </ul>
                </ul>
                <h2>Postgraduate Programs (PG)</h2>
                <ul>
                     <li><b>Master of Science (M.Sc.)</b></li>
                     <ul>
                        <li>Computer Science (2 years)</li>
                        <li>Information Technology (2 years)</li>
                     </ul>
                     <li><b>Master of Commerce (M.Com)</b>(2 years)</li>
                     <li><b>Master of Arts (M.A.)</b>(2 years)</li>
                </ul>
                <h2>Program Details & Fee Structure (Annual)</h2>
                <table className="admissions-table course-details-table" > 
                    <thead>
                    <tr>
                        <th>Program Type</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Annual Fee (INR)</th>
                        <th>Eligibility</th>
                    </tr>
                    </thead>
                       <tbody>
                        <tr>
                            <td>UG</td>
                            <td>B.Sc. Computer Science</td>
                            <td>3 Years</td>
                            <td>₹ 85,000</td>
                            <td>10+2 with PCM (50%)</td>
                        </tr>
                        <tr>
                            <td>UG</td>
                            <td>B.Com. Accounting &amp; Finance</td>
                            <td>3 Years</td>
                            <td>₹ 70,000</td>
                            <td>10+2 Commerce (45%)</td>
                        </tr>
                        <tr>
                            <td>PG</td>
                            <td>M.Sc. Information Technology</td>
                            <td>2 Years</td>
                            <td>₹ 95,000</td>
                            <td>B.Sc. IT/CS (50%)</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Specialized & Vocational Courses</h2>
                <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
                <div className="call-to-action">
                <p>Have questions about a specific course?</p>
                <Link to="/contact" className="btn">Inquire About Courses</Link>
                </div>
        </div>
    );
}
export default CoursesPage;