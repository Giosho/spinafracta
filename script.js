<script>
function openCity(evt, cityName){
    var i, tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++) tabcontent[i].style.display="none";
    document.getElementById(cityName).style.display="block";

    // Смяна на фон с плавно fade
    if(cityName=="Oslo"){
        document.body.style.backgroundImage = "url('norway-flag.jpg')";
    } else if(cityName=="Stockholm"){
        document.body.style.backgroundImage = "url('sweden-flag.jpg')";
    }
}

function openSubTab(evt, subTabId){
    var i, subtabs = evt.currentTarget.parentNode.parentNode.getElementsByClassName("subtab");
    for(i=0;i<subtabs.length;i++) subtabs[i].style.display="none";
    document.getElementById(subTabId).style.display="block";
}

window.onload = function() {
    document.getElementById("defaultOpen").click();
}
</script>
