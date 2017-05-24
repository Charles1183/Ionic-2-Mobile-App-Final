This Nature Net Kids App used the Ionic framework. This framework alows the programmer to use HTML, 
Node.js, and CSS to create a multi platform app. This app was created using Ionic 2, Ionic 3 was 
released during the creation of this app and this might casue some issues with Ionic Native.

However, this build should allow you to run at test all the features of the 
application with the expection of voice recording. 
For this reason the image for the upload observation is coded in the project using an URL.

How to install Ionic framework, see link for detailed instructions:
1. Download and install Node.js
2. install platform SDK and comand line tools for cordova (ex. Xcode, Android Studio)
3. Install Ionic framwork with command line, npm install -g cordova ionic
4. download the repository and navigate to the directory in terminal and run npm install

This should alow you to run and compile the Ionic app in terminal. 

Importaint commands to know:

Runs the app locally on a browser,
    ionic serve 

Runs the app locally with the option to see how the app looks on multiple platforms
    ionic serve --lab
Note ionic serve will not use native plugins in the browser. like the camera access. 

create a new page 
    ionic g page pageName

compile device files to upload the app to a device 
    ionic build ios
    ionic build android
    ionic build windows

all the HTML, JS, and CSS is in src/pages
all global CSS values and themeing is in src/theme/veriables.scss
all files for the device program like Xcode and Adroid Studio is in the platforms file
this icon and splash screen is stored in the resorces file. to create an icon and splash screen
follow http://ionicframework.com/docs/v1/cli/icon-splashscreen.html

for installation help and a crash course on Ionic see:
https://ionicframework.com/getting-started/
get started page has more information on device instalations needed to emulate and compile for the 
platforms.
https://youtu.be/ilM8YorL_jI

you might need to do this as well to get Ionic native plugins to work normally
https://forum.ionicframework.com/t/ionic-native/84987