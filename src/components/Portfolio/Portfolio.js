import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import axios from 'axios';

const Portfolio = () => {
    // const URL = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=0aadf1f125afc3172648cfb8248ba489&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1"
    // axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${this.props.query}&size=q&per_page=16&format=json&nojsoncallback=1`)

    const URL = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=0aadf1f125afc3172648cfb8248ba489&per_page=10&format=json&nojsoncallback=1";

    const [photos, setPhotos] = useState([])
    fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .then(function (j) {
            let picArray = j.photos.photo.map((pic) => {
                let srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
                return (
                    <img alt="whatever" src={srcPath}></img>
                )
            })
            setPhotos(picArray);
        })

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    {photos}
                </p>
            </div>
        </>
    )
}
    export default Portfolio