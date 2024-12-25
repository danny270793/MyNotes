set -e

PLATFORM="$1"
CORDOVA_APP_PATH=../cordova
BUILD_PATH=./build

if [ -z "${PLATFORM}" ]
then
  echo "specify the platform to build as argument"
  echo "\tnpm run cordova:build [andorid|ios]"
  exit 1
fi

if [ ! -e "${BUILD_PATH}" ]
then
  echo "build does not exists, generate it first"
  echo "\tnpm run react:build"
  exit 1
fi

echo '[ ] copy build to cordova'
rm -rf ${CORDOVA_APP_PATH}/www
cp -r "${BUILD_PATH}" ${CORDOVA_APP_PATH}/www

cd ${CORDOVA_APP_PATH}

sed -i '' 's|</title>|</title><script type="text/javascript" src="cordova.js"></script>|' ./www/index.html

echo "[ ] add platform ${PLATFORM}"
npx cordova platform add "${PLATFORM}" && echo 'Platform already added'

echo '[ ] build in cordova'
npx cordova build "${PLATFORM}"
