function draw_geneology(data,contractObj){

    var treeData = data

//     var treeData =
//   {
//     "name": "Top Level",
//     "children": [
//       { 
//         "name": "Level 2: A",
//         "children": [
//           { "name": "Son of A" },
//           { "name": "Daughter of A" }
//         ]
//       },
//       { "name": "Level 2: B" }
//     ]
//   };

// Set the dimensions and margins of the diagram

var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 1960 - margin.left - margin.right,
    height = 1500 - margin.top - margin.bottom;

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#network_svg").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 600 400")
   //class to make it responsive
   .classed("svg-content-responsive", true);
   

var i = 0,
    duration = 750,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
//root.children.forEach(collapse);

update(root);

function expand(d){   
    var children = (d.children)?d.children:d._children;
    if (d._children) {        
        d.children = d._children;
        d._children = null;       
    }
    if(children)
      children.forEach(expand);
}

function expandAll(){
    expand(root); 
    update(root);
}

function collapseAll(){
    root.children.forEach(collapse);
    collapse(root);
    update(root);
}

function update(source) {

  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function(d){ d.y = d.depth * 1800});

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      });

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -30 : 30;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) { 
        return "translate(" + d.y + "," + d.x + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 10)
    .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
    })
    .attr('cursor', 'pointer');


  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

    return path
  }

  // Toggle children on click.
  function click(d) {
    // var b = contractObj.getUserReferrals(d.data.name,
    //     function(error,result){
    //      if(!error){   
    //         var new_children = result.map(item =>{
    //           return{
    //             "name":item,
    //             "children" :[]
    //           }
    //         })

            
        
    //        console.log(result)
    //         console.log(new_children)
            

     
   
            var get_childrens = function(){
                contractObj.getUserReferrals(d.data.address,function(error,ref){if(!error){
                    var new_children = []
                    ref.forEach(e => {
                        contractObj.users(e,function(error,usr){if(!error){
                            contractObj.getUserLevel(e,function(error,lvl){if(!error){
                                new_children.push({
                                    "name": "Level: "+lvl+" ID: "+usr[0] ,
                                    "address":e,
                                    "children":[]
                                })
                                
                                
                            }})
                        }})
                    })
                    
                    //console.log(new_children)
                }})
            }
            //get_childrens()

            var n1 = [
              {"name": "test1"},
              {"name":"test2" }
            ]


          function searchTree(element, matchingTitle){
                if(element.address == matchingTitle){
                    if(element.children.length == 0){
                      element.children.push(n1)
                    } 
                    return element;
                }else if (element.children != null){
                     var i;
                     var result = null;
                     for(i=0; result == null && i < element.children.length; i++){
                          result = searchTree(element.children[i], matchingTitle);
                     }
                     return result;
                }
                return null;
          }

          function searchHierachy(element, matchingTitle){
            if(element.address == matchingTitle){
                return element;
            }else if (element.children != null){
                 var i;
                 var result = null;
                 for(i=0; result == null && i < element.children.length; i++){
                      result = searchTree(element.children[i], matchingTitle);
                 }
                 return result;
            }
            return null;
       }


       

           var added_graph = searchTree(data, d.data.address);
           var new_tree = d3.hierarchy(added_graph)

      //      console.log(data)
      //      console.log(new_tree)
            var n2 = searchHierachy(new_tree.data,d.data.address).children

         
           

            console.log(n2)
            //d.data.children.push(n1)
           // d.children = n1


           d._children = n2

           
            // d._children.forEach(function(childNode) {
            //     var associatedItems = n2;
            //     childNode._children = associatedItems;
            // });
        
           console.log(d)

            if (d.children) {
                d._children = d.children;
                d.children = null;
              } else {
                d.children = d._children;
                d._children = null;
              }

             //console.log(d)
              
            update(d);

          
        }
   // })
       
   
    


   
  //}
}
}