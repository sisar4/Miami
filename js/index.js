window.onload = function() {
closeNav();
loadMenus();
showPage(1); /*carica pagina iniziale*/
  };
function loadMenus()
{
    //document.getElementById('mySidenav').innerHTML = '<img id="loadingMenuNoLog" src="images/loadingDinamycContent.gif" alt="Attendere..." style="  display: block; margin-left: auto; margin-right: auto;">';
    //document.getElementById('mySidenav').innerHTML = '<div class="loading-container" id="loadingMenuNoLog"><div class="load1" id="loadingMenuNoLog1"><div class="load2" id="loadingMenuNoLog2"><div class="load3" id="loadingMenuNoLog3"></div></div></div></div>';
    fetch("php/index.php?menu=noLogged", { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
        var target = document.getElementById('mySidenav');
        res.forEach((x)=>{
            var node = document.createElement('a');
            node.setAttribute('href', 'javascript:showPage('+x.pageID+')');
            var text = document.createTextNode(x.displayName);
            node.appendChild(text);
            target.appendChild(node);
        });
        document.getElementsById("loadingMenuNoLog").remove();
    });
}

function showPage(pageID)
{
    if(document.getElementById("mySidenav").style.width=="100%")
        showHideNav(document.getElementById("mySidenav"));
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

function loginSubmit(form)
{
    if(form.name=="loginStud")
    {
        const data = { 'action': 'login', 'userType': 'stud', 'uName': form["uname"].value, 'uPwd': form["psw"].value };
        const querystring = encodeQueryData(data);
        fetch("php/login.php?"+querystring, { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
        if(res!=null && res!="error")
            setCookie("token", res, 2);
            //todo errore se fallisce
        });
    }
    else if(form.name=="loginProf")
    {
        const data = { 'action': 'login', 'userType': 'prof', 'uName': form["uname"].value, 'uPwd': form["psw"].value };
        const querystring = encodeQueryData(data);
        fetch("php/login.php?"+querystring, { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
        if(res!=null && res!="error")
            setCookie("token", res, 2);
            //todo errore se fallisce
        });
    }
}

function encodeQueryData(data) {
    const ret = [];
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
 }

 function setCookie(cname,cvalue,exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (exhours*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
