// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  if (url === "" || url === undefined || url === null) {
    return "";
  } else {
    let splitted = url.includes("//")
      ? url.split("//")[1].split(".")
      : url.split("/")[0].split(".");
    return splitted[0] === "www" ? splitted[1] : splitted[0];
  }
}

//Test
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("https://youtube.com"));
console.log(domainName("www.xakep.ru"));
console.log(domainName(undefined));
