// Sample array with updated information
var updatedData = [
    "2012345",       // Registration Number
    "John",          // First Name
    "",              // Middle Name
    "Doe",           // Last Name
    "John Doe Sr.",  // Father's Name
    "1980-01-01",    // Date of Birth
    "12345-67890",   // NIC
    "Male",          // Gender
    "A+",            // Blood Group
    "Engineer",      // Father's Occupation
    "ABC Company",   // Father's Organization
    "123 Main St",   // Mailing Address
    "12345",         // Mailing Address Postal Code
    "City",          // Mailing Address City
    "Country",       // Mailing Address Country
    "987654321",     // Home Phone
    "9876543210",    // Mobile
    "City",          // Permanent Address City
    "Emergency Contact",  // Emergency Contact Name
    "987654321"      // Emergency Contact No.
  ];
  
  // Function to update table data
  function updateTableData(data) {
    var table = document.querySelector(".main-table");
    var rows = table.querySelectorAll("tr");
  
    // Iterate over each row (except the first one)
    for (var i = 1; i < rows.length; i++) {
      var th = rows[i].querySelector(".fields");
      var td = rows[i].querySelector("td");
      var input = td.querySelector("input") || td.querySelector("select");
  
      // Update the table data with the corresponding value from the array
      if (th && td && input) {
        var fieldName = th.textContent.trim();
  
        // Find the index of the field name in the array
        var index = getFieldIndex(fieldName);
  
        // Update the value of the input field with the corresponding array value
        if (index !== -1) {
          input.value = data[index];
        }
      }
    }
  }
  
  // Function to find the index of a field name in the array
  function getFieldIndex(fieldName) {
    var fields = [
      "Registration Number",
      "First Name",
      "Middle Name",
      "Last Name",
      "Father's Name",
      "Date of Birth",
      "NIC",
      "Gender",
      "Blood Group",
      "Father's Occupation",
      "Father's Organization",
      "Mailing Address",
      "Mailing Address Postal Code",
      "Mailing Address City",
      "Mailing Address Country",
      "Home Phone",
      "Mobile",
      "Permanent Address City",
      "Emergency Contact Name",
      "Emergency Contact No."
    ];
  
    return fields.indexOf(fieldName);
  }
  
  // Call the updateTableData function with the updatedData array
  updateTableData(updatedData);
  