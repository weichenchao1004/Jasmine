/**
 * Created by chenchaowei on 4/24/15.
 */
describe('suite of tests for hello world', function () {
    describe('another suite', function () {
        var controller;

        beforeEach(module('myApp.helloworld'));
        beforeEach(inject(function ($controller) {

            var $scope = {};
            controller = $controller('HelloWorldController', { $scope: $scope });
        }));

        it('should have a message of Hello World!', function () {
            expect(controller.message).toBe('Hello World!');
        });

        it('should have a data property equal to empty!', function () {
            expect(controller.data).toBe('empty');
        });
    });
});