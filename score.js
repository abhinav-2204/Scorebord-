// JavaScript functions to handle button clicks
document.getElementById('leftBtn1').addEventListener('click', function() {
    alert('Left Button 1 clicked!');
});

document.getElementById('leftBtn2').addEventListener('click', function() {
    alert('Left Button 2 clicked!');
});

document.getElementById('leftBtn3').addEventListener('click', function() {
    alert('Left Button 3 clicked!');
});

document.getElementById('rightBtn1').addEventListener('click', function() {
    alert('Right Button 1 clicked!');
});

document.getElementById('rightBtn2').addEventListener('click', function() {
    alert('Right Button 2 clicked!');
});

document.getElementById('rightBtn3').addEventListener('click', function() {
    alert('Right Button 3 clicked!');
});

// Submit and Cancel button actions
document.getElementById('submitButton').addEventListener('click', function() {
    const leftText = document.getElementById('leftTextBox').value;
    const middleText = document.getElementById('inputBox').value;
    const rightText = document.getElementById('rightTextBox').value;
    
    alert(`Submitted!\nLeft: ${leftText}\nMiddle: ${middleText}\nRight: ${rightText}`);
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('leftTextBox').value = '';
    document.getElementById('inputBox').value = '';
    document.getElementById('rightTextBox').value = '';
    
    alert('Canceled!');
});
