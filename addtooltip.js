/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var icon = document.querySelector('.icon-outer-container:nth-of-type(4)');

icon.addEventListener('mouseover',function() {
  
  if(this.children.length > 1) {
    console.log('This is the real life!')
    return;
  }

  var tooltip_container = document.createElement('div');
  tooltip_container.setAttribute('class', 'tooltip app-description fade bottom in');
  tooltip_container.id='Alfresco-tooltip';

  var tooltip_arrow = document.createElement('div');
  tooltip_arrow.setAttribute('class','tooltip-arrow');

  var tooltip_inner = document.createElement('div');
  tooltip_inner.class = 'tooltip-inner';

  var app_title = document.createElement('span');
  app_title.setAttribute('class', 'app-title');
  app_title.appendChild(document.createTextNode('Alfresco'));

  var helpText = 'Content Management System that is generally all right but whose CMIS is not configured well at all.';
  var helptextNode = document.createTextNode(helpText);

  tooltip_inner.appendChild(app_title);
  tooltip_inner.appendChild(document.createElement('br'));
  tooltip_inner.appendChild(helptextNode);

  tooltip_container.appendChild(tooltip_arrow);
  tooltip_container.appendChild(tooltip_inner);
  
  this.appendChild(tooltip_container);

});
