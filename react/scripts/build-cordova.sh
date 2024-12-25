set -e

PLATFORM="$1"
CORDOVA_APP_PATH=../cordova

echo '[ ] copy build to cordova'
rm -rf ${CORDOVA_APP_PATH}/www
cp -r ./build ${CORDOVA_APP_PATH}/www

cd ${CORDOVA_APP_PATH}

sed -i '' 's|</title>|</title><script type="text/javascript" src="cordova.js"></script>|' ./www/index.html

echo "[ ] add platform ${PLATFORM}"
cordova platform add "${PLATFORM}" && echo 'Platform already added'

echo '[ ] build in cordova'
cordova build "${PLATFORM}"
