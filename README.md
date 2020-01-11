# react_andrew


## Section 1: Welcome
10분 

1. Welcome & Asking Good Questions
5분

- How to build React App
- Part 1: How to build, render, submit form, user interaction
- Part 2: Advanced, Ecosystem, Auth, Deploy
- Using Q&A  

2. "Why should I learn React?"
5분

- Library
- The React community

## Section 2: Setting up Your Environment
7분

3. Section Intro: Setting up Your Environment
1분

4. Installing Visual Studio Code
2분

5. Installing Node.js & Yarn
4분

```bash
$ npm i -g yarn
$ yarn --version
```

## Section 3: Hello React
0 / 16|3시간 45분

6. Section Intro: Hello React
2분

- http://indecision.mead.io
- http://links.mead.io/indecision

- Fundermentals
- JSX

7. Setting up a Web Server
12분

```bash
$ npm install -g live-server
$ live-server -v
$ live-server public
```

8. Hello React
19분

```JavaScript
// app.js

console.log('App.js is running!')

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>
var template = React.createElement("h1", {
    id: "aa s",
    className: "aaa fff fff"
  }, "This is JSX ggg");
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
```

9. Setting up Babel
17분

```bash
```


10. Exploring JSX
15분

11. JSX Expressions
10분

12. Conditional Rendering in JSX
23분

13. ES6 Aside: const and let
16분

14. ES6 Aside: Arrow Functions
13분

15. ES6 Aside: Arrow Functions Part II
20분

16. Events and Attributes
17분

17. Manual Data Binding
12분

18. Forms and Inputs
18분

19. Arrays in JSX
14분

20. Picking an Option
9분

21. Build It: Visibility Toggle
9분



## Section 4: React Components
3시간
## Section 5: Stateless Functional Components
1시간 23분
## Section 6: Webpack
2시간 16분
## Section 7: Using a Third-Party Component
29분
## Section 8: Styling React
2시간 8분
## Section 9: React-Router
1시간 35분
## Section 10: Redux
3시간
## Section 11: React with Redux
3시간 2분
## Section 12: Testing Your Application
4시간 14분
## Section 13: Deploying Your Apps
2시간 44분
## Section 14: Firebase 101
1시간 58분
## Section 15: Firebase with Redux
2시간 6분
## Section 16: Firebase Authentication
1시간 52분
## Section 17: Styling Budget App
2시간 4분
## Section 18: What Now?
28분
## Section 19: [New!] Hooks, Context, Fragments, and More
2시간 48분