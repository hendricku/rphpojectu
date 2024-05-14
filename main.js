// Add shadow to header on scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
});

// Filter posts
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});


function resetFilters() {
    $(".post-box").show("1000");
    $(".filter-item").removeClass("active-filter");
}


$(".post-img, .post-title").click(function () {
    var modal = document.getElementById("myModal");
    var imgSrc = $(this).closest(".post-box").find(".post-img").attr("src");
    var title = $(this).text();
    var date = $(this).siblings(".post-date").text();
    var descriptionHTML = $(this).siblings(".post-description").html();
    var profileName = $(this).closest(".post-box").find(".profile-name").text();
    $("#modalImg").attr("src", imgSrc);
    $("#modalTitle").text(title);
    $("#modalDate").text(date);
    $("#modalDescription").html(descriptionHTML);
    $("#modalProfileName").text(profileName);
    modal.style.display = "block";
});


$(document).ready(function () {

    $(".post-title").click(function () {

        $(this).closest(".post-box").toggleClass("expanded");
    });


    $(".post-description").click(function () {

        var fullDescription = $(this).html();


        $("#modalDescription").html(fullDescription);


        $("#myModal").css("display", "block");
    });


    $(".close").click(function () {
        $("#myModal").css("display", "none");
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            $("#myModal").css("display", "none");
        }
    }
});

$(".btn2").click(function () {
    
    var btn2Modal = document.getElementById("btn2Modal");
    var fullDescription = `
        <!-- Your long description content goes here -->
        <pre class="title-text truncated">
       <h3 class="" style="font-size: 30px; color: rgb(77, 95, 255);">Who Was José Rizal?</h3>While living in Europe, José Rizal wrote about the discrimination that accompanied Spain's colonial rule of his country. He returned to the Philippines in 1892 but was exiled due to his desire for reform. Although he supported peaceful change, Rizal was convicted of sedition and executed on December 30, 1896, at age 35.
       <h3 class="category" style="font-size: 30px; color: rgb(77, 95, 255);">Early Life:</h3>On June 19, 1861, José Protasio Rizal Mercado y Alonso Realonda was born in Calamba in the Philippines' Laguna Province. A brilliant student who became proficient in multiple languages, José Rizal studied medicine in Manila. In 1882, he traveled to Spain to complete his medical degree.
       <h3 class="category" style="font-size: 30px; color: rgb(77, 95, 255);">Writing and Reform:</h3>While in Europe, José Rizal became part of the Propaganda Movement, connecting with other Filipinos who wanted reform. He also wrote his first novel, Noli Me Tangere (Touch Me Not/The Social Cancer), a work that detailed the dark aspects of Spain's colonial rule in the Philippines, with particular focus on the role of Catholic friars. The book was banned in the Philippines, though copies were smuggled in. Because of this novel, Rizal's return to the Philippines in 1887 was cut short when he was targeted by police.
        Rizal returned to Europe and continued to write, releasing his follow-up novel, El Filibusterismo (The Reign of Greed) in 1891. He also published articles in La Solidaridad, a paper aligned with the Propaganda Movement. The reforms Rizal advocated for did not include independence—he called for equal treatment of Filipinos, limiting the power of Spanish friars and representation for the Philippines in the Spanish Cortes (Spain's parliament).
        <h3 class="category" style="font-size: 30px; color: rgb(77, 95, 255);">Exile in the Philippines:</h3>Rizal returned to the Philippines in 1892, feeling he needed to be in the country to effect change. Although the reform society he founded, the Liga Filipino (Philippine League), supported non-violent action, Rizal was still exiled to Dapitan, on the island of Mindanao. During the four years Rizal was in exile, he practiced medicine and took on students.
        <h3 class="category" style="font-size: 30px; color: rgb(77, 95, 255);">Execution and Legacy:</h3>In 1895, Rizal asked for permission to travel to Cuba as an army doctor. His request was approved, but in August 1896, Katipunan, a nationalist Filipino society founded by Andres Bonifacio, revolted. Though he had no ties to the group and disapproved of its violent methods, Rizal was arrested shortly thereafter.
        After a show trial, Rizal was convicted of sedition and sentenced to death by firing squad. Rizal's public execution was carried out in Manila on December 30, 1896, when he was 35 years old. His execution created more opposition to Spanish rule.
        Spain's control of the Philippines ended in 1898, though the country did not gain lasting independence until after World War II. Rizal remains a nationalist icon in the Philippines for helping the country take its first steps toward independence.
        
        </pre>
    `;
    document.getElementById("josePic").src = ($("#joseImg").attr("src"));
    $("#btn2Description").html(fullDescription);
    btn2Modal.style.display = "block";
});


$(".close").click(function () {
    $("#btn2Modal").css("display", "none");
});

window.onclick = function (event) {
    var btn2Modal = document.getElementById("btn2Modal");
    if (event.target == btn2Modal) {
        btn2Modal.style.display = "none";
    }
};



function truncateText(text, limit) {

    const words = text.split(" ");


    if (words.length <= limit) {
        return text;
    }

    return words.slice(0, limit).join(" ") + " ...";
}

const elements = document.querySelectorAll('.title-text.truncated');


elements.forEach(function (element) {

    const originalText = element.textContent.trim();


    const truncatedText = truncateText(originalText, 100);

    element.textContent = truncatedText;
});
