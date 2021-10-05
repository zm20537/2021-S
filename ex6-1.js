//2.2変数への代入
/*説明：who65がはじめは"world"が代入されているため、表示される文字は、"Hello"と"world"となる。
しかし、太郎や花子のボタンを押すことにより、who65に太郎（花子）を代入される。
そのため、もう一度あいさつボタンを押すと"Hello, 太郎(花子)"となった。*/

var who65 = 'world';
function sayhello65(){
    alert('Hello,' + who65 + '!');
}
function taro65(){
    who65 = '太郎';
}
function hanako65(){
    who65 = '花子';
}