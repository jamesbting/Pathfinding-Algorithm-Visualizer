(this["webpackJsonppathfinding-algorithm-visualizer"]=this["webpackJsonppathfinding-algorithm-visualizer"]||[]).push([[0],{61:function(e,t,n){e.exports=n(78)},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=(n(66),n(67),n(5)),l=n(6),h=n(24),u=n(10),c=n(9),d=(n(68),n(69),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"information information--".concat(this.props.informationType)},r.a.createElement(r.a.Fragment,null,this.props.text,this.props.childComponent))}}]),n}(a.Component)),p=(n(70),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isFinish,n=e.isStart,a=e.isWall,i=e.isPath,o=e.isVisited,s=t?"node-finish":n?"node-start":a?"node-wall":i?"node-path":o?"node-visited":"";return r.a.createElement("div",{className:"static-node ".concat(s)})}}]),n}(a.Component)),f=(n(71),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"topbar"},this.props.text,r.a.createElement("div",null,v("Start"),v("Finish"),v("Wall"),v("Path"),v("Visited"),v("Regular"))))}}]),n}(a.Component)),v=function(e){var t="Start"===e,n="Finish"===e,a="Wall"===e,i="Path"===e,o="Visited"===e;return r.a.createElement(d,{informationType:"".concat(e,"-node"),text:"".concat(e," node "),childComponent:r.a.createElement(p,{isStart:t,isFinish:n,isWall:a,isPath:i,isVisited:o})})},m=n(116),g=n(117),b=n(13),y=function(){function e(t,n,a){Object(s.a)(this,e),this.name=t,this.description=n,this.link=a,this.visitedNodesInOrder=[],this.path=[]}return Object(l.a)(e,[{key:"solve",value:function(e,t,n){}},{key:"getPath",value:function(){return this.path}},{key:"getAlgorithmDescription",value:function(){return this.description}},{key:"getAlgorithmName",value:function(){return this.name}},{key:"getVisitedNodesInOrder",value:function(){return this.visitedNodesInOrder}},{key:"getLink",value:function(){return this.link}}]),e}(),k=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){Object(s.a)(this,n);return t.call(this,"Dijkstra's Algorithm","Dijkstra's Algorithm is a greedy algorithm that finds the shortest path between 2 nodes. For a given source node in the graph, the algorithm finds the shortest path between the current node and every other node. While simple and viable, it is possible to improve on it's performance with algorithms such as A * Search.","https://youtu.be/GazC3A4OQTE")}return Object(l.a)(n,[{key:"solve",value:function(e,t,n){var a=[];t.distance=0;for(var r=this.getAllNodes(e);r.length;){this.sortNodesByDistance(r);var i=r.shift();if(!i.isWall){if(i.distance===1/0)return this.visitedNodesInOrder=a,this.getNodesInShortestPathOrder(n),!0;if(i.isVisited=!0,a.push(i),i===n)return this.visitedNodesInOrder=a,this.getNodesInShortestPathOrder(n),!0;this.updateUnvisitedNeighbors(i,e)}}}},{key:"sortNodesByDistance",value:function(e){e.sort((function(e,t){return e.distance-t.distance}))}},{key:"updateUnvisitedNeighbors",value:function(e,t){var n,a=this.getUnvisitedNeighbors(e,t),r=Object(b.a)(a);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.distance=e.distance+1,i.previousNode=e}}catch(o){r.e(o)}finally{r.f()}}},{key:"getUnvisitedNeighbors",value:function(e,t){var n=[],a=e.col,r=e.row;return r>0&&n.push(t[r-1][a]),r<t.length-1&&n.push(t[r+1][a]),a>0&&n.push(t[r][a-1]),a<t[0].length-1&&n.push(t[r][a+1]),n.filter((function(e){return!e.isVisited}))}},{key:"getAllNodes",value:function(e){var t,n=[],a=Object(b.a)(e);try{for(a.s();!(t=a.n()).done;){var r,i=t.value,o=Object(b.a)(i);try{for(o.s();!(r=o.n()).done;){var s=r.value;n.push(s)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){a.e(l)}finally{a.f()}return n}},{key:"getNodesInShortestPathOrder",value:function(e){for(var t=[],n=e;null!==n;)t.unshift(n),n=n.previousNode;this.path=t}}]),n}(y),w=n(30),O=n(16),j=function(){function e(){Object(s.a)(this,e),this.heap=[null]}return Object(l.a)(e,[{key:"get",value:function(){return this.heap[1]}},{key:"push",value:function(e){if(this.heap.push(e),this.heap.length>1)for(var t=this.heap.length-1;t>1&&this.nodeComparator(this.heap[Math.floor(t/2)],this.heap[t])>0;){var n=this.heap[Math.floor(t/2)],a=this.heap[t];this.heap[t]=n,this.heap[Math.floor(t/2)]=a,t=Math.floor(t/2)}}},{key:"pop",value:function(){var e=this.heap[1];if(this.heap.length>2){if(this.heap[1]=this.heap[this.heap.length-1],this.heap.splice(this.heap.length-1),3===this.heap.length){if(this.nodeComparator(this.heap[1],this.heap[2])>0){var t=this.heap[1];this.heap[1]=this.heap[2],this.heap[2]=t}return e}for(var n=1,a=2*n,r=2*n+1,i=this.heap[a],o=this.heap[r],s=this.heap[n];null!=i&&null!=o&&(this.nodeComparator(s,i)>=0||this.nodeComparator(s,o)>=0);)this.nodeComparator(i,o)<=0?(this.heap[a]=s,this.heap[n]=i,n=a):(this.heap[r]=s,this.heap[n]=o,n=r),a=2*n,r=2*n+1,i=this.heap[a],o=this.heap[r],s=this.heap[n]}else 2===this.heap.length&&this.heap.splice(1,1);return e}},{key:"nodeComparator",value:function(e,t){return e.f-t.f}},{key:"includesElement",value:function(e){return this.heap.includes(e)}},{key:"findElement",value:function(e){var t=this;return this.heap.find((function(n){return t.equals(e,n)}))}},{key:"size",value:function(){return this.heap.size-1}},{key:"equals",value:function(e,t){return null!=e&&null!=t&&(e.row===t.row&&e.col===t.col)}}]),e}(),E=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){Object(s.a)(this,n);return t.call(this,"A* Search Algorithm","A* Search is a greedy best-first-search algorithm that is based on Dijkstra's Algorithm. This one uses the Manhattan heuristic to determine which noes to search through. This means that the path is allowed to move up, down, left and right, but is not allowed to move diagonally","https://www.youtube.com/watch?v=ySN5Wnu88nE")}return Object(l.a)(n,[{key:"solve",value:function(e,t,n){var a=this.getGrid(e),r=new j;for(t.g=0,t.f=0,r.push(t);r.heap.length>1;){var i=r.pop();if(this.visitedNodesInOrder.push(i),i.closed=!0,this.equals(i,n)){for(var o=[],s=i;null!=s;)o.push(s),s=s.parent;return o.reverse(),this.path=o,!0}for(var l=this.getNeighbors(i,a),h=0;h<l.length;h++){var u=l[h];if(!u.closed&&!u.isWall)if(u.parent=i,u.g=i.g+1,u.h=this.ManhattanHeuristic(u,n),u.f=u.g+u.h,r.includesElement(u)){if(r.findElement(u).g<u.g)continue}else r.push(u)}}return!1}},{key:"contains",value:function(e,t){for(var n in e)if(t===n)return n;return null}},{key:"equals",value:function(e,t){return e.row===t.row&&e.col===t.col}},{key:"buildPath",value:function(e){for(var t=[],n=e;null!=n;)t.push(n),n=n.parent;return t.reverse(),t}},{key:"getNeighbors",value:function(e,t){var n=[],a=e.col,r=e.row;return r>0&&n.push(t[r-1][a]),r<t.length-1&&n.push(t[r+1][a]),a>0&&n.push(t[r][a-1]),a<t[0].length-1&&n.push(t[r][a+1]),n}},{key:"ManhattanHeuristic",value:function(e,t){return Math.abs(e.row-t.row)+Math.abs(e.col-t.col)}},{key:"getGrid",value:function(e){var t,n=[],a=Object(b.a)(e);try{for(a.s();!(t=a.n()).done;){var r,i=t.value,o=[],s=Object(b.a)(i);try{for(s.s();!(r=s.n()).done;){var l=r.value;o.push(Object(O.a)({h:0,f:0,g:0,isVisited:!1,closed:!1},l))}}catch(h){s.e(h)}finally{s.f()}n.push(o)}}catch(h){a.e(h)}finally{a.f()}return n}}]),n}(y),N=function(){function e(){Object(s.a)(this,e),this.data=[],this.top=0}return Object(l.a)(e,[{key:"push",value:function(e){this.data[this.top]=e,this.top=this.top+1}},{key:"length",value:function(){return this.top}},{key:"peek",value:function(){return this.data[this.top-1]}},{key:"isEmpty",value:function(){return 0===this.top}},{key:"pop",value:function(){if(!1===this.isEmpty())return this.top=this.top-1,this.data.pop()}}]),e}(),S=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){Object(s.a)(this,n);return t.call(this,"Depth First Search (Iterative)","Depth First Search (DFS) is an algorithm for traversing a graph that explores as far as possible along each branch before continuing. It is useful when the answer we are looking for is far away from the starting node that we are given. This particular instance of depth first search is implemented with a stack, and does not guarantee the shortest path. Note it is also possible to implement DFS with recursion.","https://www.youtube.com/watch?v=7fujbpJ0LB4")}return Object(l.a)(n,[{key:"solve",value:function(e,t,n){var a=this.getAllNodes(e),r=new N;for(this.visitNode(t,r);!r.isEmpty();){var i=r.pop();if(this.equals(i,n))return this.path=this.buildPath(i),!0;for(var o=this.getNeighbors(i,a),s=0;s<o.length;s++){var l=o[s];l.isVisited||l.isWall||(this.visitNode(l,r),l.parent=i,r.push(l))}}return!1}},{key:"visitNode",value:function(e,t){t.push(e),this.visitedNodesInOrder.push(e),e.isVisited=!0}},{key:"buildPath",value:function(e){for(var t=[],n=e;null!=n;)t.push(n),n=n.parent;return t.reverse(),t}},{key:"getAllNodes",value:function(e){var t,n=[],a=Object(b.a)(e);try{for(a.s();!(t=a.n()).done;){var r,i=t.value,o=[],s=Object(b.a)(i);try{for(s.s();!(r=s.n()).done;){var l=r.value;o.push(Object(O.a)({parent:null,isVisited:!1},l))}}catch(h){s.e(h)}finally{s.f()}n.push(o)}}catch(h){a.e(h)}finally{a.f()}return n}},{key:"getNeighbors",value:function(e,t){var n=[],a=e.col,r=e.row;return r>0&&n.push(t[r-1][a]),r<t.length-1&&n.push(t[r+1][a]),a>0&&n.push(t[r][a-1]),a<t[0].length-1&&n.push(t[r][a+1]),n}},{key:"equals",value:function(e,t){return e.row===t.row&&e.col===t.col}}]),n}(y),A=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){Object(s.a)(this,n);return t.call(this,"Depth First Search (Recursive)","Depth First Search (DFS) is an algorithm for traversing a graph that explores as far as possible along each branch before continuing. It is useful when the answer we are looking for is far away from the starting node that we are given. This particular instance of depth first search is implemented with a recursive algorithm and does not guarantee the shortest path. Note it is also possible to implement DFS iteratively using a Stack.","https://www.youtube.com/watch?v=7fujbpJ0LB4")}return Object(l.a)(n,[{key:"solve",value:function(e,t,n){var a=this.getAllNodes(e);this.traverse(a,t,n)}},{key:"traverse",value:function(e,t,n){this.visitNode(t),this.equals(t,n)&&(this.path=this.buildPath(t));for(var a=this.getNeighbors(t,e),r=0;r<a.length;r++){var i=a[r];i.isVisited||i.isWall||(i.parent=t,this.traverse(e,i,n))}}},{key:"visitNode",value:function(e){this.visitedNodesInOrder.push(e),e.isVisited=!0}},{key:"buildPath",value:function(e){for(var t=[],n=e;null!=n;)t.push(n),n=n.parent;return t.reverse(),t}},{key:"getAllNodes",value:function(e){var t,n=[],a=Object(b.a)(e);try{for(a.s();!(t=a.n()).done;){var r,i=t.value,o=[],s=Object(b.a)(i);try{for(s.s();!(r=s.n()).done;){var l=r.value;o.push(Object(O.a)({parent:null,isVisited:!1},l))}}catch(h){s.e(h)}finally{s.f()}n.push(o)}}catch(h){a.e(h)}finally{a.f()}return n}},{key:"getNeighbors",value:function(e,t){var n=[],a=e.col,r=e.row;return r>0&&n.push(t[r-1][a]),r<t.length-1&&n.push(t[r+1][a]),a>0&&n.push(t[r][a-1]),a<t[0].length-1&&n.push(t[r][a+1]),n}},{key:"equals",value:function(e,t){return e.row===t.row&&e.col===t.col}}]),n}(y),C=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){Object(s.a)(this,n);return t.call(this,"Breadth First Search","Breadth First Search (BFS) is an algorithm for traversing a graph that explores all neighbor nodes at the current level before continuing. This instance of Breadth First Search is implemented using a Queue. It guarantees the shortest path on unweighted graphs","https://www.youtube.com/watch?v=oDqjPvD54Ss")}return Object(l.a)(n,[{key:"solve",value:function(e,t,n){var a=this.getAllNodes(e),r=[];for(this.visitNode(t,r);r.length>0;){var i=r.shift();if(this.equals(i,n))return this.path=this.buildPath(i),!0;for(var o=this.getNeighbors(i,a),s=0;s<o.length;s++){var l=o[s];l.isVisited||l.isWall||(this.visitNode(l,r),l.parent=i,r.push(l))}}return!1}},{key:"visitNode",value:function(e,t){t.push(e),this.visitedNodesInOrder.push(e),e.isVisited=!0}},{key:"buildPath",value:function(e){for(var t=[],n=e;null!=n;)t.push(n),n=n.parent;return t.reverse(),t}},{key:"getAllNodes",value:function(e){var t,n=[],a=Object(b.a)(e);try{for(a.s();!(t=a.n()).done;){var r,i=t.value,o=[],s=Object(b.a)(i);try{for(s.s();!(r=s.n()).done;){var l=r.value;o.push(Object(O.a)({parent:null,isVisited:!1},l))}}catch(h){s.e(h)}finally{s.f()}n.push(o)}}catch(h){a.e(h)}finally{a.f()}return n}},{key:"getNeighbors",value:function(e,t){var n=[],a=e.col,r=e.row;return r>0&&n.push(t[r-1][a]),r<t.length-1&&n.push(t[r+1][a]),a>0&&n.push(t[r][a-1]),a<t[0].length-1&&n.push(t[r][a+1]),n}},{key:"equals",value:function(e,t){return e.row===t.row&&e.col===t.col}}]),n}(y),I=n(107),M=n(109),P=n(82),D=n(111),F=n(118),V=n(112);n(72);function B(e){for(var t=[new k,new E,new S,new A,new C],n=[],a=0;a<t.length;a++)n.push(t[a].getAlgorithmName());var i=Object(I.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})),o=r.a.useState(null),s=Object(w.a)(o,2),l=s[0],h=s[1],u=r.a.useState(0),c=Object(w.a)(u,2),d=c[0],p=c[1],f=i();return r.a.createElement("div",{className:f.root},r.a.createElement(M.a,{component:"nav","aria-label":"Device settings"},r.a.createElement(P.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){h(e.currentTarget)},variant:"contained",color:"inherited"},r.a.createElement(D.a,{primary:"Select an Algorithm",secondary:n[d]}))),r.a.createElement(F.a,{id:"lock-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:function(){h(null)}},n.map((function(n,a){return r.a.createElement(V.a,{key:n,selected:a===d,onClick:function(){return function(t,n){var a=e.handler;h(null),a(t),p(n)}(t[a],a)}},n)}))))}n(76);var W=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.col,n=e.isFinish,a=e.isStart,i=e.isWall,o=e.onMouseDown,s=e.onMouseEnter,l=e.onMouseUp,h=e.row,u=n?"node-finish":a?"node-start":i?"node-wall":"";return r.a.createElement("div",{id:"node-".concat(h,"-").concat(t),className:"node ".concat(u),onMouseDown:function(){return o(h,t)},onMouseEnter:function(){return s(h,t)},onMouseUp:function(){return l()}})}}]),n}(a.Component),T=[100,50,5],z=[20,10,1],x=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={rows:30,cols:50,grid:[],algorithm:null,mouseIsPressed:!1,currentSpeed:1},e.visualizeAlgorithm=e.visualizeAlgorithm.bind(Object(h.a)(e)),e}return Object(l.a)(n,[{key:"handleMouseDown",value:function(e,t){var n=G(this.state.grid,e,t);this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){if(this.state.mouseIsPressed){var n=G(this.state.grid,e,t);this.setState({grid:n})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateAlgorithm",value:function(e,t){for(var n=this,a=function(a){if(a===e.length-1)return setTimeout((function(){n.animateShortestPath(t)}),z[n.state.currentSpeed]*a),{v:void 0};setTimeout((function(){var t=e[a];"node node-start"!==document.getElementById("node-".concat(t.row,"-").concat(t.col)).className&&(document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited")}),z[n.state.currentSpeed]*a)},r=1;r<=e.length-1;r++){var i=a(r);if("object"===typeof i)return i.v}}},{key:"animateShortestPath",value:function(e){for(var t=this,n=function(n){setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-shortest-path"}),T[t.state.currentSpeed]*n)},a=1;a<e.length-1;a++)n(a)}},{key:"visualizeAlgorithm",value:function(){var e=this.state.grid,t=e[15][5],n=e[15][45];this.state.algorithm.solve(e,t,n);var a=this.state.algorithm.getPath(),r=this.state.algorithm.getVisitedNodesInOrder();this.animateAlgorithm(r,a)}},{key:"componentDidMount",value:function(){var e=q();this.setState({grid:e,algorithm:this.props.algorithm,currentSpeed:this.props.speed}),this.props.setClick(this.visualizeAlgorithm)}},{key:"render",value:function(){var e=this,t=this.state.mouseIsPressed;return r.a.createElement("div",{className:"grid"},this.state.grid.map((function(n,a){return r.a.createElement("div",{id:a},n.map((function(n,a){var i=n.row,o=n.col,s=n.isFinish,l=n.isStart,h=n.isWall;return r.a.createElement(W,{key:a,col:o,isFinish:s,isStart:l,isWall:h,mouseIsPressed:t,onMouseDown:function(t,n){return e.handleMouseDown(t,n)},onMouseEnter:function(t,n){return e.handleMouseEnter(t,n)},onMouseUp:function(){return e.handleMouseUp()},row:i})})))})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.speed!==t.currentSpeed?{currentSpeed:e.speed}:e.algorithm!==t.algorithm?(n.rebuildGrid(t.grid),{algorithm:e.algorithm}):null}},{key:"rebuildGrid",value:function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[0].length;n++){var a=document.getElementById("node-".concat(t,"-").concat(n)).className;"node node-start"!==a&&"node node-end"!==a&&("node node-shortest-path"!==a&&"node node-visited"!==a||(document.getElementById("node-".concat(t,"-").concat(n)).className="node"))}}}]),n}(a.Component),q=function(){for(var e=[],t=0;t<30;t++){for(var n=[],a=0;a<50;a++)n.push(U(a,t));e.push(n)}return e},U=function(e,t){return{col:e,row:t,isStart:15===t&&5===e,isFinish:15===t&&45===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},G=function(e,t,n){var a=e.slice(),r=a[t][n],i=Object(O.a)(Object(O.a)({},r),{},{isWall:!r.isWall});return a[t][n]=i,a},J=n(115),H=n(41),L=n(113),R=n(114),_=Object(I.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(0)},title:{flexGrow:1}}}));function Q(e){var t=e.children,n=e.window,a=Object(L.a)({target:n});return r.a.createElement(R.a,{appear:!1,direction:"down",in:!a},t)}function $(e){var t=_();return r.a.createElement("div",{className:t.root},r.a.createElement(Q,e,r.a.createElement(J.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(H.a,{variant:"h6",className:t.title},"Pathfinding Algorithm Visualizer")))))}var K=Object(I.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}})),X=["Slow Speed","Medium Speed","Fast Speed"];function Y(e){var t=K(),n=r.a.useState(null),a=Object(w.a)(n,2),i=a[0],o=a[1],s=r.a.useState(1),l=Object(w.a)(s,2),h=l[0],u=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(M.a,{component:"nav","aria-label":"Device settings"},r.a.createElement(P.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){o(e.currentTarget)},variant:"contained",color:"inherited"},r.a.createElement(D.a,{primary:"Change Speed",secondary:X[h]}))),r.a.createElement(F.a,{id:"lock-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:function(){o(null)}},X.map((function(t,n){return r.a.createElement(V.a,{key:t,selected:n===h,onClick:function(t){return function(t,n,a){(0,e.handler)(a),u(n),o(null)}(0,n,n)}},t)}))))}var Z=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={algorithm:new k,speed:1},e.algorithmChangeHandler=e.changeAlgorithm.bind(Object(h.a)(e)),e.speedChangeHandler=e.changeSpeed.bind(Object(h.a)(e)),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.algorithm,n=this.state.speed,a=this.state.generator;return r.a.createElement("div",{className:"app"},r.a.createElement($,{text:"Pathfinding Algorithm Visualizer"}),r.a.createElement(f,null),r.a.createElement(m.a,null,r.a.createElement(B,{handler:this.algorithmChangeHandler,variant:"contained",title:"Select an algorithm"}),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){return e.clickChild()}},"Visualize ",t.getAlgorithmName()),r.a.createElement(Y,{handler:this.speedChangeHandler,variant:"contained",title:"Change Speeds"})),r.a.createElement("div",{className:"algorithm-description"},"".concat(t.getAlgorithmDescription()," To learn more about ").concat(t.getAlgorithmName(),", click "),r.a.createElement("a",{href:t.getLink(),target:"_blank",rel:"noopener noreferrer"},"here"),"."),r.a.createElement(x,{algorithm:t,setClick:function(t){return e.clickChild=t},changeAlgorithm:this.changeAlgorithm,changeSpeed:this.changeSpeed,speed:n,generator:a}),r.a.createElement("div",{className:"BottomBox"},r.a.createElement("p",null,"This React app was created by"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/james-b-ting/",target:"_blank",rel:"noopener noreferrer"},"James Ting")," ","as a personal project to learn React and JavaScript. Check out the source code on"," ",r.a.createElement("a",{href:"https://github.com/jamesbting/Pathfinding-Algorithm-Visualizer",target:"_blank",rel:"noopener noreferrer"},"Github"),".")))}},{key:"changeAlgorithm",value:function(e){this.setState({algorithm:e})}},{key:"changeSpeed",value:function(e){this.setState({speed:e})}}]),n}(a.Component),ee=n(52);var te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ee.a,null," ",r.a.createElement("title",null,"James Ting's Pathfinding Algorithm Visualizer")),r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.0504eb21.chunk.js.map