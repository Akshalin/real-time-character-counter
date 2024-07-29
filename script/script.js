document.addEventListener("DOMContentLoaded", function() {
    const txtInput = document.getElementById("text");
    const tCount = document.getElementById("tCount");
    const remainingCount = document.getElementById("rCount");
    const maxChars = 50;

    txtInput.addEventListener("input", function() {
        const currentlength = txtInput.value.length;
        tCount.textContent = currentlength;
        remainingCount.textContent = maxChars - currentLength;
    });
});