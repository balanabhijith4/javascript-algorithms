var mod=function(l,m){
    var rem=l%m
    return Math.floor(rem>=0?rem:rem+m)
}
console.clear()
const prompt=require('prompt-sync')({sigint:true})
const a=17
const b=20

var str1=''
const str=prompt('Enter ur Plaintext ')

/**                                             Encryption                                                                          **/
for(var i=0;i<str.length;i++)
{
    var d=str[i].charCodeAt(0);
    if(d>=65&&d<=90)
    {
        var h=d-65
        var enc=((a*h)+b) %26
        h=enc+65        
        str1+=String.fromCharCode(h)
    }
    else if(d>=97&&d<=122){
        var h=d-97
        var enc=((a*h)+b) %26
        h=enc+97
        str1+=String.fromCharCode(h)
    }
    else{
        str1+=str[i]
    }
}
console.clear()
var mulinv=0

/**                                             Decryption                                                                          **/
//find multiplicative inverse
for(var i=0;i<26;i++)
{
    rem=(a*i)%26
    if(rem==1){
        mulinv=i
    }
}
var str2='';
for(var i=0;i<str1.length;i++)
{
    var d=str1[i].charCodeAt(0);
    if(d>=65&&d<=90)
    {
        var h=d-65
        j=mulinv*(h-b)
        var dec=mod(j,26)
        //console.log(str1[i]+" "+mulinv+" "+d+" "+h+" "+j+" "+dec)
        h=dec+65        
        str2+=String.fromCharCode(h)
    }
    else if(d>=97&&d<=122){
        var h=d-97
        j=mulinv*(h-b)
        var dec=mod(j,26)
        h=dec+97
        str2+=String.fromCharCode(h)
    }
    else{
        str2+=str[i]
    }
}
console.clear()
console.log("Entered Plaintext "+str)
console.log("Generated Ciphertext "+str1)
console.log("Generated Plaintext after decryption" +str2)
