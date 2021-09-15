const getData=()=>
{
axios.get('http://localhost:8080/send_message').then(Response=>
{
    console.log(Response);
})
};


const sendData=()=>
{
    axios.post('http://localhost:8080/send_message', {
        message: $('#msg').val()
      
      })
      .then(function (response) {
        console.log(response);


        $('.chat-area').append(
          `<div class="out-msg">
          <span class="my-msg">${$('#msg').val()}</span>
          <img src="img/me.jpg" class="avatar">
          </div>`

)
      })
      .catch(function (error) {
        console.log(error);
      });

    }
