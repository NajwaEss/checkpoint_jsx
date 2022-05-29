
import "./style.css";
import imageSrc from "./imageInSrc.jpg";
import video from "./myVideo.mp4";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title">NAJWA</h1>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "50%" }}>
            <img src={imageSrc} />
          </div>
          <div style={{ flex: "50%" }}>
            <img src="/imageInPublic.jpg" />
          </div>
        </div>
      </div>

      <video style={{ width: "320", height: "240" }} controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
