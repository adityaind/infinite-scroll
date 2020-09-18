// Image container 
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API

const count = 10;
const apiKey = '1D9fFzyv2402SrsDezy7TG6N6pJJnh3qmT8wjOSFlnM';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
// helper function to set attributes
function setAttributes(element, attributes) {
    for (const prop in attributes) {
        element.setAttribute(prop, attributes[prop])
    }
}

// Add photos to DOM
function displayPhotos() {
    // Run function for each object in photos array
    photosArray.forEach((photo) => {
        //  create anchor element to link to unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        // to displa image fom response
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        // image.setAttribute('src', photo.urls.regular);
        // image.setAttribute('alt', photo.alt_description);
        // image.setAttribute('title', photo.alt_description);
        // // Put <image> inside <a> element     
        item.appendChild(img);
        imageContainer.appendChild(item);
        
    });
}
// Get photos from unsplash API

async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        
    }
    catch(e){
        console.log('oops', e);
    }
}

getPhotos();
