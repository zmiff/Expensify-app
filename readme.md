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
