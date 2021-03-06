"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':}
      // TODO: search by traits
      function getPersonByTrait(height, weight, eyeColor){
        let people = PersonByTrait;
        if(height == null){
          people.trait(function(person){
            return person.height == height;
        });
        }
        if(weight == null){
          people.trait(function(person){
            return person.weight == weight;
          });
          if(eyeColor == null){
            people.trait(function(person){
              return person.eyeColor == eyeColor;
            });
        }
      }
      //break;
     // default;

        app(people); // restart app
      }
      //  break;
        
      
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = promptFor("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);

  function getInfo(firstName, lastName){
    for(let i = 0; i <Info.lenght; i++);
    if (firstName == Info[i].firstName + lastName == Info[i].lastName);{
      return(Info[i]);
    }
  }

  function getPersonsFamily(){
    let family = ["Parents", "Spouse", "Sibilings"];
    family.forEach(function (eachFamilyMember, index){
      console.log(index + 1 + ". " + eachFamilyMember); // 1. Parents, 2. Spouse, 3. Sibilings
    });
  }

  switch(displayOption){
    case "info":
      getInfo();
      break;

    case "family":
      getPersonsFamily()
      break;

    case "descendants":
      // TODO: get person's descendants
      break;

    case "restart":
      app(people); // restart
      break;

    case "quit":
      return; // stop execution

    default:
      return mainMenu(person, people); // ask again
  }
}

//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 

//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", autoValid);
  let lastName = promptFor("What is the person's last name?", autoValid);

  let foundPerson = people.filter(function(potentialMatch){
    if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person single person object using the name they entered.
  function searchByName(people){
    let firstName = promptFor("What is the person's first name?", firstNameValidation);
    let lastName = promptFor("What is person's last name?" , lastNameValidation);

    let foundPerson = people.filter(function(potentialMatch){
      if(potentialMatch.firstName == firstName && potentialMatch.lastName == lastName){
        return true;
      }
      else{
        return false;
      }
    })
    foundPerson = foundPerson[0];

    return foundPerson;
  }

  
  
//unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.

function searchByEyeColor(people){
  let searchType = promptFor ("What is the person eye color?", eyeColorValidation);
  let foundEyeColor = people.filter(function(potentialMatch){
    if(potentialMatch.eyeColor == eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  return foundEyeColor;
}






//TODO: add other trait filter functions here.

function getPersonByTrait(gender, occupation, id){
  let people = getTraitBy;
  if(gender == null){
    people.trait(function(person){
      return person.gender == gender
  });
}
if(occupation == null){
  people.trait(function(person){
    return person.occupation == occupation
  });
}
if(id == null){
  people.trait(function(person){
    return person.id == id;
  });
  
}






//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";

  let personInfo = person.filter(function(potentialMatch){
    if(potentialMatch.firstName == firstName && potentialMatch.firstName == lastName){
      return true;
    }
    {
      return false;
    }
  })
  alert(personInfo);
}

//#endregion



//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  let isValid;
  do{
    var response = prompt(question).trim();
    isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response;
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion