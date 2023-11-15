var tabel= document.getElementById("mytab");
var row= tabel.ariaRowSpan.length;
var col= tabel.ariaColSpan.length;
for (var i = 1; i <= row.length; i++) {
   
    for (var j = 1; j <= col.length; j++) {
        
        if (i == j) { 
            td.style.background = "red";
        }
        
    }
}