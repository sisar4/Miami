window.onload = function() {
closeNav();
loadMenus();
showPage(1); /*carica pagina iniziale*/
if(findGetParameter('submitProf')!=null)
{

}
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
    //form.preventDefault();
    if(form.name=="loginStud" || form=="stud")
    {
        form = document.getElementById('loginStud');
        const data = { 'action': 'login', 'userType': 'stud', 'uName': form["uname"].value, 'uPwd': form["psw"].value };
        const querystring = encodeQueryData(data);
        fetch("php/login.php?"+querystring, { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
        if(res!=null && res!="error")
            setCookie("token", res, 2);
            //todo errore se fallisce
        });
    }
    else if(form.name=="loginProf"  || form=="prof")
    {
        form = document.getElementById('loginProf');
        const data = { 'action': 'login', 'userType': 'prof', 'uName': form["uname"].value, 'uPwd': form["psw"].value };
        const querystring = encodeQueryData(data);
        alert(querystring);
        fetch("php/login.php?"+querystring, { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {       
        if(res!=null && res!="error")
            setCookie("token", res, 2);
            alert(res);
            //todo errore se fallisce
            const data2 = { 'action': 'getInfo', 'token': res };
            const querystring2 = encodeQueryData(data2);
            fetch("php/login.php?"+querystring2, { credentials: "same-origin"}).then((r2)=>{return r2.json();}).then((res2)=>{
              alert(res2);
            })
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

  function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function updateDocenteTable()
{
  fetch("php/docente.php?showList=1", { credentials: "same-origin"}).then((r)=> {return r.json();}).then((res)=> {
    document.getElementById('tabellaDocenti').innerHTML = '';  
    var target = document.getElementById('tabellaDocenti');
      var title = document.createElement('h4');
      var titleContent = document.createTextNode('Docenti e amministratori');
      title.appendChild(titleContent);
      target.appendChild(title);
      var table=document.createElement('table');
      table.setAttribute('class', 'table');
      {
        var tablerow=document.createElement('tr');
        var tablecol1=document.createElement('td');
        var tablecol2=document.createElement('td');
        var tablecol3=document.createElement('td');
        var tablecol4=document.createElement('td');
        var tablecol5=document.createElement('td');
        var tablerow=document.createElement('tr');
        var tablecol1=document.createElement('td');
        var tablecol2=document.createElement('td');
        var tablecol3=document.createElement('td');
        var tablecol4=document.createElement('td');
        var tablecol5=document.createElement('td');
        var cellcontent1 = document.createTextNode('ID');
        var cellcontent2 = document.createTextNode('Nome');
        var cellcontent3 = document.createTextNode('Cognome');
        var cellcontent4 = document.createTextNode('Username');
        var cellcontent5 = document.createTextNode('Ruolo');
        tablecol1.appendChild(cellcontent1);
        tablecol2.appendChild(cellcontent2);
        tablecol3.appendChild(cellcontent3);
        tablecol4.appendChild(cellcontent4);
        tablecol5.appendChild(cellcontent5);
        tablerow.appendChild(tablecol1);
        tablerow.appendChild(tablecol2);
        tablerow.appendChild(tablecol3);
        tablerow.appendChild(tablecol4);
        tablerow.appendChild(tablecol5);
        table.appendChild(tablerow);
      }
      res.forEach((x)=>{
        var tablerow=document.createElement('tr');
        var tablecol1=document.createElement('td');
        var tablecol2=document.createElement('td');
        var tablecol3=document.createElement('td');
        var tablecol4=document.createElement('td');
        var tablecol5=document.createElement('td');
        var cellcontent1 = document.createTextNode(x.iddocente);
        var cellcontent2 = document.createTextNode(x.nome);
        var cellcontent3 = document.createTextNode(x.cognome);
        var cellcontent4 = document.createTextNode(x.username);
        var cellcontent5 = document.createTextNode(x.ruolo);
        tablecol1.appendChild(cellcontent1);
        tablecol2.appendChild(cellcontent2);
        tablecol3.appendChild(cellcontent3);
        tablecol4.appendChild(cellcontent4);
        tablecol5.appendChild(cellcontent5);
        tablerow.appendChild(tablecol1);
        tablerow.appendChild(tablecol2);
        tablerow.appendChild(tablecol3);
        tablerow.appendChild(tablecol4);
        tablerow.appendChild(tablecol5);
        table.appendChild(tablerow);
      });
      target.appendChild(table);
  });
}
