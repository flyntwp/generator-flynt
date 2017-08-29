<?php

namespace Flynt\Components\<%= nameUpperCamelCase %>;

use Flynt\Features\Components\Component;

add_action('wp_enqueue_scripts', function () {
    Component::enqueueAssets('<%= nameUpperCamelCase %>', []);
});

add_filter('Flynt/addComponentData?name=<%= nameUpperCamelCase %>', function ($data) {

    return $data;
});
