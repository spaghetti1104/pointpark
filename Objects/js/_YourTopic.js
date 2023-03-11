//Function
function Topic(origin,capitol,population,food,drink,econ,whereIBorn,favFood,place,exp,){
    this.origin=origin;
    this.capitol=capitol;
    this.population=population;
    this.food=food;
    this.drink=drink;
    this.economy=econ;
    this.whereIBorn=whereIBorn;
    this.favFood=favFood;
    this.place=place;
    this.exp=exp;
}
var Vietnam = new Topic("Vietnam","Ha Noi",96000000,"Pho, Banh Mi,...","Vietnam Milk Coffee, Vietnam Egg Coffee","developing","Ho Chi Minh city","Pho","Ha Long Bay","coffee and rice");
//write
document.write("<img src='./images/Vietnam.jpg.webp', width=300, lenght= 300>");
document.write("<br>");
document.write("<b><font size = 8>");
document.write("Hello, I am from " + Vietnam.origin);
document.write("</b></font size>");
document.write("<font size = 5>");
document.write("<br>");
document.write("The captiol of Vietnam is " + Vietnam.capitol);
document.write("<br>");
document.write("Vietnam has a population of " +  Vietnam.population);
document.write("<br>");
document.write("Famous food in Vietnam are: " + Vietnam.food);
document.write("<br>");
document.write("Famous drinks in Vietnam are: " + Vietnam.drink);
document.write("<br>");
document.write("Vietnam is a " + Vietnam.economy + " country");
document.write("<br>");
document.write("My favorite food in Vietnam is " + Vietnam.food);
document.write("<br>");
document.write("Kong: Skull Island was film in Vietnam at " + Vietnam.place);
document.write("<br>");
document.write("Vietnam is one of the world top exporters on: " + Vietnam.exp);
document.write("</font size>");
