OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Запрос не удался, нет сетевого соединения!",
    "Request unauthorized. Are you logged in?" : "Запрос не авторизован. Вы вошли в систему?",
    "Request forbidden. Are you an admin?" : "Запрос запрещён. Вы действительно являетесь администратором?",
    "Token expired or app not enabled! Reload the page!" : "Срок действия токена истёк или приложение не включено! Перезагрузите страницу!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Внутренняя ошибка сервера! Пожалуйста, для получения дополнительной информации проверьте журнал в файле data/nextcloud.log!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Запрос не удался, в настоящий момент Nextcloud включен в режиме обслуживания!",
    "News" : "Новости",
    "An RSS/Atom feed reader" : "Читалка RSS / Atom",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "Приложение News для Nextcloud предназначено для чтения лент в формате RSS / Atom. Данный формат может быть  синхронизирован с  мобильными устройствами. Список всех клиентов и требований можно найти [в README] (https://github.com/nextcloud/news)\n\nПеред тем, как перейти на новую версию, [проверьте журнал изменений] (https://github.com/nextcloud/news/blob/master/CHANGELOG.md), чтобы избежать сюрпризов.\n\n** Важно **: для включения обновлений фидов вам необходимо включить либо [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron), либо использовать [updater](https://github.com/nextcloud/news-updater), который использует встроенный API обновлений и отключает обновления cron. Более подробную информацию можно найти в README (https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Для получения обновлений используйте системный cron",
    "Disable this if you run a custom updater such as the Python updater included in the app." : "Отключите, если вы используете другой механизм обновлений, например, Python updater, который уже встроен в приложение.",
    "Purge interval" : "Интервал очистки",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored." : "Минимальное количество секунд, после которого удалённые ленты и папки будут убраны из базы данных; значения меньше 60 секунд игнорируются.",
    "Maximum read count per feed" : "Максимальное количество статей для ленты",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off." : "Максимальное количество прочитанных статей для каждой ленты, которые не будут удалены при очистке; если старые статьи появляются снова после прочтения, то увеличьте это значение; отрицательные значения, например, -1, полностью отключают эту функцию.",
    "Maximum redirects" : "Максимум перенаправлений",
    "How many redirects the feed fetcher should follow." : "Сколько перенаправлений должен обрабатывать загрузчик лент.",
    "Feed fetcher timeout" : "Время ожидания для загрузчика ленты",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted." : "Максимальное количество секунд ожидания загрузки ленты RSS или Atom; если обновление занимает больше времени, то оно будет отменено",
    "Explore Service URL" : "URL службы обзора",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty." : "Указанный URL будет опрашиваться для отображения лент в секции Обзор. Для использования встроенного сервиса, оставьте поле ввода пустым.",
    "For more information check the wiki." : "Для получения дополнительной информации обратитесь к wiki",
    "Update interval" : "Интервал обновления",
    "Interval in seconds in which the feeds will be updated." : "Интервал обновления лент в секундах",
    "Saved" : "Сохранено",
    "Download" : "Скачать",
    "Close" : "Закрыть",
    "Subscribe to" : "Подписаться",
    "No articles available" : "Нет доступных статей",
    "No unread articles available" : "Нет непрочтённых статей",
    "Open website" : "Открыть веб-сайт",
    "Star article" : "Добавить в избранное",
    "Unstar article" : "Убрать из избранного",
    "Keep article unread" : "Оставить статью непрочитанной",
    "Remove keep article unread" : "Удалить отметку от непрочтении",
    "by" : "автор",
    "from" : "из",
    "Play audio" : "Проиграть аудио-запись",
    "Download audio" : "Скачать аудио-запись",
    "Download video" : "Скачать видео",
    "Keyboard shortcut" : "Горячие клавиши",
    "Description" : "Описание",
    "right" : "направо",
    "Jump to next article" : "Перейти на следующую статью",
    "left" : "налево",
    "Jump to previous article" : "Перейти на предыдущую статью",
    "Toggle star article" : "Добавить/убрать из избранного",
    "Star article and jump to next one" : "Добавить статью в избранное и перейти к следующей",
    "Toggle keep current article unread" : "Переключатель пометки текущей статьи непрочитанной",
    "Open article in new tab" : "Открыть статью в новой вкладке",
    "Toggle expand article in compact view" : "Открывать статью при просмотре в компактном режиме",
    "Refresh" : "Обновить",
    "Load next feed" : "Загрузить следующую ленту",
    "Load previous feed" : "Загрузить предыдущую ленту",
    "Load next folder" : "Загрузить следующую папку",
    "Load previous folder" : "Загрузить предыдущую папку",
    "Scroll to active navigation entry" : "Прокрутить к выбранному элементу",
    "Focus search field" : "Перейти на поле поиска",
    "Mark current article's feed/folder read" : "Пометить папку текущей статьи как прочитанную",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Обнаружен режим планировщика задач Ajax или webcron! Ленты не будут обновляться!",
    "How to set up the operating system cron" : "Как настроить cron (планировщик задач) операционной системы",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Установить и настроить более быстрое средство параллельного обновления, которое использует собственный API обновлений приложения новостей",
    "Subscribe" : "Подписаться",
    "Web address" : "Веб адрес",
    "Feed exists already!" : "Лента уже существует!",
    "Folder" : "Папка",
    "No folder" : "Нет папки",
    "New folder" : "Новая папка",
    "Folder name" : "Имя папки",
    "Go back" : "Вернуться назад",
    "Folder exists already!" : "Папка уже существует!",
    "Credentials" : "Учётные данные",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "Аутентификационные данные HTTP Basic придётся сохранить в незашифрованном виде! Каждый, у кого есть доступ внутрь сервера или в базу данных, сможет прочитать их!",
    "Username" : "Имя пользователя",
    "Password" : "Пароль",
    "New Folder" : "Новая папка",
    "Create" : "Создать",
    "Explore" : "Обзор",
    "Update failed more than 50 times" : "Не удалось выполнить обновление более 50 раз",
    "Deleted feed" : "Удалённая лента",
    "Undo delete feed" : "Отменить удаление ленты",
    "Rename" : "Переименовать",
    "Menu" : "Меню",
    "Mark read" : "Пометить прочтённым",
    "Unpin from top" : "Открепить сверу",
    "Pin to top" : "Прикрепить вверху",
    "Newest first" : "Новые-старые",
    "Oldest first" : "Старые-новые",
    "Default order" : "Порядок по умолчанию",
    "Enable full text" : "Включить полный текст",
    "Disable full text" : "Отключить полный текст",
    "Unread updated" : "Непрочитанное обновлено",
    "Ignore updated" : "Игнорировать обновлённые",
    "Open feed URL" : "Открыть URL ленты",
    "Delete" : "Удалить",
    "Dismiss" : "Убрать",
    "Collapse" : "Свернуть",
    "Deleted folder" : "Удаленная папка",
    "Undo delete folder" : "Отменить удаление папки",
    "Starred" : "Избранное",
    "Unread articles" : "Непрочтённые статьи",
    "All articles" : "Все статьи",
    "Settings" : "Настройки",
    "Disable mark read through scrolling" : "Отключить установку отметок о прочтении при прокрутке",
    "Compact view" : "Компактный вид",
    "Expand articles on key navigation" : "Раскрывать статьи при навигации клавишами",
    "Show all articles" : "Показать все статьи",
    "Reverse ordering (oldest on top)" : "Обратный порядок (самые старые сверху)",
    "Subscriptions (OPML)" : "Подписки (OPML)",
    "Import" : "Импорт",
    "Export" : "Экспорт",
    "Error when importing: File does not contain valid OPML" : "Ошибка импорта: В файле не найден корректный OPML ",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Ошибка при импорте: в OPML нет ни лент, ни папок",
    "Unread/Starred Articles" : "Непрочтенные/Избранные статьи",
    "Error when importing: file does not contain valid JSON" : "Ошибка при импорте: файл не содержит правильный JSON",
    "Help" : "Помощь",
    "Keyboard shortcuts" : "Горячие клавиши",
    "Documentation" : "Документация",
    "Report a bug" : "Сообщить об ошибке",
    "Contacts" : "контакты",
    "Share on social media" : "поделиться в социальных сетях",
    "Contact name": "Контактное лицо",
    "shared from":"поделился от",
    "Shared": "общий",
    "Shared articles": "общие статьи",
    "users":"пользователи"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
