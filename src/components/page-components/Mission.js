function Mission() {
    return ( 
        <div className="col-12">
            <h2>Mission</h2>
            
            <img src="./mars-mission.jpg" alt="Mars" className="img-fluid" />

            <h3>Key Details</h3>
            <p>
                Mission Name: Mars 2020
                <br />
                Rover Name: Perseverance
                <br />
                Main Job: Seek signs of ancient life and collect samples of rock and regolith (broken rock and soil) for possible return to Earth.
                <br />
                Launch: July 30, 2020
                <br />
                Landing: Feb. 18, 2021, Jezero Crater, Mars
                <br />
                Tech Demo: The Mars Helicopter completed its 30-day technology demonstration and is now in its new operations demo phase.
            </p>

            <h3>Issue</h3>
            <p>The Mars Rover's cameras went dark after a bright pulsing light was detected and now the cameras are no longer operating.</p>

            <h3>Mission Overview</h3>
            <p>Astronaut, your mission is as follows. You will be landing on Mars where you will locate the rover and download the images being stored on it's drive, you will be accompanied by Dr. Skeleton who will attempt to repair the cameras. You will protect and assist Dr. Skelton until he completes repairs and then return to the module 9 station for debriefing and to report your findings.</p>
        </div>
     );
}

export default Mission;