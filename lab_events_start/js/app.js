document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // get the submit button 
  const submitButton = document.querySelector('#submit_button');
  submitButton.addEventListener('click', handleSubmitClick);

  // get the ul
  const readingList = document.querySelector('#reading-list');

  // get the title input
  const titleInput = document.querySelector('#title');
  titleInput.addEventListener('input', handleTitleInput);
  
  // get the author input
  const authorInput = document.querySelector('#author');
  authorInput.addEventListener('input', handleAuthorInput);

  // get the category list
  const categoryList = document.querySelector('#category');
  categoryList.addEventListener('change', handleSelectChange);
  
});

// createform()

// initialsie the variables which capture input values and inject into HTML
let newCategory = null;


const handleSubmitClick = function(event) {
  // prevent the browser from reloading because this defults to SUBMIT
  handleAuthorInput();
  handleTitleInput();
  
  event.preventDefault();
  console.log('handleSubmitClick', newTitle, newAuthor, newCategory);
  // createform()
  // FIRST ADD newTitle, newAuthor, newCategory to html 
  // readingList.appendChild(newTitle, newAuthor, newCategory)
};


const handleTitleInput = (event) => {
  let newTitle = null;
  // console.log(`${event.target.value}`);
  return newTitle = `${event.target.value}`;
};


const handleAuthorInput = (event) => {
  let newAuthor = null;
  console.log(`${event.target.value}`)
  return newAuthor = `${event.target.value}`;
};

const handleSelectChange = () => {

};


// get the submit button 
// create a li element  

/*
<li class="reading-card">
<h2 class="title"></h2>
<h3 class="author"></h3>
<span class="category"></span>
</li>

*/
    // const readingCard = document.createElement("li");
    // const readingCardTitle = document.createElement('h2');
    // const readingCardAuthor = document.createElement('h3');



    // ===================== ANGELO & RHIANNON
/*
    const theForm = document.querySelector (‘#new-item-form’);
    theForm.addEventListener (‘submit’, handleFormSubmit);
    
    const handleFormSubmit = function (submission) {
      submission.preventDefault();                                      // USEFUL IN FORMS prevents making HTTP GET REQUESTS (aka reloading the page)
      const newListItem = document.createElement(‘li’);
      newListItem.textContent = `${submission.target.title.value}
      ${submission.target.author.value}
      ${submission.target.category.value}`
      const mario = document.querySelector(‘ul’);
      mario.appendChild(newListItem);
      document.getElementById(‘new-item-form’).reset();
    }

    */