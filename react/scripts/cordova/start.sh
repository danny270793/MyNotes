set -e

PLATFORM="$1"
CORDOVA_APP_PATH=../cordova

if [ -z "${PLATFORM}" ]
then
  echo "specify the platform to build as argument"
  echo "\tnpm run cordova:build [andorid|ios]"
  exit 1
fi

cd ${CORDOVA_APP_PATH}
if [[ "${PLATFORM}" == "ios" ]]
then
    cordova run "${PLATFORM}" --target="iPhone-16-Plus"
else
    cordova run "${PLATFORM}"
fi
