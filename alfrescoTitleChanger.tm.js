// ==UserScript==
// @name         Change Alfresco's tab title
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes the Alfresco title to make it easier to see what you're visiting
// @author       Neelakantan
// @match        https://uswip.cms.pearson.com/*
// @grant        none
// ==/UserScript==

  'use strict';


document.addEventListener("load", runOnLoad,true);
function runOnLoad(e) {
  var pageTitle = document.querySelector("title").textContent;
  var re = /» (.*?$)/;
  if (re.exec(pageTitle)[1]==="Document Library" || re.exec(pageTitle)[1]==="Site Dashboard") {
    var siteTitle = document.querySelector(".alfresco-header-Title").textContent.trim();
    document.title = siteTitle + " » " + re.exec(pageTitle)[1] + " Alfresco";
  }
  else if (re.exec(pageTitle)[1]==="Document Details" || re.exec(pageTitle)[1]==="Folder Details"){
  	var docTitle = document.querySelector('h1.thin.dark').childNodes[0].textContent.trim();
    if (docTitle.lastIndexOf(".")!=-1){
    	docTitle = docTitle.slice(0,docTitle.lastIndexOf(".")-docTitle.length);
    }
    document.title = docTitle + " » " + re.exec(pageTitle)[1] + " Alfresco" ;
  }
}
console.log("Grease Monkey!");
