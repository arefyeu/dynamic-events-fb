// Click button event
<button id="Button’s ID"> Text on the button </button>
<script>
var button = document.getElementById('Button’s ID');
  button.addEventListener(
    'click',
    function() {
      fbq('track', 'Event’s name');          
    },
    false
  );
</script>


// Visible element event
<div id="Element’s ID"></div>
<script>
      var executeWhenElementIsVisible = function(dom_element, callback) {
        if (!(dom_element instanceof HTMLElement)) {
          console.error('dom_element must be a valid HTMLElement');
        }
        if (typeof callback !== 'function') {
          console.error(
            'Second parameter must be a function, got',
            typeof callback,
            'instead',
          );
        }
        function isOnViewport(elem) {
          var rect = elem.getBoundingClientRect();
          var docElem = document.documentElement;
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || docElem.clientHeight) &&
            rect.right <= (window.innerWidth || docElem.clientWidth)
          );
        }
        var executeCallback = (function() {
          var wasExecuted = false;
          return function() {
            if (!wasExecuted && isOnViewport(dom_element)) {
              wasExecuted = true;
              callback();
            }
          };
        })();
        window.addEventListener('scroll', executeCallback, false);
      };
     
var element = document.getElementById('Element’s ID');
      executeWhenElementIsVisible(element, function() {
        fbq('track', 'Event’s name');
      });
</script>