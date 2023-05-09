/* eslint-disable no-lone-blocks */
// Import and use useEffect to make an API call when the component renders
import React, { useEffect } from 'react';

import Photo from '../display-components/Photo';

import useAxios from '../../hooks/useAxios';

// Import the loading screen
import Spinner from '../display-components/Spinner/Spinner';

function Gallery() {
    const [setUrl, data, loading, setLoading] = useAxios();

    {/* Fetch from the free public NASA API which will pull down recent images from the Mars rover. It will happen on component render because we are using an empty bracket in our useEffect(). After it gets the images, the turnary operator will be activated and render 'Photo' instead of the Spinner. */}
    useEffect(() => {
        setUrl("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Lc6mCmy8pmn55pfWyTeOUCytfdZvsJsUqRhtowWL");
        setLoading(true);
    }, []); 
    {/* React Hook useEffect has missing dependencies: 'setLoading' and 'setUrl'. Either include them or remove the dependency array. */}

    return ( 
        <div className="col-12">
            <h2>Gallery</h2>
            
            <p>These are the last known images the Rover had taken before going offline.</p>
            
            {/* Here we are first checking if the photos array is empty if it is not then we are using map to iterate over each phot in the photos array and display a <Photo /> component for each. If the photos array is empty we instead display our JSX loading element instead. */}
            <div className="row">
                { !loading && data ? data.photos.map((photo) => <Photo key={photo.id} photo={photo} />) : <Spinner/> }
            </div>
      </div>
     );
}

export default Gallery;