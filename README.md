#Namaste React

#What parcel Provides to our code/Application
-Dev Build
-Local Server:-Host application to server

-HMR:-Hot Module Replacement[here when we make any chages in files once we save it it'll reflect to browser without refreshing it.]

-File Watching Algorithm-written in C++[Parcel uses HMR coz it work on file watching algo which continously track chages happing in file/code]

-Caching-Faster build[1st time when we build npx parcel index.html '.parcel-cache' file get created which stores all info of processed file, next time when we build it take that unchaged file from cache without re-processing which reduces time.]

-Image Optimization, Minification, Bundling of code, Compressing

-Consistence Hashing:-

-Differential Bundle:- here parcel provides various bundles features to support application for older browser

-Dignostic:- give error in beautiful deatil format which is easy to understand nd resolve accordingly.

-HTTPs:- npx parcel index.html --https it load it in https format with localhost

-Different dev nd prod bundles.

