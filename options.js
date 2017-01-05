function save_options() {
  var autoLogin = document.getElementById('autologin').checked;
  var user = document.getElementById('user').value;
  var pass = document.getElementById('pass').value;
  
  chrome.storage.sync.set({
    autoLogin: autoLogin,
	user: user,
	pass: pass
  }, function() {
  });
}

function restore_options() {
  chrome.storage.sync.get({
    autoLogin: false,
	user: '',
	pass: ''
  }, function(items) {
    document.getElementById('autologin').checked = items.autoLogin;
	document.getElementById('user').disabled = !items.autoLogin;
	document.getElementById('pass').disabled = !items.autoLogin;
	
	document.getElementById('user').value = items.user;
	document.getElementById('pass').value = items.pass;
	
	
	//ddocument.getElementById('autologin').disabled = true;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('autologin').addEventListener('click', save_options);
document.getElementById('autologin').addEventListener('click', restore_options);
document.getElementById('user').addEventListener('input', save_options);
document.getElementById('pass').addEventListener('input', save_options);

