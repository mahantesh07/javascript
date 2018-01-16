function msg(){
  var data=243;//global variable
  function a(){
    document.writeln(data);
  }
  function b(){
    document.writeln(data);
  }
  a();
  b();
}
