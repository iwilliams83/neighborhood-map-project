const staticCacheName = 'neighborhood-maps-v1';
const fourSquareAPI = 'https://api.foursquare.com/v2/venues/search?client_id=Q3OXIUKBYDMB2BAI1QPUHZSKLHTBZB4BRZ0AYOCZGIATKN4G%20%20%20%20%20%20%20%20%20%20%20%20%20%20&client_secret=NUR2V3QHB2RBQSZIKA2OFYIEDLZVF0RJPW1UXCEZSAO4ECZV&ll=40.6939951,-73.9942396&categoryId=4d4b7105d754a06374d81259&v=20181025&radius=250'
const googleMapsAPI = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAFzHgk9cex507OuWCImdp0yykLbH23gew&callback=loaderCB01541096871633&libraries=places&v=3&language=en'

self.addEventListener('install', function(event){
  console.log('==== INSTALLED')
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache){
        return cache.addAll([fourSquareAPI, googleMapsAPI])
      })
  )
})

self.addEventListener('fetch', function(event) {
  console.log('==== FETCHING', event.request)

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request)
    })
  )
});
