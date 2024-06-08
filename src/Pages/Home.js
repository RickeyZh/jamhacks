export default function Home() {
  return (
    <div>
      <Particles />
      <h1 className="title-font">Welcome to</h1>
      <h1 className="title-font-second">Grip</h1>
      <h1 className="title-font-third">Guardian</h1>
      <h1 className="desc">
        {" "}
        <ReactTyped
          strings={[
            "Keeping your posture and grip in check",
            "Check out the About page for more important info",
          ]}
          typeSpeed={20}
          loop
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
      </h1>
      <a class="btn-1" href="#/student">
        About
      </a>
      <a class="btn-1" href="#/teacher">
        Monitor
      </a>
    </div>
  );
}
