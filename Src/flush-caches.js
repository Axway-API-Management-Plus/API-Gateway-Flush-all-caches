importPackage(Packages.com.vordel.circuit.cache);
importPackage(Packages.com.vordel.trace);

function invoke(msg) {
  // The default cache is one of the cache created at install time
  var defaultCache = CacheContainer.getInstance().getCache("Local maximum messages");
  Trace.info("Default Cache : " + (defaultCache != null ? defaultCache.getName() : "null"));

  // Get the EHCache's CacheManager using an instance of a cache
  var cacheManager = defaultCache != null ? defaultCache.getCacheManager() : null;
  if (cacheManager != null) {
    Trace.info("Got an instance of EHCache's CacheManager. Flushing selected cache !");
    cacheManager.clearAll();
  }

  // If we got a CacheManager instance, we should have flushed successfully all caches
  return cacheManager != null;
}
