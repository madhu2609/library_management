let products = {
    data: [
      {
        productName: "Constituion of India-(V.N Khare)",
        category: "History",
        publish: "25/09/2001",
        image: "book.jpg",
      },
      {
        productName: "Communication-(E.Grant)",
        category: "Technology",
        publish: "05/10/20001",
        image: "communication.jpg",
      },
      {
        productName: "A Mothers`s Love-(Anana Phifer)",
        category: "Love",
        publish: "09/02/1999",
        image: "moher.jpg",
      },
      {
        productName: "Fundamentals of Soil Ecology-(Donald Cronin)",
        category: "Environmental",
        publish: "13/01/2010",
        image:"soil.jpg",
      },
      {
        productName: "Our Warming Planet-(David Rind)",
        category: "Environmental",
        publish: "19/09/1990",
        image: "planet.jpg",
      },
      {
        productName: "A Proposal-(cherri)",
        category: "Love",
        publish: "17/03/1987",
        image: "proposal.webp",
      },
      {
        productName: "Physics-(Greg Jacobs)",
        category: "Technology",
        publish: "15/11/2000",
        image: "physics.jpg",
      },
      {
        productName: "Invasion-(Frank Mecklin)",
        category: "History",
        publish: "09/01/1970",
        image: "hitler.jpg",
      },

      {
        productName: "Elon-(Elon Musk)",
        category: "Technology",
        publish: "12/08/1997",
        image: "elon.jpeg",
      },
      {
        productName: "Loss of love-(Eleora Hen)",
        category: "Love",
        publish: "08/10/1990",
        image: "love.avif",
      },
      {
        productName: "Innovation Code-(Jff Degraff)",
        category: "Technology",
        publish: "15/10/2019",
        image: "innovation.png",
      },
      {
        productName: "Modren India-(Murthy.narayana)",
        category: "History",
        publish: "15/07/2000",
        image: "modren.jpg",
      },
      {
        productName: "Science and Technology-(Ravi Agrahari)",
        category: "Technology",
        publish: "10/10/1989",
        image: "science.jpg",
      },
      {
        productName: "Ancient India-(J.l Mehta)",
        category: "History",
        publish: "09/01/1909",
        image: "ancient.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //publish
    let publish = document.createElement("h6");

    publish.innerText = "-"+ i.publish;
    container.appendChild(publish);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category 
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      } 
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };

// chrome  
const scrollElements = document.querySelectorAll(".card");
const throttleCount = document.getElementById('throttle-count');
const scrollCount = document.getElementById('scroll-count');

var throttleTimer;

const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
}

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
var timer=0;
var count=0;
var scroll = 0;

window.addEventListener("scroll", () => { 
  scrollCount.innerHTML = scroll++;
  throttle(() => {
    handleScrollAnimation();
    throttleCount.innerHTML = count++;
  }, 250);
});