#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<G-warrior>.github.io
# git push -f git@github.com:<G-warrior>/<G-warrior>.github.io.git main

# if you are deploying to https://<G-warrior>.github.io/<REPO>
# git push -f git@github.com:<G-warrior>/app-coronavirus.git main:gh-pages

cd -