window.onload = function() {
closeNav();
loadMenus();
  };
function loadMenus()
{
    //document.getElementById('mySidenav').innerHTML = '<img id="loadingMenuNoLog" src="images/loadingDinamycContent.gif" alt="Attendere..." style="  display: block; margin-left: auto; margin-right: auto;">';
    document.getElementById('mySidenav').innerHTML = '<div class="loading-container" id="loadingMenuNoLog"><div class="load1" id="loadingMenuNoLog1"><div class="load2" id="loadingMenuNoLog2"><div class="load3" id="loadingMenuNoLog3"></div></div></div></div>';
    fetch("php/index.php?menu=noLogged", { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
        var target = document.getElementById('mySidenav');
        res.forEach((x)=>{
            var node = document.createElement('a');
            node.setAttribute('href', 'javascript:showPage('+x.pageID+')');
            var text = document.createTextNode(x.displayName);
            node.appendChild(text);
            target.appendChild(node);
        });
        document.getElementById("loadingMenuNoLog").remove();
        document.getElementById("loadingMenuNoLog1").remove();
        document.getElementById("loadingMenuNoLog2").remove();
        document.getElementById("loadingMenuNoLog3").remove();
    });
}

function showPage(pageID)
{
    if(pageID<=10) /*no login required*/
    {
        document.getElementById('main').innerHTML = '<img id="loadingPage" src="images/loadingPage.gif" alt="Attendere..." style="  display: block; margin-left: auto; margin-right: auto;">';
        fetch("php/index.php?page="+pageID, { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
            document.getElementById('main').innerHTML = res;
            if(pageID == 2){
                onloadAccedi();
            }
            //document.getElementById("loadingPage").remove();
        });
    }
    else
    {

    }
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
x.classList.toggle("change");
     function myFunction(x) {

         if(counter==true){
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            counter=false;
            x.classList.toggle("change");
         }else {
            document.getElementById("mySidenav").style.width = "225px";
            document.getElementById("main").style.marginLeft = "225px";
            counter=true;
            x.classList.toggle("change");
         }



      }
function onloadAccedi(){                                                    //Modificato in data 22/03/2019     Fani
    document.getElementById("chiSei").style.display = "block";              //-----
    document.getElementById("logProf").style.display = "none";              //-----
    document.getElementById("logStudente").style.display = "none";          //-----
}                                                                           //-----
                                                                            //-----
function onclickProf(){                                                     //-----
    document.getElementById("chiSei").style.display = "none";               //-----
    document.getElementById("logProf").style.display = "block";             //-----
    document.getElementById("logStudente").style.display = "none";          //-----
}                                                                           //-----
                                                                            //-----
function onclickStudente(){                                                 //-----
    document.getElementById("chiSei").style.display = "none";               //-----
    document.getElementById("logProf").style.display = "none";              //-----
    document.getElementById("logStudente").style.display = "block";         //-----
}
