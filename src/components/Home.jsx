import Avangers from "./Avangers"


const Home = () => {

  return (
    <div className="home">
      <h3>Avengers</h3>
      <div className="video">
        <video src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4" autoPlay loop playsInline muted></video>
        <div className="overlay"></div>
      </div>

      <Avangers />
    </div>
  )
}

export default Home