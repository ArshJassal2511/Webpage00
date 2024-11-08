<script> <!-- Link to your JavaScript file -->
    // Function to show alert when button is clicked
    document.getElementById('alertButton').addEventListener('click', function() {
        alert('Hello, world!');
    });

    // Function to handle form submission
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        alert(`Name: ${name}, Age: ${age}`);
    });
</script>