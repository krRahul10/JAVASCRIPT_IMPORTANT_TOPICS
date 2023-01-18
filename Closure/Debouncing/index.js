//9bb41320

//http://www.omdbapi.com/?apikey=[yourkey]&

async function SearchMovies() {
  try {
    const movie = document.getElementById("query").value;
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=9bb41320&s=${movie}`
    );
    const data = await res.json();
    // console.log("data", data);
    return data.Search;
  } catch (err) {
    console.log("err", err);
  }
}

async function main() {
  const data = await SearchMovies();
  if (data === undefined) return false;
  console.log("data", data);
  appendData(data);
}

let Movie_div = document.getElementById("movies_div");
const appendData = (movies) => {
  Movie_div.innerHTML = "";
  movies.map((elem) => {
    let p = document.createElement("p");
    p.innerText = elem.Title;
    Movie_div.append(p);
  });
};

// func --main()
// delay--1000

// debounce ?
// "a" --> oninput ==> debounce() ==> main("a")==> setTimeout(main,1000)
// "av" --> oninput ==> debounce() ==> main("av")==> setTimeout(main,1000)
// "ave" --> oninput ==> debounce() ==> main("ave")==> setTimeout(main,1000)


let timerId;
function debounce(func, delay) {
  if (timerId) {
    clearInterval(timerId);
  }

  timerId = setTimeout(() => {
    func();
  }, delay);
}
