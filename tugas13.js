function buah(){
    var x = ['pisang','jeruk'];
    console.log(x);
    x.unshift('apel','mangga');
    return x;
}
console.log(buah());