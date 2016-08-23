; (function () {

    angular.module('me')
        .component('landingPageComponent', {
            templateUrl: 'app/components/landing-page/landing-page.html',
            controller: LandingPageController
        })

    function LandingPageController() {
        var $ctrl = this;

        $ctrl.container = angular.element(document.getElementById('container'));
        $ctrl.trigger = angular.element(container.querySelector('button.trigger'));
        $ctrl.navbar = false; 

        $ctrl.toggleContent = function () {
            $ctrl.container.toggleClass('lpcontainer-open trigger-active')
            $ctrl.navbar = true;
        }

        function noscroll() {
            window.scrollTo(0, 0);
        }

    }

} ());