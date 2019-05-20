cd client
yarn install
yarn build
mv dist ../server
cd ../server
yarn install
yarn run server