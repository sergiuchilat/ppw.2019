function start () {
  loadingBios();
  setTimeout(function () {
    loadingOS();
  }, 3000);
}

function loadingBios () {
  document.getElementById('bios-loading').style.display = 'block';
  setTimeout(function () {
    loadingOS();
  }, 2000);
}

function loadingOS () {
  document.getElementById('bios-loading').style.display = 'none';
  document.getElementById('os-loading').style.display = 'block';
  setTimeout(function () {
    loadingLoginScreen();
  }, 1000);
}

function loadingLoginScreen () {
  document.getElementById('os-loading').style.display = 'none';
  document.getElementById('os-login').style.display = 'block';
}

function login () {
  if(document.getElementById('password').value === '1234'){
    showDesktop();
  } else {
    loadingBios();
  }
}

function showDesktop(){
  document.getElementById('os-login').style.display = 'none';
  document.getElementById('os-desktop').style.display = 'block';
}


document.getElementById('password').onkeypress = function(e){
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  if (keyCode == '13'){
    login();
    return false;
  }
}
