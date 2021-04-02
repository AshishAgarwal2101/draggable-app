# How to Run the app
1. npm install
2. npm start

# What this app is about?
A simple application with drag and drop functionality.
A window with item list will be available on the left window.
Clicking on an item will populate that item in the right window.

Two options available on the right window:
* All items in the right window can be dragged and dropped within the window (used react-draggable)
    * Used react-draggable.
    * This component is commented by default in App.js.
    * To enable this, uncomment usage of "DragBox" component in App.js and comment/remove usage of ReactFlowDragDrop component.
* All items in the right window can be dragged and dropped along with the option to connect the items using edges.
    * Used react-flow-renderer.
    * Connection of items happens from top to bottom

![alt text](https://github.com/AshishAgarwal2101/draggable-app/blob/master/public/sample.JPG?raw=true)

![alt text](https://github.com/AshishAgarwal2101/draggable-app/blob/master/public/sample-1.JPG?raw=true)
