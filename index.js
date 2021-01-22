<<<<<<< HEAD
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value;
return object;
}

function deleteFromObjectByKey(object, key){
  var newObj =  Object.assign({},object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
=======
var obj = {prop: 1};

var updateObjectWithKeyAndValue = (object, key, value) => {
  let newobj = Object.assign({'prop2': 2}, obj);
  return newObj;
};

>>>>>>> 730087c452f227e2d6d63eb76baf141ef024a81f
