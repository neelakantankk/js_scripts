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

var file = new File(linksToFiles,"/c/Users/k999neel/Documents/Trial.txt");
console.log("Done");