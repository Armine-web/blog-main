// homework
// createElement(element, attributes, children);
// render(element, target);

window.UI = {
    createElement: function (element, attributes, children) {
      const elem = document.createElement(element);  
        Object.keys(attributes).forEach(key => {
        elem.setAttribute(key, attributes[key]);
        });

      
      if (Array.isArray(children)) {
        children.forEach(child => {
          if (typeof child === 'string') {
            elem.appendChild(document.createTextNode(child));
          } else {
            elem.appendChild(child);
          }
        });
      } else if (typeof children === 'string') {
        elem.appendChild(document.createTextNode(children));
      }
      
      return elem;
    },

    render: function (element, target) {
      target.appendChild(element);
    }
  };


