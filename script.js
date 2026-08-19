const destinations = [

    {
        name: "Goa",
        country: "India",
        description: "Beaches • Nightlife • Adventure",
        price: 8999,
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Manali",
        country: "India",
        description: "Mountains • Snow • Adventure",
        price: 10999,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Kerala",
        country: "India",
        description: "Backwaters • Nature • Culture",
        price: 12999,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Jaipur",
        country: "India",
        description: "History • Forts • Royal Culture",
        price: 7999,
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Kashmir",
        country: "India",
        description: "Lakes • Mountains • Nature",
        price: 15999,
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Mumbai",
        country: "India",
        description: "City • Food • Entertainment",
        price: 6999,
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1000&q=85"
    }

];


const packages = [

    {
        name: "Goa Beach Escape",
        duration: "4 Days / 3 Nights",
        price: 12999,
        rating: "4.8",
        badge: "Popular",
        destination: "Goa",
        image: destinations[0].image
    },

    {
        name: "Manali Adventure",
        duration: "5 Days / 4 Nights",
        price: 16999,
        rating: "4.9",
        badge: "Trending",
        destination: "Manali",
        image: destinations[1].image
    },

    {
        name: "Kerala Escape",
        duration: "6 Days / 5 Nights",
        price: 19999,
        rating: "4.7",
        badge: "Best Value",
        destination: "Kerala",
        image: destinations[2].image
    }

];


const destinationGrid =
    document.getElementById("destinationGrid");

const packageGrid =
    document.getElementById("packageGrid");

const modal =
    document.getElementById("modal");

const modalBody =
    document.getElementById("modalBody");

const toast =
    document.getElementById("toast");


/* DESTINATIONS */

function renderDestinations(list = destinations) {

    destinationGrid.innerHTML = list.map(item => `

        <article class="destination-card">

            <div class="destination-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

                <span class="destination-tag">
                    ${item.country}
                </span>

            </div>


            <div class="card-content">

                <div class="country">
                    ${item.country}
                </div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>


                <div class="card-bottom">

                    <span class="price">
                        From ₹${item.price.toLocaleString("en-IN")}
                    </span>

                    <button
                        class="view-btn"
                        data-destination="${item.name}"
                    >
                        View →
                    </button>

                </div>

            </div>

        </article>

    `).join("");

}


/* PACKAGES */

function renderPackages() {

    packageGrid.innerHTML = packages.map(item => `

        <article class="package-card">

            <div class="package-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >

                <span class="badge">
                    ${item.badge}
                </span>

            </div>


            <div class="package-content">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.duration}
                </p>


                <div class="package-info">

                    <span class="rating">
                        ★ ${item.rating}
                    </span>

                    <strong>
                        ₹${item.price.toLocaleString("en-IN")}
                    </strong>

                </div>


                <button
                    class="book-btn"
                    data-book="${item.destination}"
                >
                    Book Now
                </button>

            </div>

        </article>

    `).join("");

}


/* DESTINATION POPUP */

function showDestination(name) {

    const item =
        destinations.find(
            d => d.name === name
        );

    if (!item) return;


    modalBody.innerHTML = `

        <p class="eyebrow">
            DESTINATION
        </p>

        <h2>
            ${item.name}
        </h2>

        <p>
            ${item.description}.
            Explore local attractions, food,
            culture and memorable experiences.
        </p>

        <br>

        <strong>
            Starting from
            ₹${item.price.toLocaleString("en-IN")}
        </strong>

        <br><br>

        <a
            href="#contact"
            class="primary-btn"
            id="modalPlanBtn"
        >
            Plan My Trip →
        </a>

    `;


    modal.classList.add("active");


    document
        .getElementById("modalPlanBtn")
        .addEventListener("click", () => {

            document.getElementById(
                "destination"
            ).value = item.name;

            closeModal();

        });

}


function closeModal() {

    modal.classList.remove("active");

}


/* TOAST */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* SEARCH */

function searchDestination() {

    const value =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();


    if (!value) {

        renderDestinations();

        showToast(
            "Enter a destination such as Goa or Manali."
        );

        return;
    }


    const result =
        destinations.filter(item =>

            item.name
                .toLowerCase()
                .includes(value)

            ||

            item.description
                .toLowerCase()
                .includes(value)

        );


    renderDestinations(result);


    document
        .getElementById("destinations")
        .scrollIntoView({
            behavior: "smooth"
        });


    if (!result.length) {

        showToast(
            "Destination not found."
        );

    }

}


document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        searchDestination
    );


document
    .getElementById("searchInput")
    .addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                searchDestination();

            }

        }
    );


/* DESTINATION BUTTON */

destinationGrid.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-destination]"
            );

        if (button) {

            showDestination(
                button.dataset.destination
            );

        }

    }
);


/* BOOK BUTTON */

packageGrid.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-book]"
            );

        if (!button) return;


        document.getElementById(
            "destination"
        ).value =
            button.dataset.book;


        document
            .getElementById("contact")
            .scrollIntoView({
                behavior: "smooth"
            });


        showToast(
            `${button.dataset.book} selected.`
        );

    }
);


/* CLOSE MODAL */

document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* ESCAPE */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* MOBILE MENU */

document
    .getElementById("menuBtn")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("navMenu")
                .classList.toggle("active");

        }
    );


/* NAVBAR */

window.addEventListener(
    "scroll",
    () => {

        document
            .getElementById("navbar")
            .classList.toggle(
                "scrolled",
                window.scrollY > 50
            );

    }
);


/* CONTACT FORM */

document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const formMessage =
                document.getElementById(
                    "formMessage"
                );


            formMessage.textContent =
                "Sending enquiry...";


            const data = {

                name:
                    document.getElementById(
                        "name"
                    ).value.trim(),

                email:
                    document.getElementById(
                        "email"
                    ).value.trim(),

                destination:
                    document.getElementById(
                        "destination"
                    ).value,

                message:
                    document.getElementById(
                        "message"
                    ).value.trim()

            };


            try {

                const response =
                    await fetch(
                        "/api/contact",
                        {

                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(data)

                        }
                    );


                const result =
                    await response.json();


                if (!response.ok) {

                    throw new Error(
                        result.error ||
                        "Unable to submit enquiry."
                    );

                }


                formMessage.textContent =
                    result.message;

                formMessage.style.color =
                    "#079486";


                event.target.reset();


                showToast(
                    "Your enquiry was sent successfully!"
                );


            } catch (error) {

                formMessage.textContent =
                    error.message;

                formMessage.style.color =
                    "#b33a3a";

            }

        }
    );


/* INITIALIZE */

renderDestinations();

renderPackages();
