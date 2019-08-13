<?php

namespace Flynt\Components\<%= nameUpperCamelCase %>;

use Flynt\Api;
use Flynt\Utils\Options;

add_filter('Flynt/addComponentData?name=<%= nameUpperCamelCase %>', function ($data) {
    return $data;
});

Api::registerFields('<%= nameUpperCamelCase %>', [
    'layout' => [
        'name' => '<%= nameLowerCamelCase %>',
        'label' => '<%= namePrettySplit %>',
        'sub_fields' => [
            [
                'label' => 'General',
                'name' => 'generalTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0,
            ],
            [
                'label' => 'Options',
                'name' => 'optionsTab',
                'type' => 'tab',
                'placement' => 'top',
                'endpoint' => 0,
            ],
            [
                'label' => '',
                'name' => 'options',
                'type' => 'group',
                'layout' => 'row',
                'sub_fields' => [
                    Api::loadFields('FieldVariables', 'theme'),
                ],
            ],
        ],
    ],
]);

Options::addTranslatable('<%= nameUpperCamelCase %>', [
    
]);

Options::addGlobal('<%= nameUpperCamelCase %>', [
    
]);
