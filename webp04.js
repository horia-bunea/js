function hasWebP() {
    /*
     * detecteaza WEBP capabilitate a browserului
     * modificat !!
    */
      var rv = $.Deferred();
      var img = new Image();
      img.onload = function() { rv.resolve(); };
      img.onerror = function() { rv.reject(); };
      img.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
      return rv.promise();
}

hasWebP().then( 
      function(){ window.webpok = true; },  //webp enabled  
      function(){ window.webpok = false; }   //webp disabled
);