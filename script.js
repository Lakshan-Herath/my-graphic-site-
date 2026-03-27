// බොත්තම එබූ විට පණිවිඩයක් පෙන්වීම
function welcomeMessage() {
    alert("Graphic Design පාඨමාලාවට ඔබව සාදරයෙන් පිළිගනිමු!");
}
const btn = document.getElementById('darkModeBtn');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
// Form එක Submit කරන විට ක්‍රියාත්මක වන කොටස
document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault(); // පිටුව Refresh වීම වළක්වයි

    // Form එකේ තියෙන දත්ත ලබාගැනීම
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;

    // සරල පරීක්ෂාවක් (Validation)
    if (phone.length < 10) {
        alert("කරුණාකර නිවැරදි දුරකථන අංකයක් ඇතුළත් කරන්න.");
        return;
    }

    // සාර්ථක පණිවිඩය පෙන්වීම
    alert("ස්තූතියි " + name + "!\nඔබ " + course + " පාඨමාලාව සඳහා සාර්ථකව ලියාපදිංචි වුණා. අපි ඉක්මනින් ඔබව සම්බන්ධ කරගන්නම්.");
    
    // Form එක හිස් කිරීම
    this.reset();
});
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            reveals[i].classList.add('active');
        }
    }
}
window.onload = function() {
    document.getElementById('loader').style.display = 'none';
};
// පාඨමාලාව ආරම්භ වන දිනය මෙහි සඳහන් කරන්න
const startDate = new Date("August 10, 2026 08:30:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = startDate - now;

    // කාලය ගණනය කිරීම
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML එකට දත්ත ඇතුළත් කිරීම
    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    // කාලය අවසන් වූ විට
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "පාඨමාලාව ආරම්භ වී ඇත!";
    }
}, 1000);
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
// Admin පරීක්ෂා කිරීම
function checkAdmin() {
    let password = prompt("Admin මුරපදය ඇතුළත් කරන්න:");
    if (password === "1234") { // ඔබට කැමති Password එකක් මෙතනට දාන්න
        document.getElementById('adminPanel').style.display = 'block';
        alert("සාදරයෙන් පිළිගනිමු Admin!");
    } else {
        alert("මුරපදය වැරදියි!");
    }
}

// අලුත් පාඩමක් එකතු කිරීම
function addLesson() {
    let title = document.getElementById('newLesson').value;
    let link = document.getElementById('videoLink').value;

    if (title === "" || link === "") {
        alert("කරුණාකර සියලු විස්තර පුරවන්න.");
        return;
    }

    let lessonData = { title: title, link: link };
    
    // LocalStorage එකේ Save කිරීම
    let lessons = JSON.parse(localStorage.getItem('myLessons')) || [];
    lessons.push(lessonData);
    localStorage.setItem('myLessons', JSON.stringify(lessons));

    displayLessons();
    alert("පාඩම සාර්ථකව එකතු කළා!");
}

// පාඩම් පෙන්වීම
function displayLessons() {
    let lessons = JSON.parse(localStorage.getItem('myLessons')) || [];
    let container = document.getElementById('dynamicLessons');
    container.innerHTML = "<h3>එකතු කළ පාඩම්</h3>";

    lessons.forEach((item) => {
        container.innerHTML += `
            <div class="lesson-card" style="background:#f9f9f9; padding:15px; margin:10px 0; border-radius:10px;">
                <h4>${item.title}</h4>
                <iframe width="100%" src="https://www.youtube.com/embed/${item.link}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    });
}

// පිටුව Load වන විට පාඩම් පෙන්වන්න
window.onload = function() {
    displayLessons();
};
function showNotification() {
    const notification = document.createElement("div");
    notification.className = "toast-notification";
    notification.innerHTML = "🔥 ඉක්මන් කරන්න! තව අසුන් 5ක් පමණයි ඉතිරිව ඇත්තේ.";
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// පිටුව Load වී තත්පර 3කට පසු පෙන්වන්න
window.addEventListener('load', () => {
    setTimeout(showNotification, 3000);
});
function sendReceiptToWhatsApp() {
    let msg = "මම පාඨමාලාව සඳහා ගෙවීම් සිදු කළා. මෙන්න මගේ රිසිට්පත.";
    window.open(`https://wa.me/947XXXXXXXX?text=${encodeURIComponent(msg)}`, '_blank');
}
const toggleSwitch = document.querySelector('#checkbox');
toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}, false);
// මේකෙන් වෙන්නේ පාඩම් 5කින් කීයක් ඉවරද කියලා පෙන්වන එක (උදාහරණයකට)
function updateProgress(done) {
    let total = 5; 
    let percentage = (done / total) * 100;
    document.getElementById("myBar").style.width = percentage + "%";
    document.getElementById("progressText").innerHTML = Math.round(percentage) + "%";
}
// දැනට පාඩම් 2ක් ඉවරයි නම්:
updateProgress(2);
function generateCertificate() {
    let name = document.getElementById("studentName").value;
    if (name === "") {
        alert("කරුණාකර ඔබේ නම ඇතුළත් කරන්න.");
        return;
    }
    document.getElementById("displayCertName").innerHTML = name;
    document.getElementById("certificateArea").style.display = "block";
}

function printCertificate() {
    // සහතිකය පමණක් Print කිරීමට හෝ PDF ලෙස Save කිරීමට
    window.print();
}
let currentReview = 0;
const reviews = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.dot');

function currentSlide(n) {
    reviews[currentReview].classList.remove('active');
    dots[currentReview].classList.remove('active');
    
    currentReview = n;
    
    reviews[currentReview].classList.add('active');
    dots[currentReview].classList.add('active');
}

// තත්පර 5කට වරක් ඉබේම මාරු වීමට
setInterval(() => {
    let next = (currentReview + 1) % reviews.length;
    currentSlide(next);
}, 5000);
function toggleChat() {
    let box = document.getElementById("chatBox");
    box.style.display = (box.style.display === "none") ? "flex" : "none";
}

function sendChat() {
    let input = document.getElementById("chatInput");
    let logs = document.getElementById("chatLogs");

    if (input.value.trim() === "") return;

    // User Message
    logs.innerHTML += `<div class="chat-msg user">${input.value}</div>`;
    
    let userText = input.value.toLowerCase();
    let aiResponse = "සමාවන්න, මට ඒක තේරුණේ නැහැ. කරුණාකර වෙනත් ප්‍රශ්නයක් අහන්න.";

    // Simple AI Logic
    if (userText.includes("කොහොමද") || userText.includes("hi")) {
        aiResponse = "මම හොඳින්! ඔබට ග්‍රැෆික් නිර්මාණය ගැන දැනගන්න ඕනේ මොනවද?";
    } else if (userText.includes("class") || userText.includes("පන්තිය")) {
        aiResponse = "අපේ පන්තිය සෑම ඉරිදාවකම උදේ 8.30 ට Zoom හරහා පැවැත්වෙනවා.";
    } else if (userText.includes("photoshop")) {
        aiResponse = "Photoshop කියන්නේ ලෝකයේ හොඳම Photo Editing මෘදුකාංගයයි. අපි ඒක මුල සිට උගන්වනවා.";
    }

    // AI Response (තත්පර 1ක ප්‍රමෝදයකින් පසු)
    setTimeout(() => {
        logs.innerHTML += `<div class="chat-msg ai">${aiResponse}</div>`;
        logs.scrollTop = logs.scrollHeight;
    }, 1000);

    input.value = "";
}
document.addEventListener('mousemove', function(e) {
    let dot = document.createElement('div');
    dot.className = 'magic-dot';
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
    document.body.appendChild(dot);
    
    setTimeout(() => {
        dot.remove();
    }, 800);
});
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}
function createStars() {
    const container = document.getElementById('stars-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(star);
    }
}
createStars(); // මෙය පේජ් එක ලෝඩ් වෙද්දී රන් කරන්න
function generateCertificate() {
    var name = document.getElementById("studentName").value;
    if (name.trim() === "") {
        alert("කරුණාකර නම ඇතුළත් කරන්න!");
        return;
    }
    document.getElementById("display-name").innerText = name;
    document.getElementById("certificate-display").style.display = "block";
}
<section style="text-align: center; padding: 50px;">
    <h2>ඔබේ සහතිකය මෙතැනින් ලබාගන්න</h2>
    <input type="text" id="studentName" placeholder="ඔබේ නම මෙතැන ලියන්න..." style="padding: 10px; border-radius: 5px;">
    <button onclick="generateCertificate()" style="padding: 10px 20px; background: #bc4e9c; color: white; border: none; border-radius: 5px; cursor: pointer;">සහතිකය සාදන්න</button>

    <div id="certificate-display" style="display: none; margin-top: 20px;">
        <div style="width: 500px; height: 350px; background: white; color: black; border: 15px solid #bc4e9c; margin: auto; padding: 20px;">
            <div style="border: 2px solid #333; height: 90%; padding: 20px;">
                <h1>පාඨමාලා සහතිකය</h1>
                <p>මෙයින් සහතික කරනුයේ,</p>
                <h2 id="display-name" style="color: #bc4e9c;">ශිෂ්‍ය නාමය</h2>
                <p>Graphic Design පාඨමාලාව සාර්ථකව නිම කළ බවයි.</p>
            </div>
        </div>
    </div>
</section>
