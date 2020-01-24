/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


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
  

if (document.URL!='https://mycloud.pearson.com/') {
  console.log('This is only for the myCloud Applications Page');
}
else {
  console.log('Appending Alfresco...');
  append_alfresco_node();

}



