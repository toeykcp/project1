
function toBmi() {

    var weight = parseInt(document.getElementById("weight").value)
    var height = parseInt(document.getElementById("height").value);
    var BMI = (weight / ((height / 100) * (height / 100)));
    var range = document.getElementById("range");

    document.getElementById("result").innerHTML = BMI.toFixed(1);

    if (BMI < 18.5) {
        range.innerHTML = "ต่ำกว่าเกณฑ์";
    } else if (BMI >= 18.5 && BMI < 22.9) {
        range.innerHTML = "ปกติสมส่วน";
    } else if (BMI >= 23 && BMI < 24.9) {
        range.innerHTML = "น้ำหนักเกิน";
    }else if (BMI >= 25 && BMI < 29.9) {
        range.innerHTML = "อ้วนระดับ 1";
    } else if (BMI > 30) {
        range.innerHTML = "อ้วนระดับ 2";
    } else {
        range.innterHTML = "ระบบไม่สามารถคำนวนได้";
    }

}

    document.getElementById("convert").addEventListener("click", toBmi, false);


