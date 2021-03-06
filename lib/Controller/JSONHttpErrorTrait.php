<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author    Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2014
 */

namespace OCA\News\Controller;

use \OCP\AppFramework\Http\JSONResponse;

trait JSONHttpErrorTrait
{
    /**
     * @param \Exception $exception The exception to report
     * @param int        $code      The http error code
     * @return JSONResponse
     */
    public function error(\Exception $exception, int $code)
    {
        return new JSONResponse(['message' => $exception->getMessage()], $code);
    }
}
