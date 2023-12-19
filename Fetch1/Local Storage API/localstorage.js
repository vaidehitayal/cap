function saveUserData() {
    var name = document.getElementById('name').value;
      var age = document.getElementById('age').value;

      if (name && age) {
        var userData = { received_name: name, received_age: age };
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('your data saved successfully!');
      } else {
        alert('Please filled both coloumn');
      }
  }

  function retrievData() {
    var userDataString = localStorage.getItem('userData');
    if (userDataString) {
      var userData = JSON.parse(userDataString);

      var table = document.getElementById('userDataTable');
      table.innerHTML = '<tr><th>Name</th><th>Age</th></tr>';
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.textContent = userData.received_name;
      cell2.textContent = userData.received_age;
    } else {
      alert('No user data found');
    }
  }