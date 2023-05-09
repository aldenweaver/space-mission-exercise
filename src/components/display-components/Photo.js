function Photo(data) {
    return ( 
        <div className="col-sm-2">
            <img src={data.photo.img_src} alt="Mars" className="img-fluid"/>
            <small>{data.photo.earth_date}</small>
        </div>
    );
}

export default Photo;