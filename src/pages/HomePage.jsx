import Header from "../Components/Header/Header";
const HomePage  = () => {
    return (
        <div className='container'>
          <Header/>
          <h1>Welcome to Vivekanand College!</h1>
          <h3>Your journey to excellence starts here.</h3>
          <button>Apply Now!</button>
          <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential. <br></br> At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
          <h2>Why Choose Vivekanand College?</h2>
          <ul>
            <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
            <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
            <li><b>Modern Facilities:</b>Well-equipped labs, expansive library, and comfortable campus.</li>
            <li><b>Holistic Development:</b>Focus on co-curricular activities, sports, and community service.</li>
            <li><b>Strong Placements:</b>Excellent career opportunities with leading companies.</li>
          </ul>
          <h2>Campus Life & Facilities</h2>
          <img src="https://vck-ojt.vercel.app/assets/students-studying-DbLGuwF_.jpeg" height="200px"  width="400px" />
          <img src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" height="200px" width="400px" />
           <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
           <p>Ready to explore our courses?</p>
           <button>Explore Courses</button>
        </div>
    )
}

export default HomePage;