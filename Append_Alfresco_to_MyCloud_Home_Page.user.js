// ==UserScript==
// @name     Append Alfresco to MyCloud Home Page
// @description This Appends an Alfresco logo and link instead of the Google Groups MyCloud
// @version  1
// @grant    none
// @include https://mycloud.pearson.com/
// ==/UserScript==

function create_alfresco_node() {
  var alfresco_icon_container = document.querySelector('.icon-outer-container').cloneNode(true);
  alfresco_icon_container.children[0].href = 'https://uswip.cms.pearson.com';

  alfresco_icon_container.children[0].children[0].setAttribute('data-bind','');
  var alfresco_image_link = 'https://www.sugaroutfitters.com/assets/img/addons/alfresco/logo.png?1487135065';
  alfresco_icon_container.children[0].children[0].setAttribute('src',alfresco_image_link);
  alfresco_icon_container.children[0].children[0].setAttribute('alt','Alfresco');

  alfresco_icon_container.children[0].children[1].innerText = 'Alfresco';
  alfresco_icon_container.children[0].children[1].innerHTML = 'Alfresco';
  
  return alfresco_icon_container;
}

function append_alfresco_node() {
  var fourth_node_first_row = document.querySelector('.icon-outer-container:nth-of-type(4)');
    
  var alfresco_node = create_alfresco_node();
  
  fourth_node_first_row.parentNode.insertBefore(alfresco_node,fourth_node_first_row);
  
}
  
function runOnLoad() {
  
  console.log('Running script ' + GM.info.script.name + '\nGrease Monkey!');
  if (document.URL!='https://mycloud.pearson.com/') {
    console.log('This is only for the myCloud Applications Page');
  }
  else {
    console.log('Appending Alfresco...');
    append_alfresco_node();
  }
}

var load_options = {
  capture:true,
  once:true,
};

document.addEventListener('load',runOnLoad,load_options);