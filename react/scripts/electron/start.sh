set -e

ELECTRON_APP_PATH=../electron

npm install

cd ${ELECTRON_APP_PATH}
echo '[ ] open app'
open ./dist/MyNotes-darwin-arm64/MyNotes.app
