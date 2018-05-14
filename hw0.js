//create arrays for companies and animals
var comps = ['Lyft','Airtable','Home Depot','Google','Instagram','Twitter'];
var anims = ['pigs','ducks','chickens','cows','goats','sheep','cats','dogs','fish'];
//create a function to randomize companies
function shuffle(comps) {
  var m = comps.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = comps[m];
    comps[m] = comps[i];
    comps[i] = t;
  }
  return comps;
}
//run randomization function on companies
shuffle(comps);
//write function to create an array of articles for each randomized company
function aORan(comps) {
  article = [];
  for (i = 0; i < comps.length; i++){
    var beg = comps[i].charAt(0);
    beg = beg.toLowerCase();
    if (beg.match("a|e|i|o|u|h")) {
      article.push("an");
    }else{
      article.push("a");
    }
  }
  return article;
}
//get articles for each company
aORan(comps);
//output sentence with correct articles, randomized companies, and random animals
for (var i = 0; i < comps.length; i++) {
  console.log("My company is "+ article[i] + " " + comps[i]+ " for " +anims[Math.floor(Math.random()*anims.length)]+ ".");
}
