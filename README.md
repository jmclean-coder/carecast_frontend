# About CareCast

CareCast is self-care and enrichment web application featuring a soothing, mobile first design. My motivation to create this app is stems from my experiences learning to level up my self-care skills, particularly in regard to Emotional Granularity. You can read more about Emotional Granularity at [this Wikipedia page](https://en.wikipedia.org/wiki/Emotional_granularity) and [this Psychology Today article](https://www.psychologytoday.com/us/blog/the-mindful-self-express/201906/master-your-feelings-new-tools-inspired-neuroscience).

The backend of the application leverages Ruby on Rails API functionality to receive and send AJAX requests in a JSON format. The interactive frontend is built with ReactJS and styled with React Bootstrap for a responsive design.

---

## Features

Currently, users of CareCast can:

* Track self-care activities:
  * Hours of sleep
  * Glasses of water

* Rate themselves on how they feel about their:
  * Energy
  * Productivity
  * Motivation
  * Stress

* Keep a daily Journal and Todo List
* Chose from a list of over 200 granular feelings, group by categories of parent feelings, based on a users' needs being "met" or "unmet."

* View visualizations of their inputed data.
* Recieve inspirational quotes on a daily basis.

---

## Server Dependencies
Refer to the README in the [carecase_backend repository](https://github.com/jmclean-coder/carecast_backend) for instructions to set up the backend server and PostGreSQL.

## Dependencies:
* Node Package Manager (NPM)
* Developed on Google Chrome (80.0.3987.149)
* ReactJS
* React Bootstrap
* React Router

---

## Frontend Installation

For this guide, a MacOSX environment is assumed.

If you have the above dependencies:
<br />
- Fork and clone this repository to your desired install directory. 
- Navigate to that directory and open it in your code editor
- In your terminal run `npm install` to install require all other node packages
<br />

If you do not have the above dependencies:

First, if you do not currently have the latest version of Node Package Manager (NPM), [follow their guide here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
<br />

Next, to install ReactJS, React Bootstrap, and React Router, in a terminal navigate to the directory in which you installed this repo, then execute in order

- `npm install react react-dom`
- `npm install webpack webpack-dev-server webpack-cli`
- `npm install react-bootstrap bootstrap`
- `npm install react-router-dom`
  
Finally, to install all other require node packages, run `npm install`.

---

## Running:
This repository requires hosting locally. To start hosting the local server navigate to the directory in which this repo was installed. Then, via a terminal interface execute ```npm start```. If you started your rails server before this(recommended) you will be prompted to enter Y/N to use an unoccupied port. Enter `y` and after a moment your browser should automatically load the application. At this point the application will load and all functionality should be available.

---

<!-- ## Contribution: -->

## License
MIT License

Copyright (c) 2020 Joshua Mclean

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.