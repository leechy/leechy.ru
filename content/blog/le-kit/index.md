---
title: Unusual Web Components
date: '2019-01-30T11:53:00Z'
---

This weekend I've built my first web component — a wrapper which the user can turn in 2D around the center of the component (the point can be set additionally). And I will use it later to create specific touch control.

Next day I was exploring existing components (preferably Angular) to draw a circular progress bar. And no one seemed good enough. And I thought, why not create one myself? I can build web components already!

Now I have two components and a few more will be required soon. These components are not the regular ones: buttons, inputs, tabs, etc. I'll try to build only “unusual” components. And put them into a library. A kit.

<le-turntable value="20" style="
  display: block;
  float: right;
  width: 160px;
  height: 160px;
  margin: 20px;
  padding: 5px;
  background: linear-gradient(to left, #666 0%, #999 100%);
">
  <le-round-progress value="80" style="
    display: block;
    width: 150px;
    height: 150px;
    --progress-width: 10px;
    --progress-color: #f63;
    --progress-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
    --progress-path-color: rgba(255, 255, 255, 0.2);
  ">
    <le-round-progress value="66" style="
      display: block;
      width: 120px;
      height: 120px;
      padding: 15px;
      --progress-width: 15px;
      --progress-color: #ac3;
      --progress-path-width: 10px;
      --progress-path-color: inherit;
      --progress-path2-width: 2px;
      --progress-path2-color: rgba(0, 0, 0, 0.2);
      --progress-path2-dasharray: 1 5;
    ">
      <le-round-progress value="50" style="
        display: block;
        width: 88px;
        height: 88px;
        padding: 16px;
        --progress-width: 8px;
        --progress-color: #3ca;
        --progress-path-width: 14px;
        --progress-path-color: inherit;
      "></le-round-progress>
    </le-round-progress>
  </le-round-progress>
</le-turntable>

# Le Kit

You can get it from [GitHub](https://github.com/leechy/le-kit) or install as a [npm package](https://www.npmjs.com/package/le-kit).

Or just put it in the `<head>` like I did here:

```
<script src="//unpkg.com/le-kit/dist/le-kit.js"></script>
```

You can see two first components right here on the right... try to turn the box using the mouse.

A short explanation of the components will come shortly here:

## &lt;le-turntable&gt;

Gives the ability to turn any HTML content like a turntable. And (not in this release) returns how much the component was turned by the user.


## &lt;le-round-progress&gt;

Draws circular progress bar. Colors and sizes are set using CSS-variables.

<br /><br /><br />

Why “Le-”? Well, I'm Leechy and now I'm working with french guys, pronouncing my last name like “Le Cheff”. That's why ;-))
