OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Aanvraag mislukt, netwerkverbinding niet beschikbaar!",
    "Request unauthorized. Are you logged in?" : "Aanvraag niet toegestaan. Ben je ingelogd?",
    "Request forbidden. Are you an admin?" : "Aanvraag verboden. Ben je beheerder?",
    "Token expired or app not enabled! Reload the page!" : "Token verlopen of app niet ingeschakeld! Ververs de pagina!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Interne serverfout! Contrleer je data/nextcloud.log bestand voor meer informatie!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Aanvraag mislukt, Nextcloud staat momenteel in onderhoudsmodus!",
    "News" : "Nieuws",
    "An RSS/Atom feed reader" : "Een RSS/Atom kanaal lezer",
    "The News app is an RSS/Atom feed reader for Nextcloud which can be synced with many mobile devices. A list of all clients and requirements can be found [in the README](https://github.com/nextcloud/news)\n\nBefore you update to a new version, [check the changelog](https://github.com/nextcloud/news/blob/master/CHANGELOG.md) to avoid surprises.\n\n**Important**: To enable feed updates you will need to enable either [Nextcloud system cron](https://docs.nextcloud.org/server/latest/admin_manual/configuration_server/background_jobs_configuration.html#cron) or use [an updater](https://github.com/nextcloud/news-updater) which uses the built in update API and disable cron updates. More information can be found [in the README](https://github.com/nextcloud/news)." : "De Nieuws-app is een RSS / Atom-feedlezer voor Nextcloud die met veel mobiele apparaten kan worden gesynchroniseerd. Een lijst met alle clients en vereisten is te vinden [in de README] (https://github.com/nextcloud/news) \n\nVoordat je een update naar een nieuwe versie uitvoert, [bekijk het wijzigingsoverzicht] (https://github.com/nextcloud/news/blob/master/CHANGELOG.md) om verrassingen te voorkomen.\n\n** Belangrijk **: om feed-updates in te schakelen, moet je [Nextcloud-systeemcron] (https://docs.nextcloud.com/server/10/admin_manual/configuration_server/background_jobs_configuration.html#cron) inschakelen of [een updater] (https://github.com/nextcloud/news-updater) die de ingebouwde update-API gebruikt en cron-updates uitschakelt. Meer informatie is te vinden [in de README] (https://github.com/nextcloud/news).",
    "Use system cron for updates" : "Gebruik system cron voor updates",
    "Disable this if you run a custom updater such as the Python updater included in the app." : "Schakel dit uit als u een aangepaste updater uitvoert, zoals de Python-updater die in de app is opgenomen.",
    "Purge interval" : "Opruim interval",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored." : "Minimaal aantal seconden nadat verwijderde feeds en mappen uit de database zijn verwijderd; waarden onder de 60 seconden worden genegeerd.",
    "Maximum read count per feed" : "Maximaal aantal gelezen per feed",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off." : "Bepaalt het maximale aantal artikelen dat per feed kan worden gelezen en die niet worden verwijderd door de opruimtaak; als oude artikelen opnieuw verschijnen nadat ze zijn gelezen, verhoog deze waarde; negatieve waarden zoals -1 zullen deze functie uitschakelen.",
    "Maximum redirects" : "Maximum redirects",
    "How many redirects the feed fetcher should follow." : "Hoeveel omleidingen de feed-fetcher moet volgen.",
    "Feed fetcher timeout" : "Feed ophaler timeout",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted." : "Maximaal aantal seconden om te wachten tot een RSS- of Atom-feed is geladen; als het langer duurt, wordt de update afgebroken.",
    "Explore Service URL" : "Verken service URL",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty." : "Indien gegeven, zal de URL van deze service worden opgevraagd voor het weergeven van de feeds in het verkenningsgedeelte. Laat deze invoer leeg om terug te vallen op de ingebouwde verkenningsservice.",
    "For more information check the wiki." : "Kijk voor meer informatie op de wiki.",
    "Update interval" : "Update interval",
    "Interval in seconds in which the feeds will be updated." : "Interval in seconden waarin de feeds worden bijgewerkt.",
    "Saved" : "Bewaard",
    "Download" : "Downloaden",
    "Close" : "Sluiten",
    "Subscribe to" : "Abonneren op",
    "No articles available" : "Geen artikelen beschikbaar",
    "No unread articles available" : "Geen ongelezen artikelen beschikbaar",
    "Open website" : "Open website",
    "Star article" : "Markeer artikel",
    "Unstar article" : "Demarkeer artikel",
    "Keep article unread" : "Bewaar artikel als ongelezen",
    "Remove keep article unread" : "Verwijder ongelezen houden artikel",
    "by" : "door",
    "from" : "van",
    "Play audio" : "Geluid afspelen",
    "Download audio" : "Audio downloaden",
    "Download video" : "Downloaden video",
    "Keyboard shortcut" : "Sneltoets",
    "Description" : "Beschrijving",
    "right" : "rechts",
    "Jump to next article" : "Ga naar volgend artikel",
    "left" : "links",
    "Jump to previous article" : "Ga naar voorgaand artikel",
    "Toggle star article" : "Omswitchen artikelmarkering ",
    "Star article and jump to next one" : "Markeer artikel en ga naar volgende",
    "Toggle keep current article unread" : "Omswitchen hou huidig artikel ongelezen",
    "Open article in new tab" : "Open artikel in nieuwe tab",
    "Toggle expand article in compact view" : "Omswitchen uitgebreid artikel in compacte weergave",
    "Refresh" : "Vernieuwen",
    "Load next feed" : "Laad volgende feed",
    "Load previous feed" : "Laad voorgaande feed",
    "Load next folder" : "Laad volgende map",
    "Load previous folder" : "Laad voorgaande map",
    "Scroll to active navigation entry" : "Scrollen naar actieve navigatie regel",
    "Focus search field" : "Focus zoekveld",
    "Mark current article's feed/folder read" : "Markeer feed/map van huidige artikel als gelezen",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Ajax of Web cron mode gedetecteerd! Je feeds worden niet bijgewerkt!",
    "How to set up the operating system cron" : "Hoe wordt de cron-service van het operating system ingesteld",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Installeer en configureer een snellere parallel updater die gebruik maakt van de update API van de Nieuws app",
    "Subscribe" : "Abonneren",
    "Web address" : "Webadres",
    "Feed exists already!" : "Feed bestaat al!",
    "Folder" : "Map",
    "No folder" : "Geen map",
    "New folder" : "Nieuwe map",
    "Folder name" : "Mapnaam",
    "Go back" : "Terug",
    "Folder exists already!" : "Map bestaat al!",
    "Credentials" : "Inloggegevens",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP basis auth gegevens moeten ongecodeerd worden opgeslagen! Iederen die toegang heeft tot de server of database kan deze benaderen! ",
    "Username" : "Gebruikersnaam",
    "Password" : "Wachtwoord",
    "New Folder" : "Nieuwe map",
    "Create" : "Aanmaken",
    "Explore" : "Verkennen",
    "Update failed more than 50 times" : "Update mislukte meer dan 50 keer",
    "Deleted feed" : "Verwijderde feed",
    "Undo delete feed" : "Maak verwijderen feed ongedaan",
    "Rename" : "Naam wijzigen",
    "Menu" : "Menu",
    "Mark read" : "Als gelezen markeren",
    "Unpin from top" : "Bovenaan losmaken",
    "Pin to top" : "Bovenaan vastprikken",
    "Newest first" : "Nieuwste eerst",
    "Oldest first" : "Oudste eerst",
    "Default order" : "Standaard volgorde",
    "Enable full text" : "Inschakelen volledige tekst",
    "Disable full text" : "Uitschakelen volledige tekst",
    "Unread updated" : "Ongelezen bijgewerkt",
    "Ignore updated" : "Negeer bijgewerkt",
    "Open feed URL" : "Open feed URL",
    "Delete" : "Verwijderen",
    "Dismiss" : "Terzijde leggen",
    "Collapse" : "Inklappen",
    "Deleted folder" : "Verwijderde map",
    "Undo delete folder" : "Maak verwijderen map ongedaan",
    "Starred" : "Ster gegeven",
    "Unread articles" : "Ongelezen artikelen",
    "All articles" : "Alle artikelen",
    "Settings" : "Instellingen",
    "Disable mark read through scrolling" : "Niet als gelezen markeren door scrollen",
    "Compact view" : "Compact overzicht",
    "Expand articles on key navigation" : "Artikelen uitbreiden bij navigatie",
    "Show all articles" : "Toon alle artikelen",
    "Reverse ordering (oldest on top)" : "Omgekeerde volgorde (oudste boven)",
    "Subscriptions (OPML)" : "Abonnementen (OPML)",
    "Import" : "Importeer",
    "Export" : "Exporteer",
    "Error when importing: File does not contain valid OPML" : "Fout bij importeren: het bestand bevat geen geldige OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Fout bij importeren: OPML bevat geen feed noch folders. ",
    "Unread/Starred Articles" : "Ongelezen/ongemarkeerde artikelen",
    "Error when importing: file does not contain valid JSON" : "Fout tijdens het importeren: bestand bevat geen geldige JSON",
    "Help" : "Help",
    "Keyboard shortcuts" : "Sneltoetsen",
    "Documentation" : "Documentatie",
    "Report a bug" : "Rapporteer een fout",
    "Contacts" : "contacten",
    "Share on social media" : "delen op sociale media",
    "Contact name": "contactnaam",
    "shared from":"gedeeld vanaf",
    "Shared": "gedeeld",
    "Shared articles": "gedeelde artikelen",
    "users":"gebruikers"
},
"nplurals=2; plural=(n != 1);");
