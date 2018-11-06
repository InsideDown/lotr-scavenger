# Webpack Scaffold

The Webpack Scaffold is intended to act as baseline for you to build projects off of. Pull down the project, create a new git repo for it and work from there. The scaffold notably is not a Yeoman template; you should adjust this README file (and any other necessary files) to align with your project.

## Base Dependencies

- node/npm (http://nodejs.org/)

## Project Installation - NPM

This project can be installed locally using npm. After checking the project out from source control, `cd` to the root directory where package.json is located, and `npm install`. (You may need to `sudo npm install` depending on permission setup). Note that if `sudo` is required, there is likely a mistake with your npm permissions that needs addressed. (`sudo` should not be the answer to your problems, though it can be a quick fix in a pinch.)

## Third Party Libs

Third party libraries can be installed via npm (`npm install libname --save-dev`). Note that you will likely need to add the third party library to the webpack.config.js file as needed.

## Git Flow

Please follow the "git flow". The 'master' branch should be considered a mirror of Live. Never work directly in 'master'. The 'develop' branch is the "gateway" to 'master' and is the only branch that should ever be merged into 'master'. If 'develop' fails to build, do not merge to 'master'. Only minor maintenance updates (copy edits, style tweaks, small bug fixes, etc) should ever be done directly in the 'develop' branch. Larger updates should be done in a 'feature' branch. Updates in 'develop' should be merged down into the feature branch. The feature branch should not be merged up to 'develop' until ready to go to Live, pending QA. Merge 'develop' up to 'master' for go-Live after passing QA. Following this flow, multiple features can be in development concurrently without overriding each other.

## Workflow

All development work should be done in the 'src' directory. Use the npm commands below for running the project locally and processing for handoff to QA/Staging/Production.

## Using npm in the Terminal

`cd` to the trunk directory with the package.json and use the following commands:

- `npm run dev` : runs a local webpack-development-server with automatic live-reloading on port http://localhost:8001. Lints javascript, compiles SASS, and watches all files for changes. (Files served from memory).
- `npm run build` : packages all files for delivery to staging or production, output to a 'dist' folder. Lints javascript, optimizes javascript, compiles and minifies CSS.

## Some Gotchas

HTML pages are built as embedded Javascript templates (.ejs). If creating a new page, create as an .ejs page. (for now).


## Guiding Principles

The master branch is for deployments and should always build correctly. Use the develop branch for development. Create feature branches when building a substantial new feature. Follow the git flow.

Build mobile first as default, using tablet and desktop media queries to build upon and enhance the default view. Exceptions are when something is unique to a specific view, such as a mobile hamburger menu. In such cases hide or disable it by default, then style it within a media query targeting that specific view.

Breakpoints are as as follows:
Mobile: 0-767
Tablet: 768-1024
Desktop: 1025+

Full screen width backgrounds can usually be shared across all views. If you need individual backgrounds per view, they should be sized as follows:
Mobile: 768
Tablet: 1024
Desktop: 2200 (or sometimes 2400)

When exporting foreground / content images as jpg, use compression level 50-80.

When exporting background images as jpg, use compression level 50-60.

Use the imageOptim (https://imageoptim.com/mac) application to crunch ALL images before adding to the build.

Use sass mixins. Do not use sass extend. Using extend may sometimes compile to a slightly smaller CSS file, but at the cost of readability, predictability, and is horrible to debug in a web inspector. The file size savings is not worth it, especially considering we use a minifier for production.

Make typography simple. Make typography simple. Make typography simple.

Do not make typography complex. Make typography simple. Define base level typography in the typography stylesheet. Do not re-define typography styles throughout the view stylesheets unless absolutely necessary. Common exceptions are: navigation, footer, forms, maybe the hero?

If you find the view stylesheets growing larger and larger, then maybe it's time to refactor and move some styles into a common or component stylesheet.

We're using Babel to transpile ES6 to ES5. So feel free to use ES6 syntax, experiment, learn, enjoy. But be advised that if something doesn't transpile correctly or is not supported by Babel, it may need to be re-written as ES5.
