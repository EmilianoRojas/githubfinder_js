const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) =>{

  const userText = e.target.value;
  if(userText !== ''){
    github.getUser(userText)
    .then(data =>{
      if(data.profile.message === 'Not Found'){
        //Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else{
        //Show profe
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    //Clear profile
    ui.clearProfile();
  }
})