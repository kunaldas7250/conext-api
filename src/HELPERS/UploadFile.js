// const url=`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`
// console.log("process.env.REACT_APP_CLOUDINARY_CLOUD_NAME",process.env.REACT_APP_CLOUDINARY_CLOUD_NAME)
// const uploadFile=async(file)=>{
// const formData=new FormData()
// formData.append("file",file)
// formData.append("upload_preset","chat-app-file")
// const response= await fetch(url,{
//     method:"post",
//     body:formData
// })
// const responseData=await response.json()


// return responseData
// }


// export default uploadFile  


//2 nd code
const uploadFile = async (file) => {
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) {
      throw new Error("REACT_APP_CLOUDINARY_CLOUD_NAME is not defined");
    }
  
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
  
    // console.log("URL:", url);
    // console.log("process.env.REACT_APP_CLOUDINARY_CLOUD_NAME:", cloudName);
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "chat-app-file");
  
    // Debugging: Log the form data
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error: ${response.status} ${response.statusText}`);
        console.error("Response text:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const responseData = await response.json();
    //   console.log("Response Data:", responseData); // Log the response data for debugging
      return responseData;
    } catch (error) {
      console.error("Fetch error:", error); // Log the error object for debugging
      throw error;
    }
  };
  
  export default uploadFile;
  
  


// const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`

// const uploadFile = async(file)=>{
//     const formData = new FormData()
//     formData.append('file',file)
//     formData.append("upload_preset","chat-app-file")

//     const response = await fetch(url,{
//         method : 'post',
//         body : formData
//     })
//     const responseData = await response.json()


//     return responseData
// }

// export default uploadFile



// const uploadFile = async (file) => {
//     const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`;
  
//     console.log("process.env.REACT_APP_CLOUDINARY_CLOUD_NAME", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
  
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "chat-app-file");
  
//     for (let pair of formData.entries()) {
//       console.log(pair[0] + ', ' + pair[1]);
//     }
  
//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const responseData = await response.json();
//       return responseData;
//     } catch (error) {
//       console.error("Upload failed:", error);
//       throw error;
//     }
//   };
  
//   export default uploadFile;
  