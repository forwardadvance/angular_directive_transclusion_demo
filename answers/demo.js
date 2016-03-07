angular.module('app', ['repeater', 'if'])


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

angular.module('if', [])
  .directive('if', function($parse) {
    return {
      transclude:true,
      link: function(scope, el, attrs, __, transclusion) {

        var exp = $parse(attrs.if);

        scope.$watch(exp, function(val) {
          el.empty();
          if (val) {
            transclusion(scope, function(content) {
              el.append(content);
            });
          }
        });
      }
    }
  });
