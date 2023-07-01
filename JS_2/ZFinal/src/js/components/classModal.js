 class Modal {
  constructor() {}
  renderModal() {         // намалювати модалку в ХТМЛ
    document.querySelector('main').insertAdjacentHTML("beforeend", 
      `<div id="modalCreate" class=" bg-opacity-50 w-full top-0 bottom-0 fixed bg-black">
        <div id="modalCreateWindow" class="bg-emerald-950 min-h-[200px] w-1/2 mt-24 rounded-3xl mx-auto">
          <div class="flex justify-between border-b-2">
            <h2 class=" pl-5 py-4 uppercase text-xl">Create an appointment</h2>
            <div id="btnModelClose" class="flex items-center pr-2 cursor-pointer">
              <div class="bg-red-500 w-8 h-0.5 -rotate-45"></div>
              <div class="bg-red-500 w-8 h-0.5 rotate-45 absolute"></div>
            </div>
          </div>          
          <form id="modalCreateInputs" class="mx-auto w-fit pt-4 space-y-5">
            <select name="chooseDoctor" id="chooseDoctor" class="bg-yellow-200 rounded text-slate-900 px-3">
              <option disabled selected value="" class="">Choose a doctor</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dentist">Dentist</option>
              <option value="Therapist">Therapist</option>
            </select>
            <div id="inputs" class="space-y-5"> 

            </div>     
            <div class="flex justify-between pb-4">
              <button  id="btnModelCreate" type="submit" class="mx-1 border rounded px-4 py-2 bg-emerald-800">Create</button>
            </div>
          </form>
        </div>
      </div>`
    );
  }
  closeModal() {        // грохнути модалку
    document.querySelector('#modalCreate').remove();
  }
  editModal(id) {           // намалювати модалку в ХТМЛ, при зміні даних
    document.querySelector('main').insertAdjacentHTML("beforeend", 
      `<div id="modalCreate" class=" bg-opacity-50 w-full top-0 bottom-0 fixed bg-black">
        <div id="modalCreateWindow" class="bg-emerald-950 min-h-[200px] w-1/2 mt-24 rounded-3xl mx-auto">
          <div class="flex justify-between border-b-2">
            <h2 class=" pl-5 py-4 uppercase text-xl">Create an appointment</h2>
            <div id="btnModelClose" class="flex items-center pr-2 cursor-pointer">
              <div class="bg-red-500 w-8 h-0.5 -rotate-45"></div>
              <div class="bg-red-500 w-8 h-0.5 rotate-45 absolute"></div>
            </div>
          </div>          
          <div id="modalCreateInputs" class="mx-auto w-fit pt-4 space-y-5">
            <select name="chooseDoctor" id="chooseDoctor" class="bg-yellow-200 rounded text-slate-900 px-3">
              <option disabled selected value="" class="">Choose a doctor</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dentist">Dentist</option>
              <option value="Therapist">Therapist</option>
            </select>
            <div id="inputs" class="space-y-5"> 

            </div>     
            <div class="flex justify-between pb-4">
              <button  id="btnModelChange" class="mx-1 border rounded px-4 py-2 bg-emerald-800">Change</button>
            </div>
          </div>
        </div>
      </div>`
    );
    document.querySelector('#modalCreate').dataset.id = id;
  }          // а це напевно костиль. для передачі АйДи
}
