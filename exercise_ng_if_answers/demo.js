angular.module('app', ['if'])


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
