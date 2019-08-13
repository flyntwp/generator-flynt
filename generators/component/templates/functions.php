<?php

namespace Flynt\Components\<%= nameUpperCamelCase %>;

use Flynt;
use Flynt\Api;
use Flynt\Utils\Options;

add_filter('Flynt/addComponentData?name=<%= nameUpperCamelCase %>', function ($data) {
    return $data;
});

// Api::registerFields('<%= nameUpperCamelCase %>', [
//     'layout' => [
//         'name' => '<%= nameLowerCamelCase %>',
//         'label' => '<%= namePrettySplit %>',
//         'sub_fields' => [
            
//         ]
//     ]
// ]);

// Options::addTranslatable('<%= nameUpperCamelCase %>', [
    
// ]);

// Options::addGlobal('<%= nameUpperCamelCase %>', [
    
// ]);
