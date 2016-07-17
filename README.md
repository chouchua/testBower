
This module exposes an extensible social media directive.

Put 'jcMediaBox' as an dependency of your application. 
Eg. angular.module('yourApp',['jcMediaBox']);

Declare a social media hash object where you would like to use this directive.
For example: 
If you want to link your facebook and twitter account, feed the following object to the directive:
{
    facebook:"",
    twitter:""
}

```html 
<div ng-app = "jcMedia">
    <div ng-init = "social = [{facebook:'yourFacebookUrl'},{twitter:'yourTwitterUrl'}]">
        <jc-media-box social-profiles = 'social' ></jc-media-box>
    </div>
</div>
```

For more details, please check out the test.html to see how to use this directive.

##To install:
bower install jc-media-box

Requirements:
- angularJS
- font-awesome
