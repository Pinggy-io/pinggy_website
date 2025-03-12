---
title: "JSON to XML Converter - Free Online Tool"
description: "Easily convert JSON to XML with this free online tool. Fast, accurate, and user-friendly JSON to XML converter for developers and data processing."
date: 2025-03-10T01:15:25+05:30
draft: false
sitename: Pinggy
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwOi8vc2NoZW1hLm9yZyIsCiAgIkB0eXBlIjogIldlYkFwcGxpY2F0aW9uIiwKICAibmFtZSI6ICJKU09OIHRvIFhNTCBDb252ZXJ0ZXIiLAogICJ1cmwiOiAiaHR0cHM6Ly9waW5nZ3kuaW8vdG9vbHMvanNvbl90b194bWwvIiwKICAiZGVzY3JpcHRpb24iOiAiRnJlZSBvbmxpbmUgSlNPTiB0byBYTUwgQ29udmVydGVyIHRoYXQgaXMgZmFzdCwgYWNjdXJhdGUsIGFuZCB1c2VyLWZyaWVuZGx5LiIsCiAgImFwcGxpY2F0aW9uQ2F0ZWdvcnkiOiAiRGV2ZWxvcGVyVG9vbCIsCiAgIm9wZXJhdGluZ1N5c3RlbSI6ICJBbGwiCn0KPC9zY3JpcHQ+"
og_image: "tool_img/json_to_xml/json_to_xml_og_image.webp"
---
<div class="container">
  <p class="lead">Convert your JSON into a well-formatted XML. Simply paste your JSON in the left panel and click convert!</p>
  <div class="row">
    <!-- JSON Input Card -->
    <div class="col-lg-6 mb-6 d-flex">
      <div class="card flex-fill shadow-sm">
        <div class="card-header">
          <strong>JSON Input</strong>
        </div>
        <div class="card-body d-flex flex-column">
          <div class="form-group flex-grow-1">
            <textarea id="jsonInput" class="form-control h-100" style="resize: none;" placeholder='Paste Your Json Here'></textarea>
          </div>
          <button id="convertBtn" class="btn btn-primary btn-block mt-2">Convert</button>
        </div>
      </div>
    </div>
    <!-- XML Output Card -->
    <div class="col-lg-6 mb-6 d-flex">
      <div class="card flex-fill shadow-sm">
        <div class="card-header">
          <strong>XML Output</strong>
        </div>
        <div class="card-body d-flex flex-column">
          <pre id="output" class="h-100">Your formatted XML will appear here...</pre>
          <div class="mt-3 d-flex justify-content-between">
            <button id="copyBtn" class="btn btn-secondary">Copy to Clipboard</button>
            <button id="downloadBtn" class="btn btn-success">Download XML</button>
            <button id="clearBtn" class="btn btn-danger">Clear</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<section id="seo-content" class="mt-2">
  <div class="container">
    <h2>About Our Free JSON to XML Converter</h2>
    <p>
      Our JSON to XML Converter is a 100% free online tool designed to help developers, data analysts, and tech enthusiasts quickly convert JSON data into a well-formatted XML file. It offers an intuitive interface, ensuring a seamless experience whether you’re processing data for integration, debugging, or data migration purposes.
    </p>
    <h3>Key Features</h3>
    <ul>
      <li><strong>Free & Online:</strong> No installation required – access the tool anytime, anywhere.</li>
      <li><strong>Ads Free Experience:</strong> Enjoy a clean and distraction-free interface with no advertisements, letting you focus solely on your conversion tasks.</li>
      <li><strong>Fast & Accurate:</strong> Converts complex JSON structures into readable XML effortlessly.</li>
      <li><strong>User-Friendly:</strong> Simply paste your JSON and click the convert button to get started.</li>
    </ul>
    <h3>Why Use Our Converter?</h3>
    <p>
      Converting JSON to XML is essential when working with legacy systems, APIs, or when a particular platform requires XML formatted data. Our tool bridges that gap without any cost, ensuring you have the right data format for your integration needs.
    </p>
  </div>
</section>
<script>
  window.onload = function () {
    // Recursive function to convert JSON to XML
    function jsonToXml(json, nodeName) {
      var xml = "";
      if (Array.isArray(json)) {
        for (var i = 0; i < json.length; i++) {
          xml += jsonToXml(json[i], nodeName);
        }
      } else if (typeof json === "object" && json !== null) {
        if (nodeName) {
          xml += "<" + nodeName + ">";
        }
        for (var key in json) {
          if (json.hasOwnProperty(key)) {
            xml += jsonToXml(json[key], key);
          }
        }
        if (nodeName) {
          xml += "</" + nodeName + ">";
        }
      } else {
        if (nodeName) {
          xml += "<" + nodeName + ">" + json + "</" + nodeName + ">";
        } else {
          xml += json;
        }
      }
      return xml;
    }
    // Function to format XML string with indentation
    function formatXml(xml) {
      var formatted = '';
      var reg = /(>)(<)(\/*)/g;
      xml = xml.replace(reg, '$1\n$2$3');
      var pad = 0;
      xml.split('\n').forEach(function(node) {
        var indent = 0;
        if (node.match(/.+<\/\w[^>]*>$/)) {
          indent = 0;
        } else if (node.match(/^<\/\w/)) {
          if (pad !== 0) {
            pad -= 1;
          }
        } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
          indent = 1;
        } else {
          indent = 0;
        }
        var padding = new Array(pad + 1).join('  ');
        formatted += padding + node + '\n';
        pad += indent;
      });
      return formatted.trim();
    }
    $(document).ready(function() {
      // Convert JSON to formatted XML on button click
      $("#convertBtn").click(function() {
        $("#alertPlaceholder").empty();
        $("#output").removeClass("text-danger").text("");
        var jsonStr = $("#jsonInput").val();
        try {
          var jsonObj = JSON.parse(jsonStr);
          var rawXml = jsonToXml(jsonObj, "root");
          // Include the XML declaration and format the XML output
          var xmlResult = '<?xml version="1.0" encoding="UTF-8" ?>\n' + formatXml(rawXml);
          $("#output").text(xmlResult);
        } catch (e) {
          $("#output").addClass("text-danger").text("Invalid JSON: " + e.message);
          showAlert("danger", "Invalid JSON: " + e.message);
        }
      });
      // Copy XML output to clipboard
      $("#copyBtn").click(function() {
        var xmlText = $("#output").text();
        if(xmlText.trim() !== "" && !xmlText.includes("Invalid JSON")) {
          navigator.clipboard.writeText(xmlText).then(function() {
            showAlert("success", "XML copied to clipboard!");
          }, function() {
            showAlert("danger", "Failed to copy XML.");
          });
        }
      });
      // Download XML output as a file
      $("#downloadBtn").click(function() {
        var xmlText = $("#output").text();
        if(xmlText.trim() !== "" && !xmlText.includes("Invalid JSON")) {
          var blob = new Blob([xmlText], { type: 'text/xml' });
          var link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "converted.xml";
          link.click();
        }
      });
      $("#clearBtn").click(function() {
        $("#jsonInput").val("");
        $("#output").removeClass("text-danger").text("Your formatted XML will appear here...");
      });
      // Function to display alert messages
      function showAlert(type, message) {
        var alertHtml = '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">' +
                        message +
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
                        '<span aria-hidden="true">&times;</span>' +
                        '</button></div>';
        $("#alertPlaceholder").html(alertHtml);
      }
    });
  }
</script>
<style>
  .card-body {
    min-height: 400px;
  }
  pre {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    padding: 15px;
    overflow: auto;
    margin-bottom: 0;
  }
</style>