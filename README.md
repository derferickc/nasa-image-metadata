<a href="https://nasa-image-metadata.web.app/">
	<img src="https://firebasestorage.googleapis.com/v0/b/nasa-image-metadata.appspot.com/o/nasa_logo.png?alt=media&token=ba2231d8-0762-4f3f-aef2-8e3717e58f12" title="nasa-logo" alt="nasa-logo" width="150">
</a>

# NASA Image Search App

> A simple application that utilizes the NASA Image and Video Library API to fetch and serve images and their respective metadata to the client.

> Technology used: React, fetch, API, HTML5, SASS, CSS3, TransitionGroup, CSSTransition, ES6, Firebase

Homepage Hero
<img src="https://firebasestorage.googleapis.com/v0/b/nasa-image-metadata.appspot.com/o/screenshot-4.png?alt=media&token=748bed43-1662-40d0-832d-e5b93817904d" title="screenshot-1" alt="screenshot-1">

---

Homepage Table
<img src="https://firebasestorage.googleapis.com/v0/b/nasa-image-metadata.appspot.com/o/screenshot-5.png?alt=media&token=17d977b6-70cc-4f9b-99dc-bde351055cab" title="screenshot-2" alt="screenshot-2">

---

Image Details via Routing
<img src="https://firebasestorage.googleapis.com/v0/b/nasa-image-metadata.appspot.com/o/screenshot-3.png?alt=media&token=b8d0a4d9-754a-48f9-af10-fa0926b1bae9" title="screenshot-3" alt="screenshot-3">

---

Image Details via Modal
<img src="https://firebasestorage.googleapis.com/v0/b/nasa-image-metadata.appspot.com/o/screenshot-6.png?alt=media&token=5cadf18a-59c4-429b-b9a7-e6604917a114" title="screenshot-3" alt="screenshot-4">

---

404
<img src="https://firebasestorage.googleapis.com/v0/b/nasa-image-metadata.appspot.com/o/screenshot-7.png?alt=media&token=45019eea-77ab-41cc-b836-1f678cc3309b" title="screenshot-3" alt="screenshot-4">

## Installation / Run Commands

- npm install - to install all packages and dependencies
- npm start - will run the application by default on port 3000 (localhost:3000)
- npm run build - to build the application for production
- firebase init - create firebase instance
- firebase deploy - to run build, deploy, and host to firebase

### Clone

- Clone this repo to your local machine using `git clone https://github.com/derferickc/nasa-image-metadata`

### Instructions

- Visit localhost:3000 to view the Homepage, a table of images and previews of its metadata
- Clicking on the NASA logo on the top right will return user to the Homepage
- Homepage: Click "LEARN MORE PAGE" CTA in order to view additional information about the image via routing
- Homepage: Click "LEARN MORE MODAL" CTA in order to view additional information about the image via modal
- Image Pages (url includes "/image/"): Click "RETURN HOME" CTA to return to Homepage
- If you attempt to access a URL that is not defined, you will be directed to a 404 landing page