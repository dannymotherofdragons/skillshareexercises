website = "https://anti-humanss.tumblr.com/"
newString = "the  Batata fliES over the  Rainbow"
newString = newString.toLowerCase();
url = newString.replace("  ", " ")
url = url.split(" ")
url = url.join('-')
url = website + url