console.println('');
// Regular expression to get base filename
var re = /\.pdf$/i;
// filename is the base name of the file Acrobat is working on
//I'd recommend Prefixing files with your initials to keep things clear
var temp_doc = app.newDoc();
var sourcePath = event.target.path;
console.println('Path: ' + sourcePath);
var destPath = event.target.path.split('/');
destPath.pop();
destPath.push('result');
var destName = event.target.documentFileName.replace(re,"_Annots.pdf");
destPath.push(destName);
destPath = destPath.join('/');
//Change this basePath to where you want to save the file. Device independent path required; 
//var basePath = "/c/users/<yourUsername>/<Path_to_Folder>";
for(var i=0;i<this.numPages;i++) {
    if(this.getAnnots({nPage:i})) {
        console.println(i+1);
        try { 
            temp_doc.insertPages({
                                cPath:sourcePath,
                                nStart: i,
                               });
        } catch (e) { console.println('Aborted: ' + e); }
    }
}

temp_doc.saveAs(destPath);
temp_doc.deletePages({nStart:0});
temp_doc.closeDoc();

