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
            'title' => 'test feed',
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
                ['title' => 'article 1', 'unread' => true, 'sharedBy' => 'marco', 'sharedWith' => 'test']
            ]
        ],
        [
            'title' => 'aurélien feed',
            'userId' => 'aurélien',
            'items' => [
                ['title' => 'article 10', 'unread' => true],
                ['title' => 'article 11', 'unread' => true],
                ['title' => 'article 10', 'unread' => true, 'sharedBy' => 'aurélien', 'sharedWith' => 'marco']
            ]
        ],
        [
            'title' => 'nicolas feed',
            'userId' => 'nicolas',
            'items' => [
                ['title' => 'article 100', 'unread' => true],
                ['title' => 'article 200', 'unread' => true]
            ]
        ],
        [
            'title' => 'jimmy feed',
            'userId' => 'jimmy',
            'items' => [
                ['title' => 'article 300', 'unread' => true],
                ['title' => 'article 400', 'unread' => true]
            ]
        ]
    ]
];
