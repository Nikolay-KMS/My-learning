
async function postCard(data) {  

  const option = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    mode: "cors",
    "body" : JSON.stringify(data)}

  const res = await fetch("https://eobeobd58cj45sc.m.pipedream.net", option)
  .then(response => {
    console.log(response);
    return response;
  })
  .then(res => {
    return res.json();
  });

  // const obj = {
  //   key: 91,
  //   value: {
  //     age:"3",
  //     bodyWeight: "45",
  //     date: false,
  //     description: "7",
  //     doctor: "Cardiologist",
  //     illnesses: "4",
  //     name: "9",
  //     pressure: "65",
  //     state: "Low",
  //     target: "8",
  //   }
  // }
  // const id = obj.key;  
  // console.log({id, ...obj.value})

  const id = res.key;  
  addCardToHtml({id, ...res.value});
}

async function getCards() {

  // const res = await fetch("https://eocpfm06arl4ibn.m.pipedream.net")
  // .then(response => {
  //   console.log(response);
  //   return response;
  // })
  // .then(res => {
  //   return res.json();
  // })
  // .then(response => {
  //   console.log(response)
  //   return response;
  // });

  const obj = {
    6: {
      age: false,
      bodyWeight: false,
      date:"2023-06-28",
      description: "3",
      doctor:"Dentist",
      illnesses : false,
      name :"1",
      pressure :  false,
      state : "Normal",
      target  :  "2",
    },
    27: {
      age: false,
      bodyWeight: false,
      date: "2023-06-14",
      description: "30",
      doctor: "Dentist",
      illnesses: false,
      name: "Petr",
      pressure: false,
      state: "Normal",
      target: "2Gu",
    },
    28: {
      age: 24,
      bodyWeight: false,
      date: "2023-06-14",
      description: "3",
      doctor: "Dentist",
      illnesses: false,
      name: "1",
      pressure: false,
      state: "Normal",
      target: "2",
    }
  }

  // const arrCards = Object.entries(res);
  const arrCards = Object.entries(obj);
  
  arrCards.forEach(elem => addCardToHtml({id:elem[0], ...elem[1]}));
  checkCork();
}

