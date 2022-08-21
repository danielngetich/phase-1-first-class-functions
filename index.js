function receivesAFunction(spy){
   return spy();
}
function returnsANamedFunction(){
   return (function fn(){
      console.log("Hello there")
   })
}
function returnsAnAnonymousFunction(){
   return(function(){
      console.log("Hello World")
   })
}