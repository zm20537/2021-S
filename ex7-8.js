function nazozo(){
    if(document.getElementById('answer2').value=='夢')
    {
        alert('あたり！');
    }
    else if(document.getElementById('answer2').value=='ゆめ')
    {
        alert('あたり！');
    }
    else
    {
        alert('はずれ！');
    }
}

//value='夢'にしているためex7-5では、==のイコール（等しい）という意味だったが
//それが代入に変わったから。