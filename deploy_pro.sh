

ssh -v lensclues@139.59.44.184 << EOF
  
  echo '1. Updating sources'
  cd /webapps/test/passportwithsession/
  git checkout --force local
  git pull

  echo "2. Restart node server"
  sudo pm2 start app.js

  echo 'Done!'
  echo 'Done!'
  
EOF