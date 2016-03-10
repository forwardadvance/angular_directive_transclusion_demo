angular.module('app', ['repeater'])


angular.module('repeater', [])
  .directive('repeat', function($parse) {
    return {
      transclude:true,
      link: function(scope, el, attrs, __, transclusion) {
        scope.$watch(attrs.repeat, function(val) {
          el.empty();
          for(var i = 0; i < val; i++) {
            transclusion(scope, function(content) {
              el.append(content);
            });
          };
        })
      }
    }
  })
