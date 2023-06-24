const closeNote = document.querySelector(".closeBtn"),
newNote = document.querySelector(".addBtn"),
noteBook = document.querySelector(".wrapper"),
openNote = document.querySelector(".model"),
saveText = document.querySelector(".saveText"),
closeText = document.querySelector(".closeText"),
noteList = document.querySelector(".noteList"),
noteListModel = document.querySelector(".noteListModel"),
addNote = document.querySelector(".addNote"),
textBox = document.getElementById("textBox"),
// savedText = document.querySelector(".text p"),
text = document.querySelector(".text"),
savedTextContainer = document.querySelector(".textContainer")

// scrollFunc()
// function scrollFunc(){
//  if(!(savedTextContainer.style.height < 100)){
//      console.log(savedTextContainer.style.height < 10)
//      savedTextContainer.style.overflow = 'scroll'
//     } else {
//      savedTextContainer.style.overflow = 'hidden'
//      alert('greater than 400px')
//  }
// }

closeNote.onclick = function (){
    noteBook.style.display = 'none'
    openNote.style.display = 'flex'
}

openNote.onclick = function (){
    noteBook.style.display = 'unset'
    openNote.style.display = 'none'
}

saveText.onclick = function (){
    let textValue = textBox.value
    let savedText = document.createElement('div')
    savedText.append(textValue)
    savedText.classList.add('text')
    // text.appendChild(savedText)
    console.log(savedTextContainer.appendChild(savedText))
    
}
noteList.onclick = function (){
    noteListModel.classList.toggle('active')
    console.log('hello')
}
noteListModel.onclick = function (){
    noteBook.style.display = 'unset'
    // noteListModel.style.display = 'none'
    addNote.style.display = 'none'
}

closeText.onclick = function (){
    addNote.style.display = 'none'
    openNote.style.display = 'flex'
}

newNote.onclick = function (){
    addNote.style.display = 'unset'
    noteBook.style.display = 'none'
    // addNote.innerHTML += `
    //   <div class="addNote">
    //   <div class="tools">
    //     <div class="saveText">
    //       <button>
    //         <svg
    //           role="img"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24px"
    //           height="24px"
    //           viewBox="0 0 24 24"
    //           aria-labelledby="saveIconTitle"
    //           stroke="#929191"
    //           stroke-width="1.5"
    //           stroke-linecap="square"
    //           stroke-linejoin="miter"
    //           fill="none"
    //           color="#2329D6"
    //         >
    //           <path
    //             d="M17.2928932,3.29289322 L21,7 L21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 L16.5857864,3 C16.8510029,3 17.1053568,3.10535684 17.2928932,3.29289322 Z"
    //           />
    //           <rect width="10" height="8" x="7" y="13" />
    //           <rect width="8" height="5" x="8" y="3" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div class="noteList">...</div>
    //     <div class="closeText">
    //       <button>
    //         <svg
    //           role="img"
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="25px"
    //           height="25px"
    //           viewBox="0 0 24 24"
    //           aria-labelledby="exitIconTitle"
    //           stroke="#929191"
    //           stroke-width="1.5"
    //           stroke-linecap="square"
    //           stroke-linejoin="miter"
    //           fill="none"
    //           color="#2329D6"
    //         >
    //           <path d="M18 15l3-3-3-3" />
    //           <path d="M11.5 12H20" />
    //           <path stroke-linecap="round" d="M21 12h-1" />
    //           <path d="M15 4v16H4V4z" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div class="noteListModel">
    //       <svg
    //         role="img"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="18px"
    //         height="18px"
    //         viewBox="0 0 24 24"
    //         aria-labelledby="listIconTitle"
    //         stroke="#000"
    //         stroke-width="1.5"
    //         stroke-linecap="square"
    //         stroke-linejoin="miter"
    //         fill="none"
    //         color="#2329D6"
    //       >
    //         <title id="listIconTitle" />
    //         <path d="M10 7L18 7M10 12L18 12M10 17L18 17" />
    //         <line x1="7" y1="7" x2="7" y2="7" />
    //         <line x1="7" y1="12" x2="7" y2="12" />
    //         <line x1="7" y1="17" x2="7" y2="17" />
    //       </svg>
    //       <h5>NoteList</h5>
    //     </div>
    //   </div>
    //   <div class="textBox">
    //     <textarea
    //       name="textBox"
    //       id="textBox"
    //       cols="28"
    //       rows="10"
    //       placeholder="Take a note..."
    //       autofocus
    //     ></textarea>
    //   </div>
    // </div>
    // `;
    // noteListModel.style.display = 'flex'

}
