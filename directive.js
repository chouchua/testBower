angular.module('testDirective',[]).
directive('jcMediaBox',function(){
    return {
        template:"<footer><ul ng-repeat = 'link in links'><li><i ng-class = 'link.class'>{{link}}</i></li></ul></footer>",
        //templateUrl:'template.html',
        restrict:"E",
        scope:{
            links:"=socialProfiles"
        },
        random:{},
        link: function(scope,element,attrs,controller){
            
        },
        controller: function($scope,$element,$attrs){
            console.log($scope.links);
            var links = [];
            var supportedMedia = {facebook:"fa fa-facebook",twitter:'fa fa-twitter'};
            
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
        //controller:"",
        //controllerAs:""
    }
});