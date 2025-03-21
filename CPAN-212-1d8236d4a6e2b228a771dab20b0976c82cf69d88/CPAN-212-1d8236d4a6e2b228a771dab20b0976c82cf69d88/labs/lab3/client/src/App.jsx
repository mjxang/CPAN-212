import { useState } from "react";
import "./App.css";

function App() {
  const [singleFile, setSingleFile] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [dogImage, setDogImage] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE = "http://localhost:3000";

  // Handlers
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  const showMessage = (text, isError = false) => {
    setMessage(text);
    if (isError) {
      console.error(text);
    } else {
      console.log(text);
    }
  };

  // API Functions
  const fetchSingleFile = async () => {
    try {
      setIsLoading(true);
      showMessage("Fetching single file...");
      
      const response = await fetch(`${API_BASE}/fetch/single`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
      showMessage("Image fetched successfully!");
    } catch (error) {
      showMessage(`Error fetching single file: ${error.message}`, true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      showMessage("Please select a file before uploading.", true);
      return;
    }

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("file", singleFile);

      showMessage(`Uploading file: ${singleFile.name}`);
      const response = await fetch(`${API_BASE}/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Upload failed");
      }

      showMessage("File uploaded successfully!");
      
      // Clear the file input
      setSingleFile(null);
      const fileInput = document.getElementById("file-upload");
      if (fileInput) fileInput.value = "";
    } catch (error) {
      showMessage(`Error uploading file: ${error.message}`, true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMultipleFiles = async () => {
    try {
      setIsLoading(true);
      showMessage("Fetching multiple files...");
      setDisplayImages([]);
      
      const response = await fetch(`${API_BASE}/fetch/multiple`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`);
      }

      if (!data.filenames?.length) {
        showMessage("No images available");
        return;
      }

      const imageUrls = await Promise.all(
        data.filenames.map(async (filename) => {
          const fileUrl = `${API_BASE}/uploads/${filename}`;
          const fileResponse = await fetch(fileUrl);
          if (!fileResponse.ok) {
            throw new Error(`Failed to fetch image ${filename}`);
          }
          const blob = await fileResponse.blob();
          return URL.createObjectURL(blob);
        })
      );

      setDisplayImages(imageUrls);
      showMessage(`Successfully loaded ${imageUrls.length} images!`);
    } catch (error) {
      showMessage(error.message, true);
      setDisplayImages([]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDogImage = async () => {
    try {
      setIsLoading(true);
      showMessage("Fetching dog image...");
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
      showMessage("Dog image fetched successfully!");
    } catch (error) {
      showMessage(`Error fetching dog image: ${error.message}`, true);
    } finally {
      setIsLoading(false);
    }
  };

  const saveDogImage = async () => {
    if (!dogImage) {
      showMessage("Please fetch a dog image first!", true);
      return;
    }

    try {
      setIsLoading(true);
      showMessage("Saving dog image...");
      
      const fileResponse = await fetch(dogImage, { mode: "cors" });
      if (!fileResponse.ok) {
        throw new Error("Failed to fetch dog image");
      }

      const blob = await fileResponse.blob();
      const filename = dogImage.split("/").pop()?.split("?")[0] || "dog.jpg";
      const file = new File([blob], filename, { type: blob.type || "image/jpeg" });
      
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${API_BASE}/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Failed to save dog image");
      }

      showMessage("Dog image saved successfully!");
    } catch (error) {
      showMessage(`Error saving dog image: ${error.message}`, true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Image Gallery App</h1>
        {message && (
          <div className={`message ${message.includes("Error") ? "error" : "success"}`}>
            {message}
          </div>
        )}
      </header>

      <main>
        <section className="upload-section">
          <h2>Upload Image</h2>
          <form onSubmit={handleSubmitSingleFile} className="upload-form">
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleSingleFileChange}
              disabled={isLoading}
            />
            <button type="submit" disabled={!singleFile || isLoading}>
              Upload Image
            </button>
          </form>
        </section>

        <section className="fetch-section">
          <h2>Fetch Images</h2>
          <div className="button-group">
            <button onClick={fetchSingleFile} disabled={isLoading}>
              Fetch Random Image
            </button>
            <button onClick={fetchMultipleFiles} disabled={isLoading}>
              Fetch Multiple Images
            </button>
          </div>
        </section>

        <section className="dog-section">
          <h2>Dog Images</h2>
          <div className="button-group">
            <button onClick={fetchDogImage} disabled={isLoading}>
              Fetch Dog Image
            </button>
            <button onClick={saveDogImage} disabled={!dogImage || isLoading}>
              Save Dog Image
            </button>
          </div>
          {dogImage && (
            <div className="image-preview">
              <img src={dogImage} alt="Random dog" className="dog-image" />
            </div>
          )}
        </section>

        <section className="display-section">
          <h2>Image Gallery</h2>
          {displayImage && (
            <div className="single-image">
              <img src={displayImage} alt="Single random" />
            </div>
          )}
          <div className="image-grid">
            {displayImages.map((url, index) => (
              <div key={index} className="image-item">
                <img src={url} alt={`Random ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;
