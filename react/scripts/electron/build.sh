set -e

ELECTRON_APP_PATH=../electron
BUILD_PATH=./build

if [ ! -e "${BUILD_PATH}" ]
then
  echo "build does not exists, generate it first"
  echo "\tnpm run react:build"
  exit 1
fi

echo '[ ] copy build to electron'
rm -rf ${ELECTRON_APP_PATH}/www
cp -r "${BUILD_PATH}" ${ELECTRON_APP_PATH}/www

cd ${ELECTRON_APP_PATH}

echo '[ ] modify files to run on electron'
sed -i '' 's|src="/|src="./|g' ./www/index.html
sed -i '' 's|href="/|href="./|g' ./www/index.html
sed -i '' 's|="/|="./|g' ./www/static/js/main.*.js

echo '[ ] generate the app'
npx electron-packager . MyNotes --arch=arm64,x64 --platform=darwin --out=dist/ --overwrite
