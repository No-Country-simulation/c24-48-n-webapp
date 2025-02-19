#!/bin/sh

echo 'Installing dependencies...'
npm install

echo 'Starting the development server...'
npm run dev -- --host 0.0.0.0 --port 5173
