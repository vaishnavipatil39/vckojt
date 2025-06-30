import { Link } from "react-router-dom";
const NotFoundPage  = () => {
    return (
        <div
        className="page-container" 
        style={{
            textAlign:"center",
            minHeight:"calc(100vh-200px)",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
        }}
        >
            <h1>404-page Not Found</h1>
            <p>Oops! the page you're looking fo doesn't exist.</p>
            <p>
            You might Want to return to the{" "}
            <Link to="/" className="btn">
              Home Page
            </Link>
            .
            </p>
            <img
                src="https://via.placeholder.com/300x200?text=404+Error"
                alt="Page Not Found"
                style={{ marginTop: "20px", maxWidth: "100%", height: "auto" }}
            />
        </div>
    );
};
export default NotFoundPage;