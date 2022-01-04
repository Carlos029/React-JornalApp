
export const fileUpload = async(file) => {  

    const cloudURL = 'https://api.cloudinary.com/v1_1/dc1sebdms/image/upload'; 

    const formData = new FormData();      
    formData.append('upload_preset','react-journal');
    formData.append('file',file);

    try {

        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        })

        if(resp.ok){
            const cloudResp = await resp.json() 
            .then(({url}) => {
                return url
            })

            return cloudResp  
            
        }else{
            throw await resp.json()  
        }
        
    } catch (err) {
       throw err       
    }
   
}
