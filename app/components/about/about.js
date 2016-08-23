; (function () {

    angular.module('me')
        .component('aboutComponent', {
            templateUrl: 'app/components/about/about.html',
            controller: AboutController
        })

    function AboutController() {
        var $ctrl = this;
            
        var s = skrollr.init();
        

        $ctrl.s.refresh($('.homeSlide'));

    }

} ());