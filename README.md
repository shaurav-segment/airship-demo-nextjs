# airship-demo
Sample webapp for showing Airship push notifications

Steps to Follow

1. Do the Web Channel Setup as documented [here](https://docs.airship.com/platform/web/getting-started)
2. Download the SDK bundle from Airship
2. Clone this repo locally
3. Replace `push-worker.js` in the repo with your push-worker.js from the SDK bundle
4. Copy the content inside the <script> tags from `snippet.html` into `public\airship.js`
5. Install `now` via `npm install -g now` if that is where you also want to run the demo app or you can run locally
6. Run `now` or `npm start`
7. Go to the website, click `Allow` notifications, enter a userId to set the named user
8. Go to Airship and you can now send push messages either by targeting the specific named user or any other device or channel tags
