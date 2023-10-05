// Start here

// Step 1 - Welcome and introduction
// Your code goes here
const mainMenu = {
  1: "Pizza",
  2: "Pasta",
  3: "Salad"
};

const subMenu = {
  1 : {
    1: "Nepolitana",
    2: "Hawaian",
    3:  "Pepproni"
  },
  2:  {
    1: "Spaghetti carbonara", 
    2: "Fettuccine Alfredo" ,
    3: "Cheesy Tortellini"

  },
  3:  {
    1: "Caesar Salad", 
    2: "Caprese Salad", 
    3: "Greek Salad"

  }
 
};
let order;

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let name = prompt("Please enter your name:");

alert("Nice to meet you," + name + "!");

let foodOption =parseInt(prompt("Which type of food would you like to order? \n enter a number: \n 1 - Pizza \n 2 - Pasta \n 3 - Salad "));

if(foodOption == 1 || foodOption == 2 || foodOption == 3 )
{
          alert("you have chosen " + mainMenu[foodOption]); 
          let subMenuOption = parseInt(prompt(`Select a ${mainMenu[foodOption]} type \nEnter a number: \n1 - ${subMenu[foodOption][1]} \n2 - ${subMenu[foodOption][2]} \n3 - ${subMenu[foodOption][3]}`));
          if(subMenuOption == 1 || subMenuOption == 2 || subMenuOption == 3 ){

                alert("you have chosen " + subMenu[foodOption][subMenuOption]); 

                let age =parseInt(prompt("Is this food for child or an adult? \n Type your age:"));

              if (age > 18) {
                order = parseInt(prompt(`One adult size ${subMenu[foodOption][subMenuOption]} ${mainMenu[foodOption]} will be prepared for you. \nThat will be £15. Are you sure you want to order this? \nEnter a number to confirm. \n1 - Yes \n2 - No`));
              } else {
                order = parseInt(prompt(`One child size ${subMenu[foodOption][subMenuOption]} ${mainMenu[foodOption]} will be prepared for you. \nThat will be £10. Are you sure you want to order this? \nEnter a number to confirm. \n1 - Yes \n2 - No`));
              }
              if(order == 1){
                  alert(
                    `Thank you for your order. Your delicious meal will be prepared. \n see you soon`
                  )
              }else {
                alert(
                  `No problem. Come back anytime you want`
                );
              }

        }else {
          alert("Invalid "+ mainMenu[foodOption] + " choice");
        }

}
else
 {
  console.log(mainMenu[foodOption]);
  alert("you have entered Invalid number. Please enter a number between 1 and 3");
}
