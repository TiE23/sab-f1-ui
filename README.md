# <h1 align="center">🏎 📡 🌍 F1 World Broadcast Emulator Project 🌍 📡 🏎</h1>
Hello! What you've stumbled upon is a personal practice web development project by me, Kyle Geib (TiE23). As the sport of Formula 1 is a passion of mine this is a passion project I assigned myself to become more comfortable with CSS, Redux, TypeScript, and React Hooks.

I've probably written 98% of all the CSS I've ever written in my life in this project alone. While I'm not exactly a master (yet) I feel entirely capable of taking design directions from a designer and building the CSS that is needed to create it in the real world.

# Demos
*Please note that animated images on this page are in WEBP format and may have performance issues (a lowered framerate) depending on your device. Animations are buttery smooth in practice! View the videos below if they're slow for you!*

## Driver Chyrons
*"Chyrons"* - Dynamic, animated information boxes.

<img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron.webp"/>

They are used to highlight the current cars on screen to viewers.

### Features
* Animated mounting with multiple moving elements
* Portraits for all 20 drivers from 2021
* Team colors for elements and driver numbers
* Custom fit country and team flags
* Retired cars hide their position
* Built with CSS and JS timing functions

### Image Gallery
*(Click to view full size.)*
<table>
  <tr>
    <td style="width:350px">
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron-001.png">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron-001.png" />
      </a>
      <br />
      Normal size with portrait and team flag
    </td>
    <td style="width:350px">
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron-002.png">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron-002.png" />
      </a>
      <br />
      Normal size with country flag
    </td>
    </tr>
    <tr>
    <td style="width:350px">
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron-003.png">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron-003.png" />
      </a>
      <br />
      Normal size with no position
    </td>
    <td style="width:350px">
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron-large.png">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/chyron-large.png" />
      </a>
      <br />
      Large size
    </td>
  </tr>
</table>

## Timing Board
*"Timing Board"* - Constant display of car positions and race progress
<table>
  <tr>
    <td style="width:233px">
      <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/timing1.webp" />
      Fastest lap award animation
    </td>
    <td style="width:233px">
      <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/timing2.webp" />
      Mode changes
    </td>
    <td style="width:233px">
      <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/timing3.webp" />
      Animated position changes
    </td>
  </tr>
</table>

### Features
* Position changes animate with subtle outline hightlight
* Position flags wipe away their color when complete
* Fastest Lap indicator with matching animation
* Four different display modes: *Hidden*, *Left Only*, *Left + Right*, and *Full Left*
* Interval and Leader split times

## Prototype Interface
Page elements are prototyped in a shared workspace where new elements can be developed, adjusted, and controlled.

### Video Gallery
*(Click to view short video.)*
<table>
  <tr>
    <td colspan=2>
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/002.mp4">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/002.png" />
      </a>
      <br />
      Workspace interface with custom-made input components
    </td>
  </tr>
  <tr>
    <td style="width:350px">
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/003.mp4">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/003.png" />
      </a>
      <br />
      Slow motion up to 1/10th speed
    </td>
    <td style="width:350px">
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/004.mp4">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/004.png" />
      </a>
      <br />
      Reference images gathered from official footage can have its position and opacity adjusted to pursue pixel-perfect re-creations
    </td>
  </tr>
</table>

## Broadcast Page
The broadcast page is used to emulate the look and feel of the F1 broadcast. The broadcast graphics scale and position correctly based on the size of the browser window.

### Video Gallery
*(Click to view short video.)*
<table>
  <tr>
    <td>
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/001.mp4">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/001.png" />
      </a>
      <br />
      Timing Tower
    </td>
    <td>
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/005.mp4">
        <img src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/005.png" />
      </a>
      <br />
      Dual Driver Chyrons
    </td>
  </tr>
  <tr>
    <td colspan=2>
    <div>
      <a href="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/000.mp4">
        <img  src="https://sab-f1-ui.s3.us-west-2.amazonaws.com/demos/000.jpg" />
      </a>
      <br />
    </div>
      Dynamically scaled 16:9 broadcast frame works with any window size
    </td>
  </tr>
</table>

# What is this... exactly?
As strange as this might sound this is a website.

Yes, a website like Twitter or Facebook, it's really incredible what kind of cool things you can get up to using HTML, CSS, and JavaScript in a modern web browser.

In fact, if you use Discord or Spotify have you ever noticed how much the website interface looks like the desktop client? Well, surprise, the desktop app is actually just the website! Okay, not 100% literally, but they're both written in HTML, CSS, and JavaScript. The desktop version may have more advanced features, but deep down they're mostly the same code running in different environments.

This is a tangent but if you want to read more on this check out Discord's technology ["Electron" on Wikipedia](https://en.wikipedia.org/wiki/Electron_(software_framework)). And for Spotify's look at ["Chromium Embedded Framework" on Wikipedia](https://en.wikipedia.org/wiki/Chromium_Embedded_Framework).

## Can I use this in my racing game overlay system or on my livestream?
Short answer is: "No. Not even close".

While it is certainly possible, in fact, this could be considered a start of such a project, it wasn't what I intended when I started. I'm sorry to say that if this is the reason you're looking into this you might want to spare yourself some time and stop here.

I've learned a little bit about, say, using OBS to overlay websites as a transparency on a video feed. But I have no interest nor the time to do such a thing. Literally, if you put a gun to my head and demanded it I would need to work full time perhaps 3-5 months to pull off such an interface and API system to work with whatever interesting combination of tools and programs you fantasize over.

If you somehow have the interest AND the skills to do such a thing I fully welcome you to reach out to me and tell me about it. If someone (or a group of people) could continue my work I'd not only give my permission but some of my support as well.

# How to download and run
Here I'll do my best to guide you to try this project on your own

I'm going to write this assuming you're not at all familiar with programming and software development. But worry not, if you're a properly massive computer nerd you'll probably manage.

## Note about your operating system
But do note that I develop on MacOS, which despite its (undeserved) reputation by some to be an operating system for babies and old people is far easier to code on than Windows thanks to its deep relationship to the Unix operating system, a common ancestor to Linux - the operating system preferred by true computer nerds - the kind who make money through their knowledge and abilities.

As a result it's my humble estimate that the OS used by JavaScript-writing web developers (in the west at least) probably breaks down to something like 85% MacOS, 8% Windows, and 7% Linux.

## What you'll be doing
First I'll have you download Microsoft's VSCode.

It's the world's most popular and loved IDE (Integrated Development Environment) - basically an extremely powerful text editor. Entirely free and extremely polished it works flawlessly on Windows, MacOS, and Linux.

Then I'll have you install *NodeJS* and enable *yarn*.

NodeJS is an engine of sorts that runs JavaScript code on your computer. If you've ever opened up the inspection tab of your desktop browser you might have seen the console tab and find you can write stuff like "1 + 2" and press enter to have it return "3".

JavaScript is a computer language that was written for browsers (Netscape, Internet Explorer, Safari, Opera, Firefox, Chrome, Edge - all of theme) to have a shared language that could do cool things on a web page. Well, things got out of hand and sometime in 2009 a guy took Google Chrome's "V8" JavaScript engine and removed it from the metaphorical car that is the Chrome Internet browser. Now entire websites running on Linux server computers are being hosted and controlled by the same "engine" that runs in Chrome. It's a strange thing but it's become very popular.

What NodeJS does it is "runs" the website on your computer so that you can then view it in your browser. The old days of simply opening a .html file in your browser really isn't what we do anymore - modern tech requires a lot more horsepower.

From there all you'll need to do is use yarn to "install" the project's "packages". Now. Don't get scared about the term "install", it's not going to install a bunch of RAM-sucking spyware or anything like that. No, it'll download thousands and thousands of little text files of JavaScript code that you can delete at any time.

Lastly, you'll be able to run and view the website in your browser at [localhost:3000](http://localhost:3000/).

### What I'm skipping
If you ever want to contribute to this code you'll need to get your feet wet in the world of Git and GitHub, which is an important, crucial, and intimidating subject. If you want to get started with GitHub please start with their docs [here](https://docs.github.com/en/get-started/quickstart/hello-world). It'll be the way that you can, without relying on downloading and extracting .zip files, can download updated code and, in the future, commit and push code of your own to GitHub.

## The steps
1) Download and install [Microsoft Visual Studio Code](https://code.visualstudio.com/).
1) Download the source code of my project by clicking the green "Code" button near the top of this page and download the .zip file.
1) Unpack the zip file's contents in a very easy-to-find location on your computer. I recommend creating a "git" directory in your personal files folder and making it located at "`<My Home Directory>/git/sab-f1-ui`". (Also, I really recommend AGAINST placing it in any Dropbox or other cloud storage directory you might have location).
1) Open VSCode and open the `sab-f1-ui` directory as a new project.
1) In VSCode open a terminal (look around the menus at the top of VSCode).
1) Install NodeJS v16.13.0. For MacOS, use "nvm" and follow [this guide](https://github.com/nvm-sh/nvm#installing-and-updating) and [these steps](https://github.com/nvm-sh/nvm#installing-and-updating). For Windows follow [this guide](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) - if you get errors about "access denied" [try this fix](https://stackoverflow.com/a/63084419); if you get errors about "script execution" [try this fix](https://stackoverflow.com/a/67420296).
1) Run `node -v` and make sure it works and says v16.13.0.
1) Enable `yarn` by running `corepack enable` (more details [here](https://yarnpkg.com/getting-started/install)). If for some reason this isn't working, you can skip it.
1) With the terminal for VSCode open in the `sab-f1-ui` directory run `yarn` (if you didn't get yarn, run `npm install`). This will download all the open source code needed to run my code (expect 300-800 MB download, it's hard to predict).
1) If everything installed correctly, now run `yarn start` (if you didn't get yarn, run `npm start`).
1) If a browser window doesn't open for you automatically, open up a new browser tab and go to [localhost:3000](http://localhost:3000/).

Currently 95% of the content of my project is under the "Workspaces" segment. Take a look and play around!

If you get bad performance or flashing text its because you're in developer mode. If you want you can try to build the project and serve it in production mode. Run `yarn build` (or `npm build`) and then follow [this guide](https://create-react-app.dev/docs/deployment/#static-server) to find how to install the command line program `serve` and host the static site with `serve -s build`.

# My Previous Work
## Accretive Technology Group (2013-2018)
I spent the first five years as a professional programmer in Seattle, Washington working as an SDET and later a "support engineer" for a modern web company whose business was in video entertainment streaming.

I worked daily alongside web developers but hardly developed any experience building webpages of my own.

## Metric-Teacher (2018)
Dissatisfied with the lack of creative output in my work I decided in 2018 to quit that job and spent approximately 8 months working on [Metric-Teacher.com](http://metric-teacher.com) (source code also hosted on GitHub [here](https://github.com/TiE23/metric-teacher)). It is a fully interactive progressive webapp that teaches American users how to intitively use the Metric System modeled as an homage to Duolingo.

I learned Fullstack Javascript development, writing both the client and server all from scratch and learned to build, host, and maintain my own complex website.

On the client-side I learned ReactJS, Apollo, and how to use GraphQL.
On the sever-side I learned NodeJS, SQL database design, and how to build a GraphQL schema.
For hosting I became familiar with Docker, Traefik, AWS, and mechanisms for data backup and restoration.

## Meta (formerly Facebook) Contractor (2019-2021)
Working at Facebook (or as its now called, Meta) I was hired on for the combination of skills I developed at Accretive and Metric-Teacher. I would develop internal scripts and web tools that facilitated language-localized testing for Facebook's voice assistant product.

I didn't learn that much more about React beyond getting familiar with React Hooks. Facebook uses Flow instead of TypeScript and Flux (and other solutions) instead of Redux and has a ton of technical overhead when it comes to the marriage of their own language Hack (an extension of PHP), their cross-language API/RPC framework Thrift, and their configuration files system Configurator to the world of React and JavaScript.

## 2021 Self Teaching
My time with Facebook ended in June 2021 and after taking a month to vacation and relax and started by reading through a 660 page long look from cover-to-cover on React and [TypeScript](https://www.typescriptlang.org/) to learn everything I didn't already know (or what came out as the new paradigms - having built Metric-Teacher just before hooks became the norm).

Then I learned about composing CSS styles through the [Styled-Components](https://styled-components.com/) system that I have grown to absolutely love.

Finally I worked my way through a comprehensive course in [D3.js](https://d3js.org/). And while I haven't found a use for this library in my project it really has left a mark on me and I'm excited for any chance to use it in the future.

## F1 World Broadcast Emulator project
I started work on this project in mid December mostly working on the basic scaffolding of the project - routing, state, and getting familiar with general page layout. I then promptly took time off for Christmas and New Years.

In January and February I did most of the *interesting* work you see here. While I had in my mind the idea of re-creating most if not all of the graphics you see on F1's broadcasts it's clear to me that a team of trained professionals using specially designed tools had worked on the graphics for some time. So I really had to limit my ambitions and grew to accept that I would learn all I needed to learn by doing just a few segments to a satisfactorily polished level.

# Fair Use Disclaimer
Copyright Disclaimer Under Section 107 of the Copyright Act in 1976; Allowance is made for "Fair Use" for purposes such as criticism, comment, news reporting, teaching, **scholarship**, and **research**.

Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.

All rights and credit go directly to its rightful owners. No copyright infringement intended.

In particular:
* Mercedes-AMG Petronas Formula One Team
* Red Bull Racing Ltd
* Ferrari S.p.A
* McLaren Racing
* RENAULT s.a.s.
* AMR GP Limited
* Scuderia AlphaTauri S.p.A.
* Sauber Group
* FCA US LLC
* Williams Group
* Haas F1 Team
* Formula One World Championship Limited
* Rolex
