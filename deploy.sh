#!/usr/bin/env sh

set -e

npm run build

cd .nuxt/dist/server

git init
git add -A
git commit -m "New Deployment2"
git push -f git@github.com:macyenga/imibonano.git master:gh-pages

cd -

