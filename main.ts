#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// classes player & opponent
class player {
  name: string;
  fuel: number = 100;
  constructor(name: string){
    this.name = name;
  }
  fuelDecrease(){
    let fuel = this.fuel - 25
    this.fuel = fuel 
  }
  fuelIncrease(){
    this.fuel = 100
  }
}
class opponent{
  name: string;
  fuel: number = 100;
  constructor(name: string){
    this.name = name;
  }
  fuelDecrease(){
    let fuel = this.fuel - 25
    this.fuel = fuel 
  }

}
// player name & opponent select
let Player = await inquirer.prompt ({
  type: "input",
  name: "name",
  message: "Please Enter Your Name:"

})

let Opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Select Your Opponent",
  choices: ["Skeleton", "Assassin", "Zombie"]
});

// Gather Data
let p1 = new player(Player.name);
let o1 = new opponent(Opponent.select);

do{
  // skeleton
  if (Opponent.select == "Skeleton") {
    let ask = await inquirer.prompt({
       type: "list",
       name: "opt",
       message: "Select Your Opponent",
       choices: ["Attack", "Drink portion", "Run For Your Life.."],
  
  
      
    });
    if(ask.opt == "Attack") {
      console.log('attack');
      let num = Math.floor(Math.random() * 2)
      if(num > 0) {
       (chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
         p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if(p1.fuel <=  0) {
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
        process.exit()
        }
      }
      if(num <= 0) {
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if(o1.fuel <=  0) {
          console.log(chalk.green.bold.italic("You Win!"));
          process.exit()
          }
      }
    }
    if(ask.opt == "Drink portion") {
      p1.fuelIncrease()
      console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
      
      
    }
    if(ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
      process.exit()
    }
  }
  // Assassin
  if (Opponent.select == "Assassin") {
    let ask = await inquirer.prompt({
       type: "list",
       name: "opt",
       message: "Select Your Opponent",
       choices: ["Attack", "Drink portion", "Run For Your Life.."],
  
  
      
    });
    if(ask.opt == "Attack") {
      console.log('attack');
      let num = Math.floor(Math.random() * 2)
      if(num > 0) {
       (chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
         p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if(p1.fuel <=  0) {
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
        process.exit()
        }
      }
      if(num <= 0) {
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if(o1.fuel <=  0) {
          console.log(chalk.green.bold.italic("You Win!"));
          process.exit()
          }
      }
    }
    if(ask.opt == "Drink portion") {
      p1.fuelIncrease()
      console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
      
      
    }
    if(ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
      process.exit()
    }
  }
  // Zombie
  if (Opponent.select == "Zombie") {
    let ask = await inquirer.prompt({
       type: "list",
       name: "opt",
       message: "Select Your Opponent",
       choices: ["Attack", "Drink portion", "Run For Your Life.."],
  
  
      
    });
    if(ask.opt == "Attack") {
      console.log('attack');
      let num = Math.floor(Math.random() * 2)
      if(num > 0) {
       (chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
         p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if(p1.fuel <=  0) {
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
        process.exit()
        }
      }
      if(num <= 0) {
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if(o1.fuel <=  0) {
          console.log(chalk.green.bold.italic("You Win!"));
          process.exit()
          }
      }
    }
    if(ask.opt == "Drink portion") {
      p1.fuelIncrease()
      console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
      
      
    }
    if(ask.opt == "Run For Your Life..") {
      console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
      process.exit()
    }
  }
}
while(true)