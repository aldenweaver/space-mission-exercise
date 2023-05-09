function Home() {
    return ( 
        <div className="col-12">
            <h2>Welcome Astronauts</h2>
            <img src="./mars.jpg" alt="Mars" className="img-fluid" />

            <h3>About</h3>
            <p>You will use this site to brief yourself on upcoming space missions. For more information visit the official <a href="https://mars.nasa.gov/mars2020/" target="_blank" rel="noreferrer">Mars Perseverance Mission Site</a></p>
            
            <p>We’ve been driving on Mars since 1997, beginning with the 83 sol Sojourner rover mission. Since 2003 with the arrival of the Spirit and Opportunity rovers, followed by the Curiosity rover in 2012 and Perseverance rover in 2021 we have been continuously exploring the surface of Mars. The Perseverance mobility system was designed to enable faster and more precise autonomous driving than any prior mission. It has wheels optimized for rugged terrain, cameras with fast exposure times, wide navigation camera “Navcam” field of view, and a dedicated second computer and Field Gate Programmable Array “FPGA” for fast image processing. Visual Odometry, “VO”, tracks the motion of features in images as it is driving to provide accurate position estimates and measure slip. “Thinking-While-Driving” capability allows Perseverance to continuously drive while performing VO, generating a map of terrain geometry, and autonomously blending drive arcs and selecting a safe and efficient drive path.</p>
        </div>
     );
}

export default Home;