var linksInDocument = document.links;
var linksToFiles = new Array();


for(var i=0;i<linksInDocument.length;i++) {
  var currentLink = linksInDocument[i];
  if(currentLink.href.slice(-4,)==".pdf"){
    linksToFiles.push(currentLink.href);    
  }    
}

for(var i=0;i<linksToFiles.length;i++){
  console.log(linksToFiles[i]);
}

// let path_to_putput = 

var file = new File(linksToFiles,`${path_to_output}`);
console.log("Done");
