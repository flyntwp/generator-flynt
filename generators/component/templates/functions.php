<?php

namespace Flynt\Components\<%= nameUpperCamelCase %>;

use Flynt\Utils\Options;

add_filter('Flynt/addComponentData?name=<%= nameUpperCamelCase %>', function ($data) {
    return $data;
});

function getACFLayout()
{
    return [
        'name' => 'GridCards',
        'label' => 'Grid: Cards',
        'sub_fields' => [

        ]
    ];
}

Options::addTranslatable('<%= nameUpperCamelCase %>', [

]);

Options::addGlobal('<%= nameUpperCamelCase %>', [

]);
