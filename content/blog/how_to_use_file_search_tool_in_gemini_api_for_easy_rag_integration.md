---
title: "How to Use the File Search Tool in Gemini API for Easy RAG Integration"
description: "Learn how Google's File Search tool in Gemini API simplifies RAG implementation. Build powerful document search systems without managing vector databases or complex embeddings."
date: 2025-11-17T14:00:00+05:30
draft: false
tags: ["Gemini API", "RAG", "File Search", "AI", "Google AI", "LLM"]
categories: ["Technology", "AI Tools", "Development"]
og_image: "images/how_to_use_file_search_tool_in_gemini_api_for_easy_rag_integration/gemini_file_search_banner.webp"
schemahowto: "PHNjcmlwdCB0eXBlPSJhcHBsaWNhdGlvbi9sZCtqc29uIj4KewogICJAY29udGV4dCI6ICJodHRwczovL3NjaGVtYS5vcmciLAogICJAdHlwZSI6ICJIb3dUbyIsCiAgIm5hbWUiOiAiSG93IHRvIFVzZSB0aGUgRmlsZSBTZWFyY2ggVG9vbCBpbiBHZW1pbmkgQVBJIGZvciBFYXN5IFJBRyBJbnRlZ3JhdGlvbiIsCiAgImRlc2NyaXB0aW9uIjogIlN0ZXAtYnktc3RlcCB0dXRvcmlhbCB0byBpbXBsZW1lbnQgUmV0cmlldmFsIEF1Z21lbnRlZCBHZW5lcmF0aW9uIChSQUcpIHVzaW5nIEdvb2dsZSdzIEZpbGUgU2VhcmNoIHRvb2wgaW4gR2VtaW5pIEFQSS4gTGVhcm4gaG93IHRvIGluc3RhbGwgdGhlIHBhY2thZ2UsIGdldCB5b3VyIEFQSSBrZXksIHVwbG9hZCBkb2N1bWVudHMsIGFuZCBxdWVyeSB0aGVtIHdpdGggY29tcGxldGUgd29ya2luZyBjb2Rlw6LCgMKUbm8gdmVjdG9yIGRhdGFiYXNlIG1hbmFnZW1lbnQgbmVlZGVkLiIsCiAgInN0ZXAiOiBbCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJJbnN0YWxsIHRoZSBHb29nbGUgR2VuQUkgUGFja2FnZSIsCiAgICAgICJ0ZXh0IjogIkluc3RhbGwgdGhlIGdvb2dsZS1nZW5haSBQeXRob24gcGFja2FnZSB1c2luZyBwaXAuIFRoaXMgc2luZ2xlIHBhY2thZ2UgcHJvdmlkZXMgZXZlcnl0aGluZyB5b3UgbmVlZCB0byB3b3JrIHdpdGggR2VtaW5pJ3MgRmlsZSBTZWFyY2ggQVBJLiIsCiAgICAgICJpdGVtTGlzdEVsZW1lbnQiOiBbewogICAgICAgICJAdHlwZSI6ICJIb3dUb0RpcmVjdGlvbiIsCiAgICAgICAgInRleHQiOiAiUnVuOiBwaXAgaW5zdGFsbCBnb29nbGUtZ2VuYWkiCiAgICAgIH1dCiAgICB9LAogICAgewogICAgICAiQHR5cGUiOiAiSG93VG9TdGVwIiwKICAgICAgIm5hbWUiOiAiR2V0IFlvdXIgR2VtaW5pIEFQSSBLZXkiLAogICAgICAidGV4dCI6ICJWaXNpdCBodHRwczovL2Fpc3R1ZGlvLmdvb2dsZS5jb20vYXBpLWtleXMsIHNpZ24gaW4gd2l0aCB5b3VyIEdvb2dsZSBhY2NvdW50LCBjbGljayAnQ3JlYXRlIEFQSSBLZXknLCBhbmQgY29weSB5b3VyIEFQSSBrZXkgdG8ga2VlcCBpdCBzZWN1cmUuIiwKICAgICAgIml0ZW1MaXN0RWxlbWVudCI6IFt7CiAgICAgICAgIkB0eXBlIjogIkhvd1RvRGlyZWN0aW9uIiwKICAgICAgICAidGV4dCI6ICJWaXNpdCBHb29nbGUgQUkgU3R1ZGlvIGFuZCBjcmVhdGUgYW4gQVBJIGtleSIKICAgICAgfV0KICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJDcmVhdGUgWW91ciBTYW1wbGUgRG9jdW1lbnQiLAogICAgICAidGV4dCI6ICJDcmVhdGUgYSBzYW1wbGUudHh0IGZpbGUgd2l0aCBjb250ZW50IHlvdSB3YW50IHRvIHNlYXJjaC4gVGhpcyBjYW4gYmUgYW55IHRleHQgZG9jdW1lbnQsIFBERiwgb3Igc3VwcG9ydGVkIGZpbGUgZm9ybWF0IHVwIHRvIDEwMCBNQi4iLAogICAgICAiaXRlbUxpc3RFbGVtZW50IjogW3sKICAgICAgICAiQHR5cGUiOiAiSG93VG9EaXJlY3Rpb24iLAogICAgICAgICJ0ZXh0IjogIkNyZWF0ZSBhIHRleHQgZmlsZSB3aXRoIHlvdXIgY29udGVudCIKICAgICAgfV0KICAgIH0sCiAgICB7CiAgICAgICJAdHlwZSI6ICJIb3dUb1N0ZXAiLAogICAgICAibmFtZSI6ICJSdW4gdGhlIENvZGUiLAogICAgICAidGV4dCI6ICJFeGVjdXRlIHRoZSBQeXRob24gc2NyaXB0IHRvIHNlZSBGaWxlIFNlYXJjaCBpbiBhY3Rpb24uIFRoZSBzY3JpcHQgd2lsbCBjcmVhdGUgYSBzdG9yZSwgdXBsb2FkIHlvdXIgZG9jdW1lbnQsIHByb2Nlc3MgYSBxdWVyeSwgZGlzcGxheSB0aGUgcmVzcG9uc2Ugd2l0aCBjaXRhdGlvbnMsIGFuZCBjbGVhbiB1cCByZXNvdXJjZXMuIiwKICAgICAgIml0ZW1MaXN0RWxlbWVudCI6IFt7CiAgICAgICAgIkB0eXBlIjogIkhvd1RvRGlyZWN0aW9uIiwKICAgICAgICAidGV4dCI6ICJSdW46IHB5dGhvbiB0ZXN0X2ZpbGVfc2VhcmNoLnB5IgogICAgICB9XQogICAgfQogIF0sCiAgInRvdGFsVGltZSI6ICJQVDEwTSIKfQo8L3NjcmlwdD4="
outputs:
  - HTML
  - AMP
---

{{< image "how_to_use_file_search_tool_in_gemini_api_for_easy_rag_integration/gemini_file_search_banner.webp" "How to Use the File Search Tool in Gemini API for Easy RAG Integration" >}}

Building a Retrieval Augmented Generation (RAG) system has traditionally been complex managing vector databases, embeddings, and chunking strategies. {{< link  href="https://blog.google/technology/developers/file-search-gemini-api/" >}} Google's File Search tool {{< /link >}} in the Gemini API simplifies this by providing a fully managed RAG solution. This tutorial shows you exactly how to install, configure, and use it with complete working code.

{{% tldr %}}
- Install and set up the Gemini API with File Search in minutes
- Get complete working code to upload documents and query them with RAG
- Follow a step-by-step guide from API key generation to running queries
- No vector database management or embedding configuration needed
{{% /tldr %}}

## Prerequisites: What You Need Before Starting

Before we dive into the code, make sure you have **Python 3.8 or higher** installed on your system. You'll also need a **Google Gemini API key**, which you can get for free from {{< link href="https://aistudio.google.com/api-keys" >}} Google AI Studio {{< /link >}}. Finally, basic command line knowledge will help you run the Python scripts smoothly.

## Step 1: Install the Google GenAI Package

First, install the required package. Open your terminal and run:

```bash
pip install google-genai
```

This single package provides everything you need to work with Gemini's File Search API.

## Step 2: Get Your Gemini API Key

Visit {{< link href="https://aistudio.google.com/api-keys" >}} https://aistudio.google.com/api-keys {{< /link >}} and sign in with your Google account. Click "Create API Key" and copy your API key to keep it secure.

**Important:** Replace `"YOUR_API_KEY_HERE"` in the code below with your actual API key.

## Step 3: Create Your Sample Document

Create a file named `sample.txt` with some content. For this example, we'll use information about a book:

```text
I, Claudius is a historical novel by English writer Robert Graves, published in 1934.
Written in the form of an autobiography of the Roman Emperor Claudius, it tells the
history of the Julio-Claudian dynasty and the Roman Empire from Julius Caesar's
assassination in 44 BC to Caligula's assassination in AD 41.

The book is written as a first-person narrative of the life of Roman Emperor Claudius.
Graves portrays Claudius as a sympathetic character rather than the bumbling idiot that
he is often depicted as in history.
```

Save this file in the same directory where you'll run your Python script.

## Step 4: Complete Working Code

Here's the complete Python script that demonstrates File Search from start to finish. This code creates a store, uploads a document, queries it, and cleans up afterward.

Create a file named `file_search_demo.py`:

```python
from google import genai
from google.genai import types
import time
import os

# Initialize the client with your API key
# Replace "YOUR_API_KEY_HERE" with your actual API key from https://aistudio.google.com/api-keys
client = genai.Client(api_key="YOUR_API_KEY_HERE")

print("Starting File Search test...\n")

# Step 1: Create the File Search store with a display name
print("1. Creating File Search store...")
file_search_store = client.file_search_stores.create(
    config={'display_name': 'test-file-search-store'}
)
print(f"   Created store: {file_search_store.name}\n")

# Step 2: Upload and import a file into the File Search store
print("2. Uploading and importing sample.txt file...")
operation = client.file_search_stores.upload_to_file_search_store(
    file='sample.txt',
    file_search_store_name=file_search_store.name,
    config={
        'display_name': 'I, Claudius - Sample',
    }
)

# Step 3: Wait until import is complete
print("   Waiting for import to complete...")
while not operation.done:
    time.sleep(2)
    operation = client.operations.get(operation)

print(f"   Import completed!\n")

# Step 4: Ask a question about the file using File Search
print("3. Querying the file with a question about Robert Graves...")
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Can you tell me about Robert Graves and his work 'I, Claudius'?",
    config=types.GenerateContentConfig(
        tools=[
            types.Tool(
                file_search=types.FileSearch(
                    file_search_store_names=[file_search_store.name]
                )
            )
        ]
    )
)

print("Response from Gemini API:")
print("-" * 50)
print(response.text)
print("-" * 50)

# Step 5: Display citation metadata if available
print("\nCitation metadata:")
if response.candidates and response.candidates[0].grounding_metadata:
    print(response.candidates[0].grounding_metadata)
else:
    print("No grounding metadata available")

# Step 6: Clean up - delete the File Search store
print("\n4. Cleaning up - deleting File Search store...")
client.file_search_stores.delete(
    name=file_search_store.name,
    config={'force': True}
)
print(f"   Deleted store: {file_search_store.name}")

print("\nTest completed successfully!")
```

**[Add screenshot of the code here]**

## Step 5: Run the Code

1. Make sure `sample.txt` is in the same directory as your Python script
2. Replace `"YOUR_API_KEY_HERE"` with your actual API key
3. Run the script:

```bash
python file_search_demo.py
```

{{< image "how_to_use_file_search_tool_in_gemini_api_for_easy_rag_integration/rag_code_ss.webp" "Complete working code for RAG using Gemini API" >}}

## Expected Output

When you run the script, you should see output similar to this:

{{< image "how_to_use_file_search_tool_in_gemini_api_for_easy_rag_integration/gemini_output_1.webp" "Code output for RAG using Gemini API 1" >}}


{{< image "how_to_use_file_search_tool_in_gemini_api_for_easy_rag_integration/gemini_output_2.webp" "Code output for RAG using Gemini API 2" >}}

## How It Works Behind the Scenes

Understanding the process helps you use File Search more effectively. When you upload a file, it's automatically split into smaller chunks. Each chunk is then converted into vector embeddings that capture semantic meaning, and these embeddings are stored in the File Search Store, which is essentially a managed vector database. When you ask a question, your query is converted to an embedding, and the system finds the most relevant chunks based on similarity. Finally, these retrieved chunks are provided as context to Gemini, which generates a grounded answer based on your actual documents.

{{< image "how_to_use_file_search_tool_in_gemini_api_for_easy_rag_integration/google_file_search.webp" "How File Search Works Under the Hood" >}}

## What File Formats Are Supported?

File Search supports {{< link href="https://ai.google.dev/gemini-api/docs/file-search#supported_file_formats" >}} a wide range of formats {{< /link >}} including text files (.txt, .md, .html), documents (.pdf, .doc, .docx), spreadsheets (.csv, .xlsx, .xls), presentations (.pptx), and code files (.py, .js, .java, .cpp, and more). Each file can be up to **100 MB** in size, which is sufficient for most use cases.

## Advanced: Custom Chunking and Metadata

For more control, you can customize how documents are processed:

### Custom Chunking

```python
# Upload with custom chunking configuration
operation = client.file_search_stores.upload_to_file_search_store(
    file_search_store_name=file_search_store.name,
    file='sample.txt',
    config={
        'chunking_config': {
            'white_space_config': {
                'max_tokens_per_chunk': 200,
                'max_overlap_tokens': 20
            }
        }
    }
)
```

### Metadata Filtering

Add metadata to organize and filter your documents:

```python
# Import file with custom metadata
operation = client.file_search_stores.import_file(
    file_search_store_name=file_search_store.name,
    file_name=sample_file.name,
    custom_metadata=[
        {"key": "author", "string_value": "Robert Graves"},
        {"key": "year", "numeric_value": 1934}
    ]
)

# Query with metadata filter
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Tell me about the book 'I, Claudius'",
    config=types.GenerateContentConfig(
        tools=[
            types.Tool(
                file_search=types.FileSearch(
                    file_search_store_names=[file_search_store.name],
                    metadata_filter="author=Robert Graves",
                )
            )
        ]
    )
)
```
## Common Use Cases

File Search is perfect for building **customer support systems** that search through product documentation, FAQs, and knowledge bases to provide instant, accurate answers. **Legal teams** can use it to query contracts, case law, and regulations efficiently. **Researchers** benefit from searching through academic papers and research notes with natural language queries. Developers can build intelligent **documentation search tools** that understand context, while companies can create **internal knowledge management systems** by indexing wikis and meeting notes. **Educational platforms** can create interactive learning experiences where students ask questions about course materials and receive contextually relevant answers.

## Complete Code Repository

For the complete working code with the sample text file, visit:
{{< link href="https://github.com/Moksh45/Gemini-Rag-File-Search" >}} https://github.com/Moksh45/Gemini-Rag-File-Search {{< /link >}}

## Conclusion

Google's File Search makes RAG accessible to any developer. Instead of spending days setting up vector databases and embedding pipelines, you can have a working RAG system in minutes. This tutorial walked you through the complete process from installing the package and getting your API key to running a full RAG workflow with document upload, querying, and cleanup.

The power of File Search lies in its simplicity. You don't need to be an expert in embeddings, vector databases, or semantic search. Google handles all the complexity, letting you focus on building great applications. Whether you're creating a customer support bot, a research tool, or an internal knowledge system, File Search provides the foundation you need.

This is the future of document search simple, powerful, and ready to use. Start with the code in this tutorial, experiment with your own documents, and build something amazing.
