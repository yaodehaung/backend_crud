// main execute
$( document ).ready(function() {
    write();
});


async.waterfall([
  archivemethed,
  testractive
], function(error, response) {
  console.log(response);
});

//function defind

function write(){
  $('#input').on('click',function(e){
    var input = {
     "name": $('#nameInput').val(),
    "post": $('#messageInput').val()
    };

    $.ajax({
      url: '/post',
      type: 'Post',
      data: input,
      error: function(xhr) {
        alert('錯誤');
      },
      success: function(response) {
        // debugger;
        console.log('成功');

        async.waterfall([
          archivemethed,
          testractive
        ], function(error, response) {
          console.log(response);
        });

      }
    });

  })
}


function archivemethed(callback) {
  $.ajax({
    url: "/archive",
    type: 'Get',
    error: function(xhr) {
      alert('錯誤');
    },
    success: function(response) {
      // debugger;
      callback(null, response);

    }
  });
}

function testractive(callback) {
  var ractive = new Ractive({
    el: "#test",
    template: "#ttest",
    data: {
      greeting: callback.posts,
      signedIn: false,
   notSignedIn: true
    }
  });

  ractive.on({
    dm: function (dmv) {
      var c = dmv.context._id;
      $.ajax({
        url: "/remove/" + c ,
        type: 'Get',
        error: function(xhr) {
          alert('錯誤');
        },
        success: function(response) {
          // debugger;

          console.log('成功');

          async.waterfall([
            archivemethed,
            testractive
          ], function(error, response) {
            console.log(response);
          });

        }
      });
    },

    sign: function(dmv){
      var c = dmv.context._id;

      var name = prompt( 'Enter your username to sign in', 'ractive_fan' );
      $.ajax({
        url: "edit/" + c,
        type: 'Post',
        data: {
          'post': name // <-- the $ sign in the parameter name seems unusual, I would avoid it
        },
        error: function(xhr) {
          alert('錯誤');
        },
        success: function(response) {
          // debugger;
          console.log('成功');

          async.waterfall([
            archivemethed,
            testractive
          ], function(error, response) {
            console.log(response);
          });

        }
      });

    }
  });

};
