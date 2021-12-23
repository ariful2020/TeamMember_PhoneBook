
const dev = document.querySelector('.devs');
const std = document.querySelector('.students');
const phone_Book = document.querySelector('.phone table');

//  ============ Developer Data ===============
devs.map((data) => {

    dev.innerHTML += `
  <div class="devs-items grid-item clear">
    <img class="devs-pic" src="${data.Image}" alt="">
    <h3 class="devs-id">ID NO. 0${data.Id}</h3>
   <div class="dev-des">
<table>
  <tbody>
    <tr>
      <th>NAME</th>
      <th class="dev-name">: ${data.Name}</th>
    </tr>
    <tr>
      <td>Skill</td>
      <td>: ${data.Skill}</td>
    </tr>
    <tr>
      <td>Age</td>
      <td>: ${data.Age} Years</td>
    </tr>
    <tr>
     <td>Location</td>
     <td>: ${data.Location}</td>
    </tr>
  </tbody>
</table>
  
  </div>
   </div>
</div>      
    `
})


// ===================== Student Data ===================
  
std_data.map ((data) => {

  std.innerHTML += `
  <div class="std-item grid-item clear">
  <img class="std-img" src="${data.image}" alt="">
  <h1 class="std-title">${data.name}</h1>
  <div class="std-des">
  <table>
  <tbody>
    <tr>
      <td>Exam</td>
      <td>: ${data.exam}</td>
    </tr>
    <tr>
      <td>Roll</td>
      <td>: ${data.roll}</td>
    </tr>
    <tr>
    <td>Reg</td>
    <td>: ${data.reg}</td>
  </tr>
    <tr>
      <td>Dept. </td>
      <td>: ${data.dep}</td>
    </tr>
    <tr>
      <td>Pass-Year</td>
      <td>: ${data.passYear}</td>
    </tr>
    <tr>
      <td>Board</td>
      <td>: ${data.board}</td>
    </tr>
    <tr>
      <td>Result</td>
      <td>: ${data.result}</td>
    </tr>
  </tbody>
</table>
  </div>
</div> 
  `
})




// ================= Phone Book List ===============

phoneBook.map((data, index ) => {
  phone_Book.innerHTML += `
      <tbody>
        <tr>
          <td>${index + 1}</td>
          <td><img class="pImg" src="${data.Img}" alt=""></td>
          <td>${data.name}</td>
          <td>${data.mobileNO}</td>
          <td>${data.relation}</td>
          <td>${data.location}</td>
        </tr>
      </tbody>
  
  `
})