

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%curr% of %total%": "%curr% van %total%",
    "(current notification)": "(huidige melding)",
    "(current version)": "(huidige versie)",
    "1 Year": "1 jaar",
    "1 month ago": "1 maand geleden",
    "1 week ago": "1 week geleden",
    "3 days ago": "3 dagen geleden",
    "30 Days": "30 dagen",
    "7 Days": "7 dagen",
    "A file with the same name already exists in this folder.": "Een bestand met deze naam bestaat reeds in deze map.",
    "About": "Over",
    "About Us": "Over ons",
    "Accept": "Accepteren",
    "Accepted": "Geaccepteerd",
    "Accepter": "Geaccepteerd door",
    "Access Log": "Toegangslogboek",
    "Action": "Actie",
    "Actions": "Acties",
    "Activated": "Geactiveerd",
    "Activated Users": "Geactiveerde gebruikers",
    "Active": "Actief",
    "Active Users": "Actieve gebruikers",
    "Activities": "Activiteiten",
    "Add": "Toevoegen",
    "Add Admins": "Admins toevoegen",
    "Add Library": "Voeg bibliotheek toe",
    "Add Member": "Lid toevoegen",
    "Add Terms and Conditions": "Voorwaarden toevoegen",
    "Add User": "Gebruiker toevoegen",
    "Add admin": "Voeg beheerder toe",
    "Add auto expiration": "Voeg automatische vervaldatum toe",
    "Add institution": "Organisatie toevoegen",
    "Add new notification": "Voeg melding toe",
    "Add password protection": "Wachtwoord beveiliging toevoegen",
    "Add user": "Voeg nieuwe gebruiker toe",
    "Added": "Toegevoegd",
    "Added user {user}": "Gebruiker {user} toegevoegd",
    "Admin": "Admin",
    "Admins": "Admins",
    "All": "Alle",
    "All Groups": "Alle groepen",
    "All Notifications": "Alle meldingen",
    "All Public Links": "Alle Openbare Linken",
    "All file types": "All bestandstypen",
    "An integer that is greater than or equal to 0.": "Een getal dat groter is dan of gelijk is aan 0.",
    "Anonymous User": "Anonieme gebruiker",
    "Are you sure you want to clear trash?": "Weet je zeker dat je de prullenbak wilt legen?",
    "Are you sure you want to delete %s ?": "Weet je zeker dat je %s wilt verwijderen?",
    "Are you sure you want to restore this library?": "Weet je zeker dat je deze bibliotheek wil terughalen?",
    "Are you sure you want to unlink this device?": "Weet je zeker dat je dit apparaat wilt ontkoppelen?",
    "Audio": "Audio",
    "Avatar": "Avatar",
    "Avatar:": "Avatar:",
    "Back": "Terug",
    "Broken (please contact your administrator to fix this library)": "Defect (neem contact op met je systeembeheerder om deze bibliotheek te repareren)",
    "Can not copy directory %(src)s to its subdirectory %(des)s": "Kan map %(src)s niet kopi\u00ebren naar haar onderliggende map %(des)s",
    "Can not move directory %(src)s to its subdirectory %(des)s": "Kan map %(src)s niet verplaatsen naar haar onderliggende map %(des)s",
    "Cancel": "Annuleren",
    "Cancel All": "Alles annuleren",
    "Change": "Wijzig",
    "Change Password": "Wijzig het wachtwoord",
    "Change Password of Library {placeholder}": "Wijzig wachtwoord van bibliotheek {placeholder}",
    "Clean": "Opschonen",
    "Clear": "Wissen",
    "Clear Trash": "Prullenbak legen",
    "Clear files in trash and history\uff1a": "Schoon bestanden in prullenbak en geschiedenis:",
    "Clients": "Clients",
    "Close": "Sluiten",
    "Close (Esc)": "Sluiten (Esc)",
    "Comment": "Opmerking",
    "Comments": "Opmerkingen",
    "Community Edition": "Community editie",
    "Confirm Password": "Bevestig Wachtwoord",
    "Contact Email": "Contact e-mail",
    "Contact Email:": "Contact e-mail:",
    "Copy": "Kopi\u00ebren ",
    "Copy selected item(s) to:": "Geselecteerde item(s) kopi\u00ebren naar:",
    "Count": "Teller",
    "Create At / Last Login": "Gemaakt op / Laatste login",
    "Create Group": "Groep aanmaken",
    "Create Library": "Bibliotheek aanmaken",
    "Created": "Aangemaakt",
    "Created At": "Gemaakt om",
    "Created library": "Bibliotheek aangemaakt",
    "Creator": "Maker",
    "Current Connected Devices": "Huidige verbonden apparaten",
    "Current Library": "Huidige bibliotheek",
    "Current Path: ": "Huidig pad:",
    "Current Version": "Huidige versie",
    "Current path: ": "Huidig pad:",
    "Custom CSS": "Aangepaste CSS",
    "Custom file types": "Speciale bestandstypes",
    "Database": "Database",
    "Date": "Datum",
    "Default": "Standaard",
    "Delete": "Verwijderen",
    "Delete Account": "Account verwijderen",
    "Delete Group": "Groep verwijderen",
    "Delete Institution": "Organisatie verwijderen",
    "Delete Library": "Bibliotheek verwijderen",
    "Delete Member": "Lid verwijderen",
    "Delete Notification": "Melding verwijderen",
    "Delete Organization": "Verwijder Organisatie",
    "Delete Time": "Tijdstip verwijderen",
    "Delete User": "Gebruiker verwijderen",
    "Delete files from this device the next time it comes online.": "Verwijder bestanden van dit apparaat op het moment dat deze weer online komt.",
    "Deleted": "Verwijderd",
    "Deleted Time": "Tijdstip verwijderd",
    "Deleted directories": "Verwijderde mappen",
    "Deleted files": "Verwijderde bestanden",
    "Deleted group {group_name}": "Groep {group_name} verwijderd",
    "Deleted library": "Verwijderde bibliotheek",
    "Deleted library {library_name}": "Bibliotheek {library_name} verwijderd",
    "Deleted user {user}": "Gebruiker {user} verwijderd",
    "Departments": "Afdelingen",
    "Description": "Beschrijving",
    "Desktop": "Desktop",
    "Detail": "Detailweergave",
    "Details": "Details",
    "Device": "Apparaat",
    "Device Name": "Apparaatnaam",
    "Devices": "Apparaten",
    "Diff": "Verschil",
    "Directory": "Map",
    "Disable Two-Factor Authentication": "Tweestapsauthenticatie uitschakelen",
    "Document convertion failed.": "Document conversie mislukt.",
    "Documents": "Documenten",
    "Don't keep history": "Bewaar geschiedenis niet",
    "Don't replace": "Niet vervangen",
    "Download": "Downloaden",
    "Edit": "Aanpassen",
    "Edit failed.": "Wijzigen mislukt",
    "Edit succeeded": "Wijzigen gelukt",
    "Email": "E-mail",
    "Enable Two-Factor Authentication": "Tweestapsauthenticatie inschakelen",
    "Enable two factor authentication": "Tweestapsauthenticatie inschakelen",
    "Encrypt": "Versleutel",
    "Encrypted library": "Versleutelde bibliotheek",
    "Error": "Fout",
    "Errors": "Fouten",
    "Exit System Admin": "Systeembeheer afsluiten",
    "Expiration": "Vervaldatum",
    "Expired": "Verlopen",
    "Expired at": "Verlopen op",
    "Export Excel": "Export naar Excel",
    "Failed": "Mislukt",
    "Failed to copy %(name)s": "Kon %(name)s niet kopi\u00ebren",
    "Failed. Please check the network.": "Mislukt. Controleer de netwerkverbinding.",
    "Favorites": "Favorieten",
    "File": "Bestand",
    "File Upload": "Bestandsupload",
    "File Uploading...": "Bestand uploaden...",
    "File download is disabled: the share link traffic of owner is used up.": "Download is niet mogelijk: de limiet voor verkeer van bestanden delen is overschreden.",
    "Files": "Bestanden",
    "Folder": "Map",
    "Folder Permission": "Map toegangsrechten",
    "Folders": "Mappen",
    "Generate": "Genereer",
    "Grid": "Raster",
    "Group": "Groep",
    "Group Permission": "Groepsrechten",
    "Groups": "Groepen",
    "Guest": "Gast",
    "Handled": "Behandeld",
    "Help": "Help",
    "History": "Geschiedenis",
    "History Setting": "Geschiedenis-instellingen",
    "IP": "IP",
    "Image": "Afbeelding",
    "Images": "Afbeeldingen",
    "In all libraries": "In alle bibliotheken",
    "Inactive": "Inactief",
    "Info": "Informatie",
    "Input file extensions here, separate with ','": "Vul hier bestands extensies in, gescheiden door ','",
    "Institutions": "Organisaties",
    "Internal Server Error": "Interne Server Fout",
    "Invalid destination path": "Ongeldig bestandspad bestemming",
    "Invitations": "Uitnodigingen",
    "Invite Time": "Tijdstip uitnodiging",
    "Invited at": "Uitgenodigd op",
    "Inviter": "Uitgenodigd door",
    "It is required.": "Het is verplicht.",
    "Keep full history": "Bewaar volledige geschiedenis",
    "LDAP": "LDAP",
    "LDAP(imported)": "LDAP (geimporteerd)",
    "Language": "Taal",
    "Language Setting": "Taalinstelling",
    "Last Access": "Laatst gesynchroniseerd",
    "Last Login": "Laatste inlog",
    "Last Update": "Laatste wijziging",
    "Leave Share": "Gedeelde folder verlaten",
    "Libraries": "Bibliotheken",
    "Library": "Bibliotheek",
    "Library Type": "Soort bibliotheek",
    "Limits": "Limieten",
    "Link": "Link",
    "Linked Devices": "Gekoppelde apparaten",
    "Links": "Links",
    "List": "Lijst",
    "Location": "Locatie",
    "Lock": "Slot",
    "Log out": "Uitloggen",
    "Logs": "Logbestanden",
    "Manage Members": "Leden beheren",
    "Member": "Lid",
    "Members": "Leden",
    "Message (optional):": "Bericht (optioneel):",
    "Mobile": "Mobiel",
    "Modification Details": "Wijzigingdetails",
    "Modified": "Gewijzigd",
    "Modified files": "Gewijzigde bestanden",
    "Modifier": "Wijziger",
    "Month:": "Maand:",
    "More": "Meer",
    "More Operations": "Meer handelingen",
    "Move": "Verplaatsen",
    "Move selected item(s) to:": "Geselecteerde item(s) verplaatsen naar:",
    "My Groups": "Mijn groepen",
    "My Libraries": "Mijn bibliotheken",
    "Name": "Naam",
    "Name is required": "Naam is verplicht",
    "Name is required.": "Naam is vereist.",
    "Name should not include '/'.": "Naam mag geen '/' bevatten.",
    "Name(optional)": "Naam(optioneel)",
    "Network error": "Netwerkfout",
    "New": "Nieuw",
    "New Excel File": "Nieuw Excelbestand",
    "New File": "Nieuw bestand",
    "New Folder": "Nieuwe map",
    "New Group": "Nieuwe groep",
    "New Library": "Nieuwe Bibliotheek",
    "New Password": "Nieuw wachtwoord",
    "New Password Again": "Nieuwe wachtwoord nogmaals",
    "New PowerPoint File": "Nieuw PowerPoint-bestand",
    "New Wiki": "Nieuwe Wiki",
    "New Word File": "Nieuw Word-bestand",
    "New directories": "Nieuwe mappen",
    "New files": "Nieuwe bestanden",
    "New password is too short": "Nieuwe wachtwoord is te kort",
    "New passwords don't match": "Nieuwe wachtwoorden komen niet overeen",
    "Next": "Volgende",
    "Next (Right arrow key)": "Volgende (rechter pijltjestoets)",
    "No comment yet.": "Nog geen opmerkingen.",
    "No connected devices": "Geen apparaten verbonden",
    "No departments": "Geen afdelingen",
    "No groups": "Geen groepen",
    "No libraries": "Geen bibliotheken",
    "No members": "Geen leden",
    "No public libraries": "Geen publieke bibliotheken",
    "No result": "Geen resultaat",
    "No sync errors": "Geen synchronisatiefouten",
    "None": "Geen",
    "Note: Settings via web interface are saved in database table (seahub-db/constance_config). They have a higher priority over the settings in config files.": "Let op: instellingen uit de webomgeving zijn opgeslagen in een databasetabel (seahub-db/constance_config). Zij hebben een hogere prioriteit dan de instellingen in configuratiebestanden.",
    "Notification Detail": "Melding Detail",
    "Notifications": "Meldingen",
    "Number of groups": "Aantal groepen",
    "Off": "Uit",
    "Old Password": "Oude wachtwoord",
    "On": "Aan",
    "Only keep a period of history:": "Bewaar alleen geschiedenis over been bepaalde periode:",
    "Open in New Tab": "Open in nieuw tabblad",
    "Open via Client": "Openen via programma",
    "Operation": "Acties",
    "Operation succeeded.": "Handeling gelukt.",
    "Operations": "Handelingen",
    "Organization": "Organisatie",
    "Organization Admin": "Organisatiebeheerder",
    "Organizations": "Organisaties",
    "Other Libraries": "Andere bibliotheken",
    "Owner": "Eigenaar",
    "Owner can use admin panel in an organization, must be a new account.": "Beheerder kan het beheerpaneel in een organisatie gebruiken, moet een nieuw account zijn.",
    "Packaging...": "Aan het inpakken...",
    "Password": "Wachtwoord",
    "Password again": "Wachtwoord nogmaals",
    "Password is too short": "Wachtwoord is te kort",
    "Password:": "Wachtwoord:",
    "Passwords don't match": "Wachtwoorden komen niet overeen",
    "Permission": "Toegangsrechten",
    "Permission denied": "Permissie geweigerd",
    "Permission:": "Permissies:",
    "Platform": "Platform",
    "Please check the network.": "Controleer de netwerkverbinding.",
    "Please enter 1 or more character": "Voer 1 of meer tekens in.",
    "Please enter a new password": "Geef het nieuwe wachtwoord op",
    "Please enter days": "Voer aantal dagen in",
    "Please enter password": "Voer wachtwoord in",
    "Please enter the new password again": "Gelieve het wachtwoord opnieuw in te voeren",
    "Please enter the old password": "Geeft het oude wachtwoord op",
    "Please enter the password again": "Gelieve het wachtwoord opnieuw in te voeren",
    "Please input at least an email.": "Voer minimaal een e-mailadres in.",
    "Previous": "Vorige",
    "Previous (Left arrow key)": "Vorige (linker pijltjestoets)",
    "Professional Edition": "Professionele editie",
    "Profile": "Profiel",
    "Profile Setting": "Profielinstelling",
    "Read-Only": "Alleen lezen",
    "Read-Only library": "Alleen-lezen bibliotheek",
    "Read-Write": "Lezen/schrijven",
    "Read-Write library": "Lees-Schrijf bibliotheek",
    "Really want to delete your account?": "Wil je je account echt verwijderen?",
    "Refresh": "Vernieuwen",
    "Remove": "Verwijderen",
    "Rename": "Hernoem",
    "Rename File": "Bestand hernoemen",
    "Rename Folder": "Map hernoemen",
    "Renamed or Moved files": "Hernoemde of verplaatste bestanden",
    "Replace": "Vervangen",
    "Replace file {filename}?": "Bestand {filename} vervangen?",
    "Replacing it will overwrite its content.": "Vervanging zal huidige inhoud overschrijven.",
    "Reset Password": "Wachtwoord reset",
    "ResetPwd": "ResetPwd",
    "Restore": "Terughalen",
    "Restore Library": "Bibliotheek herstellen",
    "Result": "Resultaat",
    "Revoke Admin": "Intrekken Admin",
    "Role": "Rol",
    "Saving...": "Opslaan...",
    "Seafile": "Seafile",
    "Search": "Zoek",
    "Search Files": "Zoek Bestanden",
    "Search files in this library": "Zoek bestanden in deze bibliotheek",
    "See All Notifications": "Bekijk alle meldingen",
    "Select a group": "Selecteer een groep",
    "Select libraries to share": "Selecteer bibliotheken om te delen",
    "Send": "Verzend",
    "Send activation Email after user registration.": "Stuur activatiemail na gebruikersregistratie.",
    "Send to:": "Verzend naar:",
    "Sending...": "Verzenden...",
    "Server Version: ": "Serverversie: ",
    "Set Admin": "Admin instellen",
    "Set Quota": "Quota instellen",
    "Set to current": "Zet naar huidig",
    "Set user name": "Gebruikersnaam instellen",
    "Set {placeholder}'s permission": "Stel rechten van {placeholder} in",
    "Settings": "Instellingen",
    "Share": "Delen",
    "Share Admin": "Delen beheer",
    "Share From": "Delen Van",
    "Share Links": "Gedeelde links",
    "Share To": "Delen met",
    "Share existing libraries": "Deel bestaande bibliotheken",
    "Share to group": "Delen met een groep",
    "Share to user": "Delen met gebruiker",
    "Shared By": "Gedeeld Door",
    "Shared Links": "Gedeelde links",
    "Shared by: ": "Gedeeld door:",
    "Shared with all": "Gedeeld met iedereen",
    "Shared with groups": "Gedeeld met groepen",
    "Shared with me": "Gedeeld met mij",
    "Show Codes": "Codes tonen",
    "Size": "Grootte",
    "Space Used": "Ruimte Gebruikt",
    "Star": "Favoriet maken",
    "Status": "Status",
    "Storage": "Opslagruimte",
    "Storage Used": "Gebruikte opslagruimte",
    "Submit": "Verzenden",
    "Success": "Gelukt",
    "Successfully changed library password.": "Succesvolle wijziging van wachtwoord bibliotheek",
    "Successfully copied %(name)s and %(amount)s other items.": "Kopi\u00ebren van %(name)s en %(amount)s andere items gelukt.",
    "Successfully copied %(name)s and 1 other item.": "Kopi\u00ebren van %(name)s en 1 ander item gelukt.",
    "Successfully copied %(name)s.": "Kopi\u00ebren van %(name)s gelukt.",
    "Successfully deleted %s": "%s verwijderd.",
    "Successfully deleted 1 item.": "Succesvol 1 item verwijderd.",
    "Successfully moved %(name)s and %(amount)s other items.": "Verplaatsen van %(name)s en %(amount)s andere items gelukt.",
    "Successfully moved %(name)s and 1 other item.": "Verplaatsen van %(name)s en 1 ander item gelukt.",
    "Successfully moved %(name)s.": "Verplaatsen van %(name)s gelukt.",
    "Successfully reset password to %(passwd)s for user %(user)s.": "Succesvolle reset wachtwoord naar %(passwd)s voor gebruiker %(user)s.",
    "Successfully revoke the admin permission of %s": "Adminrechten van %s succesvol ingetrokken",
    "Successfully sent to {placeholder}": "Versturen naar {placeholder} gelukt",
    "Successfully set %s as admin.": "%s succesvol ingesteld als admin.",
    "Successfully set library history.": "Bibliotheekgeschiedenis instellen gelukt.",
    "Successfully transferred the group.": "Groep succesvol overgedragen",
    "Successfully transferred the library.": "Verplaatsen van de bibliotheek is gelukt.",
    "Sync": "Synchronisatie",
    "System": "Systeem",
    "System Admin": "Systeembeheerder",
    "System Info": "Systeeminformatie",
    "Terms and Conditions": "Voorwaarden",
    "Text": "Tekst",
    "Text files": "Tekstbestanden",
    "The password will be kept in the server for only 1 hour.": "Het wachtwoord wordt maar 1 uur op de server bewaard.",
    "This library is password protected": "Deze bibliotheek is beveiligd met een wachtwoord",
    "This operation will not be reverted. Please think twice!": "Deze handeling kan niet ongedaan gemaakt worden",
    "Time": "Tijd:",
    "Tip: 0 means default limit": "Tip: 0 betekent standaard limiet",
    "Tip: a snapshot will be generated after modification, which records the library state after the modification.": "Tip: Er wordt na iedere wijziging een momentopname gegenereerd, die de status van de bibliotheek na de wijziging opslaat.",
    "Tools": "Hulpmiddelen",
    "Total Devices": "Totaal aantal apparaten",
    "Total Users": "Totaal aantal gebruikers",
    "Traffic": "Verkeer",
    "Transfer": "Overzetten",
    "Transfer Group": "Groep overzetten",
    "Transfer Library": "Bibliotheek overzetten",
    "Transferred group {group_name} from {user_from} to {user_to}": "Groep {group_name} van {user_from} naar {user_to} overgezet",
    "Transferred library {library_name} from {user_from} to {user_to}": "Bibliotheek {library_name} van {user_from} naar {user_to} overgezet",
    "Trash": "Prullenbak",
    "Two-Factor Authentication": "Tweestapsauthenticatie",
    "Two-factor authentication is not enabled for your account. Enable two-factor authentication for enhanced account security.": "Tweestapsauthenticatie is niet ingeschakeld voor je account. Schakel tweestapsauthenticatie in voor uitgebreide accountbeveiliging.",
    "Type": "Type",
    "Unknown": "Onbekend",
    "Unlink": "Ontkoppelen",
    "Unlink device": "Apparaat ontkoppelen",
    "Unlock": "Deblokkeer",
    "Unshare": "Delen intrekken",
    "Unshare Library": "Delen ongedaan maken",
    "Unstar": "Ongedaan maken van favoriet",
    "Update": "Bijwerken",
    "Update Terms and Conditions": "Voorwaarden bijwerken",
    "Upgrade to Pro Edition": " Opwaarderen naar de Pro editie",
    "Upload": "Upload",
    "Upload Files": "Bestanden Uploaden",
    "Upload Folder": "Map uploaden",
    "Upload Link": "Upload Link",
    "Upload Links": "Uploadlinks",
    "Upload file": "Upload bestand",
    "Use custom CSS": "Aangepaste CSS gebruiken",
    "Used:": "Gebruikt:",
    "User": "Gebruiker",
    "User Permission": "Gebruikersrechten",
    "Username:": "Gebruikersnaam:",
    "Users": "Gebruikers",
    "Version": "Versie",
    "Version Number": "Versienummer",
    "Video": "Video",
    "View": "Bekijken",
    "View Snapshot": "Bekijk Snapshot",
    "Virus File": "Virusbestand",
    "Virus Scan": "Virusscan",
    "Virus Scan Records": "Virus",
    "Visits": "Bezoeken",
    "Wrong password": "Verkeerd wachtwoord",
    "You can also add a user as a guest, who will not be allowed to create libraries and groups.": "Je kunt ook een gebruiker als gast toevoegen die geen permissies heeft om gebruikers en bibliotheken aan te maken.",
    "You can use this field at login.": "Je kunt dit veld tijdens het aanmelden gebruiken",
    "You have not shared any folders": "Je hebt geen mappen gedeeld",
    "Your notifications will be sent to this email.": "Je meldingen zullen naar dit e-mailadres worden verzonden.",
    "all": "alle",
    "all members": "alle leden",
    "allow new registrations": "nieuwe registraties toestaan",
    "days": "dagen",
    "file": "bestand",
    "icon": "icoon",
    "locked": "Geblokkeerd",
    "name": "naam",
    "password minimum length": "minimum wachtwoordlengte",
    "starred": "favoriet",
    "to": "naar",
    "unstarred": "geen favoriet",
    "you can also press \u2190 ": "je kan ook drukken op...",
    "{placeholder} Folder Permission": "{placeholder} Map toegangsrechten"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d-%m-%Y %H:%M:%S",
      "%d-%m-%y %H:%M:%S",
      "%Y-%m-%d %H:%M:%S",
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%y %H:%M:%S",
      "%Y/%m/%d %H:%M:%S",
      "%d-%m-%Y %H:%M:%S.%f",
      "%d-%m-%y %H:%M:%S.%f",
      "%Y-%m-%d %H:%M:%S.%f",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%y %H:%M:%S.%f",
      "%Y/%m/%d %H:%M:%S.%f",
      "%d-%m-%Y %H.%M:%S",
      "%d-%m-%y %H.%M:%S",
      "%d/%m/%Y %H.%M:%S",
      "%d/%m/%y %H.%M:%S",
      "%d-%m-%Y %H.%M:%S.%f",
      "%d-%m-%y %H.%M:%S.%f",
      "%d/%m/%Y %H.%M:%S.%f",
      "%d/%m/%y %H.%M:%S.%f",
      "%d-%m-%Y %H:%M",
      "%d-%m-%y %H:%M",
      "%Y-%m-%d %H:%M",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M",
      "%Y/%m/%d %H:%M",
      "%d-%m-%Y %H.%M",
      "%d-%m-%y %H.%M",
      "%d/%m/%Y %H.%M",
      "%d/%m/%y %H.%M",
      "%d-%m-%Y",
      "%d-%m-%y",
      "%Y-%m-%d",
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y/%m/%d"
    ],
    "DATE_FORMAT": "j F Y",
    "DATE_INPUT_FORMATS": [
      "%d-%m-%Y",
      "%d-%m-%y",
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": "1",
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": "3",
    "SHORT_DATETIME_FORMAT": "j-n-Y H:i",
    "SHORT_DATE_FORMAT": "j-n-Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H.%M:%S",
      "%H.%M:%S.%f",
      "%H.%M",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

