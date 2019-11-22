class PC{
  start(){
    this.loadingBios();
    setTimeout(function () {
    
    }, 3000);
  }
  
  loadingBios(){
    document.getElementById('bios-loading').style.display = 'block';
  }
  
  loadingOS(){
    document.getElementById('bios-loading').style.display = 'none';
    document.getElementById('os-loading').style.display = 'block';
  }
  
  loadingLoginScreen(){
  
  }
  
  login(){
  
  }
  
  showDesktop(){
  
  }
}


function startScenario () {
  let pc = new PC();
  
  pc.start();
}


