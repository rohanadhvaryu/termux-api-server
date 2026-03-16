#!/data/data/com.termux/files/usr/bin/bash

echo "Pulling latest code..."
git pull origin master

echo "Installing dependencies..."
npm install

echo "Restarting API..."
pm2 restart api-server

echo "Deployment complete."
