@ Git Commands

git init - Create a new git repo
git status - View the changes to your project
git add - Add files to staging area
git commit - Creates a new ccommit with files from staging area
git log - View recent commits

@ SSH
on windows switch to git bash
check if ssh key is set up - ls -a ~/.SSH.
setup SSH key - ssh-keygen -t rsa -b 4096 -C "your_email@example.com".
Ensure the ssh-agent is running: - eval $(ssh-agent -s)
add SSH private key: - ssh-add ~/.ssh/id_rsa
Adding a new SSH key to your GitHub account: - clip < ~/.ssh/id_rsa.pub
connect to github - ssh -T git@github.com
git remote add: - git remote add origin https://github.com/zmiff/Expensify-app.git
firt push: - git push -u origin master

@ production webpack
add script on package.json "build:prod": "webpack -p --env production/development"
put all the stuff on webpack config in a (env) => {/here/} arrow function
add this -  const isPorduction = env === 'production';
and this - devtool : isProduction ? 'source-map' : 'cheap-module-eval-source-map'

@ Seperate CSS files
npm install extract-text-webpack-plugin
in webpack config file:
  const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
replace the inline use: styles with:
  use: CSSExtract.extract({
    use: [
      'css-loader',
      'sass-loader'
    ]
  })
  add thi plugin:
  plugins: [
    CSSExtract
  ],
in index.html add - <link rel="stylesheet" type="text/css" href="/styles.css" />
change the 'cheap-module-eval-source-map' to 'inline-source-map'
change css loader to this: in webpack :
use: CSSExtract.extract({
  use: [
    {
      loader: 'css-loader',
      options:{
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ]
})

@@ express server.
- first make the server/server.js file with app.use(express.static(publicPath));
app.get('\*', (req, res) => { //!dont type the \ before asterix
  res. sendFile(path.join(publicPath, 'index.html')); to solve page refresh issue
});
-- then run production build
-- then run node server/server.js

@@ heroku
--install Heroku CLI
-- from CLI
-- type: heroku login
-- type: heroku create app-name (appname must be unique)
-- in json.paskage add start script and postbuild
  --"start": "node server/server.js"
  --"heroku-postbuild": "npm/yarn run build:prod"
-- setup dynamic env port const port = process.env.PORT || 3000;
-- add the budnle and css files created by webpack to .gitignore
-- git push + git push heroku master
-- heroku open
