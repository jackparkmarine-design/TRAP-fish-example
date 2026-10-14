CATCH LOGGER - OFFLINE IPAD APP
================================

What is in this folder
  index.html             the app
  sw.js                  keeps a copy of the app on the iPad so it opens with no signal
  manifest.webmanifest   app name and icon for the home screen
  icon-*.png             home-screen icons

Survey data is stored only on the iPad. Nothing is sent to the website.
The website only delivers the app the first time (and any updates).


STEP 1 - PUT IT ON THE WEB (GitHub Pages, free, about 10 minutes, on a computer)
---------------------------------------------------------------------------------
1. Go to github.com and create a free account (or sign in).
2. Click the "+" (top right) > New repository.
   Name: catch-logger    Visibility: Public    > Create repository.
   (Public means the app code is visible. Your survey data never goes there.)
3. On the new repository page click "uploading an existing file".
   Drag ALL the files in this folder in (not the folder itself), then click "Commit changes".
4. Go to Settings > Pages (left menu).
   Source: Deploy from a branch.  Branch: main, folder: / (root) > Save.
5. Wait 1-2 minutes and refresh that page. It shows your address, e.g.
       https://YOUR-USERNAME.github.io/catch-logger/
   Open it on the computer to check the app appears.

(If DPIRD IT would rather host it, give them this folder. Any HTTPS web server
that serves static files works. It must be https://, not http://.)


STEP 2 - INSTALL ON EACH IPAD (needs internet this one time)
------------------------------------------------------------
1. Open SAFARI (not the Claude app, Mail, or Chrome's in-app view).
2. Type the address from Step 1 into the address bar and open it.
3. Tap the Share icon (square with arrow, top right next to the address bar).
4. Scroll down the list and tap "Add to Home Screen" > Add.
   (Missing? Tap "Edit Actions" at the bottom of that list and turn it on.
    Still missing on a work iPad = device management is blocking it; ask IT.)
5. Open the app FROM THE NEW HOME-SCREEN ICON once while still online,
   and allow Location when asked. It now has its own stored copy.

Note: data entered in Safari and data entered in the home-screen app are kept
separately. Always use the home-screen icon.


STEP 3 - TEST BEFORE THE BOAT
-----------------------------
1. Turn on Airplane Mode.
2. Swipe the app away completely, then open it from the icon. It should open normally.
3. Go to Setup > "Clear example data", set your Device ID and sample serial numbers.
4. Enter a full test station, mark it complete (it offers to save a backup CSV),
   restart the iPad, reopen the app and check every record is still there.
5. Export > Save CSV file > Save to Files. Check it opens in Excel or R.


UPDATING THE APP LATER
----------------------
1. Edit the files, then in sw.js change  catch-logger-v1  to  catch-logger-v2  (and so on).
   If you skip this, iPads keep using the old copy.
2. Upload the changed files to the same GitHub repository (Add file > Upload files).
3. Each iPad gets the update the next time the app is opened with internet,
   then shows "Update downloaded. Close and reopen the app to use it."
   Do not publish updates during a field trip.


KEEPING DATA SAFE
-----------------
- Export after every station or at least every day (Mark complete does this for you).
- Deleting the home-screen icon DELETES ALL DATA on that iPad. Export first.
- Give each iPad its own Device ID and sample serial prefix (Setup).
