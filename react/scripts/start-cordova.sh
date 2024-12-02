set -e

PLATFORM="$1"
CORDOVA_APP_PATH=../cordova

cd ${CORDOVA_APP_PATH}
if [[ "${PLATFORM}" == "ios" ]]
then
    cordova run "${PLATFORM}" --target="iPhone-16-Plus"
else
    cordova run "${PLATFORM}"
fi
