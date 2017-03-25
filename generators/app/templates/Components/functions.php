<?php

namespace Flynt\Components\<%= elementName %>;

use Flynt\Features\Components\Component;

add_action('wp_enqueue_scripts', function () {
  Component::enqueueAssets('<%= elementName %>');
});

add_filter('Flynt/addComponentData?name=<%= elementName %>', function ($data) {
  

  return $data;
});
