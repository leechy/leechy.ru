---
title: Geolocation and PWA incompatibility
date: '2019-01-09T21:27:00Z'
---

I'm still trying to write about some of the solutions from my last project, but meanwhile, I've already started a new one. It's a hybrid mobile app where user geolocation tracking is required. 

I wanted a lot to build it as a PWA-first and pack the already working app with Cordova into apps for AppStore and Google Play. I was even convincing the client about how it will be great for the distribution. 

And then... 

And then I started coding and suddenly realized that geolocation tracking on the phones is working only if the app (browser) and the phone are active. If the phone is locked or the browser is in the background and `watchPosition` is not triggered until the browser is current app again. 

There is no access to `navigator.geolocation` from service workers. No secret settings for Safari or Chrome about it. One [hack for FirefoxOS](https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Wake_Lock_API/Keeping_the_geolocation_on_when_the_application_is_invisible) and a [GitHub issue for the Geolocation API](https://github.com/w3c/geolocation-api/issues/13). 

What to do? Well, we should definitely warn users that we cannot track them from the browser, so they should download the app from the store. And as a second option — keep it in the browser and prevent the phone from sleeping. 

... going to investigate how to keep the device awake (invisible video in the loop? ... [yep](https://github.com/richtr/NoSleep.js) ;-))