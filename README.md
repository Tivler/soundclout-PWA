# E-Commerce Website | [Run4It](https://run4it-pwa.herokuapp.com/)
This project is an e-commerce website centered around athletic apparel. It contains three pages routed together through react. The home page has slider images. The product page contains products, pulled from a MongoDB database, that allows a user to filter by product type and price. The contact page has a form that dynamically adds the comment to the comment slider so users can see their comments. A secure admin page has been added that allows access to the products. React and MongoDB is linked together through Express. The website has been modified to become a progressive web app that can be now be downloaded onto mobile devices.

## Getting Started

1. Use `npm install` to install all needed dependencies as listed by the package.json.

2. Run `mongod` to start the MongoDB process and run it in the background.

3. Create a `.env` in both the root directory and the test directory. The `.env` in the test directory should contain a different port for the tests.

4. Use `npm start` to start the application from the root directory.

## Getting Started (Mobile)
1. Open the [link](https://run4it-pwa.herokuapp.com/) on your mobile device.

2. On Safari, hit the download button on the bottom.

3. Scroll to the right until you see `Add to Home Screen` and tap on it.

4. Run4It should now be available on your phone.

## Preview of Application

### App Icon 
![](work/icon.png)

### App Home Screen
![](work/home.png)


## Audits

### Before
![](work/before/soundclout-mobile.png)

### After
![](work/after/soundclout-mobile.png)

### Built using

* [React](https://reactjs.org/docs/getting-started.html) - JavaScript library for building user interfaces
* [Express](https://expressjs.com/) - Server framework for Node.js
* [MongoDB](https://docs.mongodb.com/) - Cross-platform document-oriented database program

## Tests
Use `npm test` from the root directory.


## Author
* [Thomas McKyer](https://github.com/Tivler)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
