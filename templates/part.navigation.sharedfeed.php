<li ng-class="{
        active: Navigation.isShared(),
        unread: Navigation.isSharedUnread()
    }"
    class="with-counter starred-feed">

    <a class="icon-shared" ng-href="#/items/shared/">
       <?php p($l->t('Shared')) ?>
    </a>

    <div class="app-navigation-entry-utils">
        <ul>
            <li class="app-navigation-entry-utils-counter"
                ng-show="Navigation.isStarredUnread()"
                title="{{ Navigation.getStarredCount() }}">
                {{ Navigation.getStarredCount() | unreadCountFormatter }}
            </li>
        </ul>
    </div>
</li>