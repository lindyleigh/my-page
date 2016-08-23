; (function () {

    angular.module('me')
        .component('projectsComponent', {
            templateUrl: 'app/components/projects/projects.html',
            controller: ProjectsController
        })

    function ProjectsController() {
        var $ctrl = this;

    }

} ());