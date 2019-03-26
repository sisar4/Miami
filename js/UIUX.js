function showSidenavLoading()
{
    //document.getElementById('mySidenav').innerHTML = '<img id="loadingMenuNoLog" src="images/loadingDinamycContent.gif" alt="Attendere..." style="  display: block; margin-left: auto; margin-right: auto;">';
    //document.getElementById('mySidenav').innerHTML = '<div class="loading-container" id="loadingMenuNoLog"><div class="load1" id="loadingMenuNoLog1"><div class="load2" id="loadingMenuNoLog2"><div class="load3" id="loadingMenuNoLog3"></div></div></div></div>';
    document.getElementById('mySidenav').innerHTML = '<div class="loading-container" id="loadingMenuNoLog"><img src="images/Ingranaggio.png" class="load1"><img src="images/ResistenzaDiodoShuntCondensatore.png" class="load2"><img src="images/CalibroCompasso.png" class="load3"></div>';
}
function hideSidenavLoading()
{
    document.getElementById("loadingMenuNoLog").remove();
    document.getElementById("loadingMenuNoLog1").remove();
    document.getElementById("loadingMenuNoLog2").remove();
    document.getElementById("loadingMenuNoLog3").remove();
}
function showMainLoading()
{
    document.getElementById('main').innerHTML = '<div class="loading-container" id="loadingPage"><h3 class="loading-text">Loading...</h3><img src="images/Ingranaggio.png" class="load1"><img src="images/ResistenzaDiodoShuntCondensatore.png" class="load2"><img src="images/CalibroCompasso.png" class="load3"></div>';
}
function hideMainLoading()
{
    document.getElementById("loadingPage").remove();
}
function openNav() {
    document.getElementById("mySidenav").style.width = "225px";
    document.getElementById("main").style.marginLeft = "225px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

// These two functions need no customization.
function ChangeBackgroundColor(div) {
    var TableBackgroundMouseoverColor = "#c8c8c8";
    div.style.backgroundColor = TableBackgroundMouseoverColor;
 }
function RestoreBackgroundColor(div) {
    var TableBackgroundNormalColor = "transparent";
     div.style.backgroundColor = TableBackgroundNormalColor;
     }

var counter=false;
     function showHideNav(x) {

         if(counter==true){
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            counter=false;
            x.classList.toggle("change");
         }else {
            var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if(w<650)
            {
                document.getElementById("mySidenav").style.width = "100%";
            }
            else
            {
                document.getElementById("mySidenav").style.width = "225px";
                document.getElementById("main").style.marginLeft = "225px";
            }

            counter=true;
            x.classList.toggle("change");
         }



      }

      function onloadAccedi(){
    document.getElementById("chiSei").style.display = "block";
    document.getElementById("logProf").style.display = "none";
    document.getElementById("logStudente").style.display = "none";
}

function onclickProf(){
    document.getElementById("chiSei").style.display = "none";
    document.getElementById("logProf").style.display = "block";
    document.getElementById("logStudente").style.display = "none";
}

function onclickStudente(){
    document.getElementById("chiSei").style.display = "none";
    document.getElementById("logProf").style.display = "none";
    document.getElementById("logStudente").style.display = "block";
}
