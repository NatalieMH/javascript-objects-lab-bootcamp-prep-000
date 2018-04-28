var recipes = {}
function updateObjectWithKeyAndValue(object,key,value) {
  for(var key) {
  object[key] = value}
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}
function deleteFromObjectByKey(object,key) {
  var newObj = Object.assign({},object,key)
  delete newObj[key]
  return newObj
}