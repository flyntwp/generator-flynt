<?php

namespace Flynt\Components\<%= name %>;

use Flynt\Features\Components\Component;

add_action('wp_enqueue_scripts', function () {
    Component::enqueueAssets('<%= name %>', []);
});

add_filter('Flynt/addComponentData?name=<%= name %>', function ($data) {

    return $data;
});
