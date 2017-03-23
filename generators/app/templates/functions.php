<?php

namespace Flynt\Components\<%= componentName %>;

use Flynt\Features\Components\Component;

add_action('wp_enqueue_scripts', function () {
  Component::enqueueAssets('<%= componentName %>');
});

add_filter('Flynt/addComponentData?name=<%= componentName %>', function ($data) {
  return $data;
});
