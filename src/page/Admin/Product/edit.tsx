import { message } from 'antd';
import React, { useState } from 'react'
import useSWR from 'swr';
import { upload } from '../../../api/images';

const EditProduct = () => {
    const [previewImage, setPreviewImage] = useState<any>('')
    const [imageUrl, setImageUrl] = useState('')
  
    const handleChangeImage = (event: any) => {
      const file = event.target.files[0]
      console.log(file);
      
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
    }
  
    const uploadImage = async (base64Image: string) => {
      try {
        const res = await upload(base64Image)
        const data = res.data
        setImageUrl(data.url)
      } catch(err:any) {
        console.log(err);
        message.error(JSON.stringify(err.message))
      }
    }
  
    const fetcher = (rest:any) => {
      console.log(rest)
    }
  
    const {data, error} = useSWR('/products', fetcher) 
    console.log(data)
    return (
      <>
        <h1>Cập nhật sản phẩm</h1>
        <input onChange={handleChangeImage} type="file" accept='image/png, image/jpg, image/jpeg ' />
        <button onClick={() => uploadImage(previewImage)}>Upload image</button>
        {imageUrl && <img src={imageUrl} alt="" />}
      </>
    );
  };

export default EditProduct