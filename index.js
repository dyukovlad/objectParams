function FormParamsObject(objectParams){
    
    this.objectParams = objectParams;

    this.getFullObject = function() {
        return this.objectParams || null;
    };

    this.convertObjectToArray = function(propPath) {

        if (!propPath) return;
        
        var newArr = [];
        var obj = this.getObjectProperty(propPath);
		
        for (key in obj) {
          var ln = obj[key];
          for (var i = 0; i < ln.length; i++) {
            if (!arr[i]) {
              arr[i] = {};
            } 
            arr[i][key] = ln[i];
          }
        }
        return this.setObjectProperty(propPath, arr);
    };

    this.getObjectProperty = function(propPath){

        if (!propPath) return;
        
        var obj = this.objectParams;
        var path = propPath.split('.');

        if (path.length > 0){
            
            var ln = path.length;
            for (var i = 0; i < ln; i++) {
                if (obj === undefined) break;
                obj = obj[path[i]];
            }
        }

        return obj !== undefined ? obj : null;
    };

    this.setObjectProperty = function(propPath, value){

        if (!propPath || !value) return;

        var obj = this.objectParams;
        var path = propPath.split('.');

        if (path.length > 0){

            var ln = path.length;
            for (var i = 0; i < ln - 1; i++) {
                
                var elem = path[i];
                if (!obj[elem]) {
                    obj[elem] = {};
                } else {
                    if (typeof(obj[elem]) != "object") {
                        obj[elem] = {};
                    }
                }
                obj = obj[elem];
            }
        
            obj[path[ln - 1]] = value;
    
            return obj[path[ln - 1]];
        }
        
    };
    
}
