angular.module('jcMedia',[]).
directive('jcMediaBox',function(){
    return {
        template:"<footer><ul><li ng-repeat = 'link in links'><span class = 'fa-stack'><i class='fa fa-circle fa-stack-2x'></i><i ng-class = 'link.class'></i></span></li></ul></footer>",
        // templateUrl:'template.html',
        restrict:"E",
        scope:{
            links:"=socialProfiles"
        },
        random:{},
        link: function(scope,element,attrs,controller){
            
        },
        controller: function($scope,$element,$attrs){
            var links = [];
            var supportedMedia = {facebook:"fa fa-facebook fa-stack-1x fa-inverse",twitter:'fa fa-twitter fa-stack-1x fa-inverse'};
            
            $scope.links.forEach(function(link){
                for(var media in link){
                    if(supportedMedia[media]){
                    var temp = {};
                    temp.href = link[media];
                    temp.class = supportedMedia[media];
                    links.push(temp);
                    }
                }
                $scope.links = links;
                //console.log(link.class);
            })
        }
    }
});