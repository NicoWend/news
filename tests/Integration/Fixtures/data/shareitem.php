<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author    Aurélien David
 * @author    Marco Nassabain <marco.nassabain@hotmail.com>
 */

return [
    'feeds' => [
        [
            'title' => 'aurélien feed',
            'userId' => 'test',
            'items' => [
                ['title' => 'article 1', 'unread' => true],
                ['title' => 'article 2', 'unread' => true],
                ['title' => 'article 2', 'sharedBy' => 'test', 'sharedWith' => 'aurélien']
            ]
        ],
        [
            'title' => 'marco feed',
            'userId' => 'marco',
            'items' => [
                ['title' => 'article 1', 'unread' => true],
                ['title' => 'article 2', 'unread' => true],
                ['title' => 'article 3', 'unread' => true],
                ['title' => 'article 4', 'unread' => true],
                ['title' => 'article 1', 'unread' => true, 'sharedBy' => 'marco', 'sharedWith' => 'test'],
                
            ]
        ],
        [
            'title' => 'marco feed',
            'userId' => 'aurélien',
            'items' => [
                ['title' => 'article 10', 'unread' => true],
                ['title' => 'article 11', 'unread' => true],
                ['title' => 'article 10', 'unread' => true, 'sharedBy' => 'aurélien', 'sharedWith' => 'marco'],
            ]
        ],
        [
            'title' => 'nicolas feed',
            'userId' => 'nicolas',
            'items' => [
                ['title' => 'article 100', 'unread' => true]
            ]
        ]
    ]
];
