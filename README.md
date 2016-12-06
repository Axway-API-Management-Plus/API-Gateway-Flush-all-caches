# Description
Axway API Gateway propose a “Cache” Feature
You can cache a value for a later re-use
This Java script is used to flush a specific cache or all caches


## API Management Version Compatibilty
This artefact was successfully tested for the following versions:
- 7.5.1


## Install

Creation of Cache Flush Policy :

![alt text][Screenshot1]
[Screenshot1]: https://github.com/Axway-API-Management/API-Gateway-Flush-all-caches/blob/master/Readme/Screenshot1.png  "Screenshot1"   


## Usage

Some remarks about the policy : 
- First of all, make sure you selected the “Rhino engine JRE7 and earlier” option
- To get an instance of the EHcache’s CacheManager, the script has to get first an instance of a cache
- It uses the “Local maximum messages” (one of the default caches) 
- When used in production, it is safer to use a dedicated cache so that if default caches are removed, the scripts still works
- The script returns true, if caches have been flushed. False otherwise. Make sure to reflect this as HTTP Status code ! 
   

## Bug and Caveats

Nothing identified

## Contributing

Please read [Contributing.md] (https://github.com/Axway-API-Management/Common/blob/master/Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Team

![alt text][Axwaylogo] Axway Team

[Axwaylogo]: https://github.com/Axway-API-Management/Common/blob/master/img/AxwayLogoSmall.png  "Axway logo"


## License
Apache License 2.0 (refer to document [license] (/LICENSE))

