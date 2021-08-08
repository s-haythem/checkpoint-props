import "./App.css";
import Profile from "./Profile/profile";
import image from "./Profile/avatar.jpg";
import ActionLink from "./Profile/alert";



function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        marginTop:"5%",
        width: "min-content",
      }}
    >
      <Profile
        img={image}
        fullName= "Haythem Smirani"
        bio={`Why are you asking ?!!`}
        profession="Student"
      />
      <ActionLink />
    </div>
  );
}

export default App;
