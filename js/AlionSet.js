;(function(){
  var MySet = function(){};
  MySet.prototype = {
    target: {},
    size: 0,
    add: function(item){
      if( item ) {
        this.target[item] = true;
        this.size++;
      }
      return !!item;
    },
    remove: function(item){
      if( this.target[item] ){
        this.size--;
        delete this.target[item];
      }
    },
    toList: function(){
      var temp = [];
      for( var item in this.target ){
        if( this.target.hasOwnProperty(item) ){
          temp.push(item);
        }
      }
      return temp;
    }
  };
})();