// Transcluded content is destroyed when I add a template
// But I can get it back with transclude: true
// Can include transcluded content in template with ng-transclude
// Transcluded content is compiled against normal scope
// Optional Manual tranclusion compilation in link
// transclusion(scope, function(content) {el.append(content);});
// $parse


angular.module('app', [])
  .controller('demoController', function($scope) {
    $scope.cheese = {
      name: "Creamy Feta"
    }
  })
  .directive('repeat', function() {
    return {
      // scope: {},
      transclude: true,
      link: function(scope, el, attrs, controller, transclusion) {
        var exp = attrs.repeat
        scope.$watch(exp, function(newVal, oldVal) {
          el.empty();
          for (var i = 0; i < newVal; i++) {
            var newScope = scope.$new();
            newScope.$index = i
            transclusion(newScope, function(content) {
              el.append(content);
            });
          }
        })
      }
      // template: '<p>directive template: <input ng-model="cheese.name">{{cheese.name}}</p><ng-transclude></ng-transclude>',
    }
  });





// transclusion(scope, function(content) {
//   el.append(content);
// });













// angular.module('repeater', [])
//   .directive('repeat', function($parse) {
//     return {
//       transclude:true,
//       link: function(scope, el, attrs, __, transclusion) {

//         var exp = $parse(attrs.repeat);

//         scope.$watch(exp, function() {
//           var val = $parse(exp)(scope);
//           el.empty();
//           transclusion(scope, function(content) {
//             for(var i = 0; i < val; i++) {
//               el.append(content.clone());
//             }
//           });
//         })
//       }
//     }
//   })

// angular.module('if', [])
//   .directive('if', function($parse) {
//     return {
//       transclude:true,
//       link: function(scope, el, attrs, __, transclusion) {

//         var exp = $parse(attrs.if);

//         scope.$watch(exp, function() {
//           el.empty();
//           if (exp(scope)) {
//             transclusion(scope, function(content) {
//               el.append(content);
//             });
//           }
//         });
//       }
//     }
//   })
  // link: function(scope, element, attrs, controller, transclusion) {
  //   transclusion(scope, function(content) {
  //     element.append(content);
  //   });
  // }


// Initial state
// angular.module('app', [])
//   .controller('demoController', function($scope) {
//     $scope.cheese = {
//       name: "Creamy Feta"
//     }
//   })
//   .directive('transclusionDirective', function() {
//     return {
//       // scope: {},
//       // transclude: true,
//       template: '<p>directive template: <input ng-model="cheese.name"></p>',
//     }
//   });

