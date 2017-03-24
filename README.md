## froko-angular-seed ##
Yet another seed project for Angular (v4) and webpack (v2)

### Technology Stack ###
- Angular (4.0.0)
- TypeScript (2.2.1)
- Suport for CSS and SASS
- webpack (2.3.1)
- karma/jasmine/remap-istanbul
- tslint

### Prerequisites ###
- node v5.x.x or higher and npm 3 or higher.

### How to start ###

	git clone https://github.com/froko/froko-angular-seed.git
	cd froko-angular-seed
	npm install   # installs npm package dependencies
	npm start     # starts the application at http://localhost:3000

_Note that you have to open the browser by yourself._

Instead of `npm install` you can run `npm run ci` which installs all npm packages, runs the unit tests and builds the application all in one single step.

### How to build ###
Run `npm run build` to create a production-ready AOT version of the web application

All necessary files are being written into the `dist` folder. This is the unit of deployment which you can use with a web server of your choice, e.g. IIS or Apache

### How to test ###
Run `npm test` for a single test run. If you prefer continuous testing, run `npm run test:watch`.