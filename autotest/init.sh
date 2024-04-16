#!/bin/sh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  


apt update && apt install -y net-tools


nvm install 20
# nvm use 20

# npm install chromedriver --chromedriver_version=123.0.0

npm install && npm run wdio

while true; do
  sleep 10000
done
