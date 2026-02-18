import Website from "./ui/fitureProject/Website";
// import Mobile from "./ui/fitureProject/Mobile";

export default function FitureProject() {
  return (
    <section
      className="section"
      id="projects"
      style={{ background: "var(--bg-secondary)" }}
    >
      <h2 className="section-title fade-in">[ Featured Projects ]</h2>
      <Website />
      {/* <Mobile /> */}
    </section>
  );
}
