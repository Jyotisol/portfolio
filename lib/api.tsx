export const sendContactForm = async (data:any) =>
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data), // Make sure data is a properly formatted object
        headers: {
          "Content-Type": "application/json", // Ensure JSON content type
          Accept: "application/json",
        },
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
      });
    