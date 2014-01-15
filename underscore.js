var each = function (array,callback){
 
 for (var i = 0; i < array.length; i++){
     
     callback(array[i],i,array);
 }
};

var indexOf = function (array,target){
    
    var pos = -1;
    
    each(array, function (value,index,array){
        
        if (value === target && pos === -1 ){
            
            pos = index;
        }
    });
    
    return pos;
};

var map = function (array,callback){
    
    var ans = [];
    
    each(array,function (value,index,array){
        
        ans.push(callback(value));
    });
    
    return ans;
};

var reduce = function (array,callback,start){
    
    each(array,function (value,index,array){
        
        start = callback(start,value);
    });
    
    return start;
};

var filter = function (array,test){
    
    var ans = [];
    
    each(array,function (value,index,array){
        
        if (test(value)){
            
            ans.push(value);
        }
    });
    
    return ans;
};

var reject = function (array,test){
    
    return filter(array, function (value){
        
        return !test(value);
    });
};

var uniq = function(array){
    
    var ans = [];
    var helper = {};
    
    each(array,function (value,index,array){
        
        if (helper[value] === undefined){
            
            ans.push(value);
            helper[value] = true;
        }
    });
    
    return ans;
}
