function Page(props) {
  return props.loadedComponent === "Home" ? (
    <Home />
  ) : props.loadedComponent === "About" ? (
    <About />
  ) : (
    <Home />
  );
}
const Home = () => {
  return <div className="main-content"></div>;
};

const About = () => {
  return <div className="main-content"></div>;
};

export default Page;
