#Pennzoil 500
A single-page responsive website to experiment with development workflows and techniques.

* Optimise main header size across various sized devices using the [FitText](http://fittextjs.com/) jQuery plugin
* Integrate [Sass](http://sass-lang.com/) CSS pre-processor and [Grunt](http://gruntjs.com/) task runner into development workflow
* Responsive images using the `Picture` HTML element and [PictureFill](https://github.com/scottjehl/picturefill) polyfill
* Git branching and this `README.md` file

##Build notes
Built on [HTML5 Boilerplate](http://html5boilerplate.com/) v 4.3.0 

###Git
Created repository on GitHub and initialised locally
```
$ git init
$ git add *
$ git commit -m "Initial build on HTML5 Boilerplate”
$ git remote add origin https://github.com/davidpclarke/Pennzoil-500.git
$ git push -u origin master
```

###Sass
Installed Sass (Requires Ruby Gem package manager which is pre-installed on Mac)
```
$ sudo gem install sass
$ sass -v
```

Copied `main.css` to `main.scss` and added some Sass variables. 

Compiled
```
$ sass css/scss/main.scss css/main.css 
```

[Sass reference documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass)


###Grunt
Installed Grunt task runner, following [these instructions](http://24ways.org/2013/grunt-is-not-weird-and-hard/)

Check that Node is installed
```
$ node -v
```

Create `package.json` in project root folder (this is how Node does dependencies)
```
{
  "name": "pennzoil-500",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.1"
  }
}
```

Grunt is installed per-project (creates `node_modules` folder)
```
$ npm install
```

Install the Grunt command-line interface (just once)
```
$ sudo npm install -g grunt-cli
```

Set up grunt to concatenate multiple files:
* `normalize.css` and `main.css` to `style.css`
* `modernizr-2.6.2.min.js` and `jquery.fittext.js` to `scripts.js`

Install `grunt-contrib-concat`, the Grunt plugin for concatenating files
```
$ sudo npm install grunt-contrib-concat --save-dev
```

`package.json` file is automatically updated
```
{
  "name": "pennzoil-500",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-concat": "^0.5.0"
  }
}
```

Create `Gruntfile.js` and configure concat tasks
```
module.exports = function(grunt) {
    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {   
            dist: {
                src: [
                    'js/vendor/modernizr-2.6.2.min.js'  // Modernizr (from H5BP)
                    'js/*.js',        // All JS in the js folder (from H5BP)
                    'js/vendor/jquery.fittext.js'       // FitText.js
                ],
                dest: 'js/build/production.js',
            }
        }
    });
    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);
};
```
Execute Grunt
```
$ grunt
Running "concat:dist" (concat) task
File js/build/production.js created.
Done, without errors.
```


###Git branch
(Should probably have created the branch before all of the above steps)

* [Guide to Git branches](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)

Create the new branch (lower case seems to be the standard)
```
$ git checkout -b Configure-Sass-and-Grunt
```

Double-check we’re on the right branch
```
$ git branch
* Configure-Sass-and-Grunt
  master
```

Add new files (Grunt, Sass, concatenated JS, etc)
```
$ git add *
```

Commit modified and added files to our new branch
```
$ git commit -m "Initial Sass setup and Grunt config (JS concatenation)"
```

Push the new branch to GitHub
```
$ git push origin Configure-Sass-and-Grunt
```

We’ll continue making Sass and Grunt amends before merging this branch later.


###Minify JS with Grunt
Install the uglify Grunt plugin
```
$ sudo npm install grunt-contrib-uglify --save-dev
```

Add uglify config to `Gruntfile.js` (note that config settings sections need to be comma-separated)

Update `index.html` to point to minified JS file.

Execute Grunt to generate minified JS file
```
Update Git
$ git add *
$ git commit -m "Added Grunt uglify for JS minification"
$ git push origin Configure-Sass-and-Grunt

```

###Compile Sass with Grunt
Install the Sass [Grunt plugin](https://github.com/gruntjs/grunt-contrib-sass)

```
$ sudo npm install grunt-contrib-sass --save-dev
```
Update `Gruntfile.js` with Sass config as described at the above link to compile `main.scss` to `main.css`

