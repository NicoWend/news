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
        ]
    ]
];
