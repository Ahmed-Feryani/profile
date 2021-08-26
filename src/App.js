import Profile from "./Profile/Profile";
import me from "./assets/me.jpg";
function App() {
  const handleName = (name) => {
    alert(name);
  };
  return (
    <div className="App">
      <Profile
        fullName="Feryani Ahmed"
        bio="my bio"
        profession="web developer"
        handleName={handleName}
      >
        <img
          alt="alt"
          src={me}
          style={{
            height: "140px",
            width: "140px",
            boxShadow: "0 0 42px 0 rgba( 255, 255, 255, 0.17 )",
            background: "rgba( 255, 255, 255, 0.25 )",
            backdropFilter: "blur( 4px )",
            border: "3px solid rgba( 255, 255, 255, 0.18 )",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "50% 10%",
          }}
        />
      </Profile>
    </div>
  );
}

export default App;
