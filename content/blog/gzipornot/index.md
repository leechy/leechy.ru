---
title: Gzip or not
date: '2019-01-01T13:20:00Z'
---

I know that nowadays it's a silly question and you should start to think about performance budgets already, but it's something that actually happened with us — we've launched a new shiny application without gipping — because we forgot to check.

Today it's my last day working on this big enterprise web app, built with Angular 5 and @ngrx/store. For the next few posts, I'm going to tell you a few things I've learned developing this project like:

* Creating common actions, reducer, and effects to store data from multiple REST APIs acting the same way. Including the format, we managed to keep the data in the store to access and update it easily.
* Is a shared form and fields components an overengineering?
* Optimizing the application performance and the perception of speed. Targeting the slow IE11.

But I decided to start with the most trivial point: the full size of the app exceeded 18MB in the dev mode and about 14MB compiled for production. Turning on GZip slimmed it down to 2.5MB. That's almost 6 times fewer data downloaded!

Of course, we are using lazy-loading for the different parts of the app and I'm talking about the full app size here, but even if your chunks seems small enough, please, use gzip.

Oh, and don't forget to turn it for the API server too. Some data responses can be pretty heavy.

Happy New Year!