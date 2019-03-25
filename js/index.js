window.onload = function() {
closeNav();
loadMenus();
showPage(1); /*carica pagina iniziale*/
  };
function loadMenus()
{
    showSidenavLoading();
    fetch("php/index.php?menu=noLogged", { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
        var target = document.getElementById('mySidenav');
        res.forEach((x)=>{
            var node = document.createElement('a');
            node.setAttribute('href', 'javascript:showPage('+x.pageID+')');
            var text = document.createTextNode(x.displayName);
            node.appendChild(text);
            target.appendChild(node);
        });
        hideSidenavLoading();
    });
}

function showPage(pageID)
{
    if(document.getElementById("mySidenav").style.width=="100%")
        showHideNav(document.getElementById("mySidenav"));
    if(pageID<=10) /*no login required*/
    {
        showMainLoading();
        fetch("php/index.php?page="+pageID, { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
            document.getElementById('main').innerHTML = res;
            if(pageID == 2){
                onloadAccedi();
            }
        });
    }
    else
    {

    }
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
