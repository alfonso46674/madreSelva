# Madre Selva
Web platform for the dissemination and creation of academic content on art and culture. 

## Getting Started

To run the React Frontend
```
npm run start
```

To run the Node Backend

```
npm run dev
```

To run the whole project (Frontend and Backend)
```
npm run prod
```

## How it was done?

This web page was done with React and Node.js, and deployed in a RaspberryPi 3 with the aid from a domain from https://www.noip.com/ 

Since the RaspberryPi was behind a home router, its ip needed to be accesible to the internet. Port forwarding external requests to an arbitrary port from the router was the solution to this problem. 

PM2 was installed in the RaspberryPi to run the Node Backend in the background and handle maintenance. 

The use of a Database such as MongoDB or SQLite was not implemented since there was not enough time to make it happen, that is the reason of using a JSON file as the database - which is not ideal -.

## How it works?

Anyone can submit a video or document related to art and culture in the "Publish" section. After that, the administrator will review the newest submissions, and if they are approved, they will be shown in the main page.

## Screenshots
![mainPage](/img/mainPage.JPG)
![aboutUs](/img/aboutUs.JPG)
![publish](/img/publish.JPG)
![admin](/img/admin.JPG)
